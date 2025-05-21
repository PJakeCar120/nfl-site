import { useState, useEffect } from "react";
import Papa from "papaparse";
import { useLocation } from "react-router-dom";
import { awardsData } from "./Awards"; // 
import StatVectorChart from "./StatVectorChart";


const YEARS = ["2021", "2022", "2023", "2024"];
const POSITIONS = ["QB", "RB", "WR", "TE", "DI", "EDGE", "ILB", "CB", "S"];

const handleDownloadTableImage = async () => {
  const tableElement = document.querySelector("table");
  if (!tableElement) return;

  const { default: html2canvas } = await import("html2canvas");

  const canvas = await html2canvas(tableElement, {
    backgroundColor: "#ffffff",
    scale: 2,
  });

  canvas.toBlob((blob) => {
    if (blob) {
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "player-table.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }
  });
};


const findPlayerHonors = (name, year) => {
  const data = awardsData[year];
  if (!data) return "";

  const honors = [];

  const normalize = (str) => str.replace(/[^a-zA-Z]/g, "").toLowerCase();
  const cleanName = normalize(name);

  (data.awards || []).forEach((award) => {
    if (normalize(award.winner).includes(cleanName)) {
      if (award.title === "Most Valuable Player") honors.push("MVP");
      if (award.title === "Offensive Player of the Year") honors.push("OPOY");
      if (award.title === "Defensive Player of the Year") honors.push("DPOY");
      if (award.title === "Offensive Rookie of the Year") honors.push("OROY");
      if (award.title === "Defensive Rookie of the Year") honors.push("DROY");
    }
  });

  if ((data.firstTeam || []).some((p) => normalize(p).includes(cleanName))) {
    honors.push("1st Team All-Pro");
  } else if ((data.secondTeam || []).some((p) => normalize(p).includes(cleanName))) {
    honors.push("2nd Team All-Pro");
  }

  const stripPositionPrefix = (playerString) => {
    const parts = playerString.split(": ");
    return parts.length > 1 ? parts[1] : parts[0];
  };

  if (
    (data.proBowl?.NFC || []).some((p) => normalize(stripPositionPrefix(p)).includes(cleanName)) ||
    (data.proBowl?.AFC || []).some((p) => normalize(stripPositionPrefix(p)).includes(cleanName))
  ) {
    honors.push("Pro Bowl");
  }
  if ((data.allRookie || []).some((p) => normalize(stripPositionPrefix(p)).includes(cleanName))) {
    honors.push("All-Rookie Team");
  }

  return honors.join(", ");
};



export default function SearchResults() {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const [allData, setAllData] = useState([]);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const combined = [];
      await Promise.all(
        POSITIONS.flatMap((pos) =>
          YEARS.map(
            (year) =>
              new Promise((resolve) => {
                const positionToFilePrefix = {
                  DI: "DIScore",
                  ILB: "ILBScore",
                  EDGE: "EDScore",
                  QB: "QBScore",
                  RB: "RBScore",
                  WR: "WRScore",
                  TE: "TEScore",
                  CB: "CBScore",
                  S: "SScore",
                };

                Papa.parse(
                  `/assets/${positionToFilePrefix[pos]}Results${year}.csv`,
                  {
                    download: true,
                    header: true,
                    complete: (res) => {
                      res.data.forEach((row) => {
                        if (row.Name) {
                          combined.push({
                            year,
                            position: pos === "DI" ? "IDL" : pos,
                            name: row.Name,
                            rank: row.Rank,
                            honors: findPlayerHonors(row.Name, year), // ✅ add honors
                            ...Object.fromEntries(
                              Object.entries(row).filter(
                                ([key]) => key !== "Name" && key !== "Rank"
                              )
                            ),
                          });
                        }
                      });
                      resolve();
                    },
                  }
                );
              })
          )
        )
      );
      setAllData(combined);
    };

    loadData();
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const nameParam = params.get("name");
  
    if (nameParam && allData.length > 0) {
      setSearchTerm(nameParam);
      const term = nameParam.toLowerCase().trim();
      const matches = allData.filter((p) =>
        p.name.toLowerCase().includes(term)
      );
  
      if (matches.length === 1) {
        const player = matches[0];
        const formattedName = player.name
          .toLowerCase()
          .replace(/\./g, "")     // remove periods
          .replace(/\s+/g, "-");   // replace spaces with hyphens
  
        const formattedPosition = player.position.toLowerCase();
        window.location.href = `/players/${formattedPosition}/${formattedName}`;
      } else {
        setResults(matches);
      }
    }
  }, [location.search, allData]);
  
  

  const handleSearch = () => {
    const term = searchTerm.toLowerCase().trim();
    const matches = allData.filter((p) =>
      p.name.toLowerCase().includes(term)
    );
    setResults(matches);
  };

  const sortedResults = [...results].sort(
    (a, b) => parseInt(b.year) - parseInt(a.year)
  );

  const getColor = (key, value) => {
    const isScore = key.toLowerCase().includes("score");
    const num = parseFloat(value);
    if (isNaN(num) || isScore) return "";
    const pct = Math.max(0, Math.min(1, num / 100));
    const red = Math.round(255 * (1 - pct));
    const green = Math.round(255 * pct);
    return `rgb(${red}, ${green}, 100)`;
  };
  const selectedPlayer = sortedResults.length > 0 ? sortedResults[0] : null;
  return (
    <div className="px-4 py-6 w-full">
      <div className="w-full flex justify-center mb-10">
        <div className="flex w-full max-w-xl">
          <input
            type="text"
            placeholder="Search players..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch();
            }}
            className="w-full p-4 text-lg border rounded-l shadow text-center"
          />
          <button
            onClick={handleSearch}
            className="p-4 text-lg bg-blue-600 text-white rounded-r hover:bg-blue-700"
          >
            🔍
          </button>
        </div>
      </div>
  
      {results.length === 0 ? (
  <div className="text-center mt-10">
    <h2 className="text-2xl font-bold mb-2">🔍 Search Players</h2>
    <p className="text-gray-600 text-base">
      Use the search bar above to look up a player and view their stats.
    </p>
  </div>
) : (
  <>
    <h2 className="text-2xl font-bold mb-6 text-center">
      🔍 Results for "{searchTerm}"
    </h2>
    <div className="w-full flex justify-center">
      <div className="overflow-x-auto w-full">

        <div className="mb-4 flex justify-center">
          <button
            onClick={handleDownloadTableImage}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            ⬇️ Download Table as Image
          </button>
        </div>

        <table className="table-auto w-full text-sm border border-gray-300">
          <thead>
            <tr>
              <th className="p-2 px-8 bg-gray-100 border border-gray-300 text-center">Position</th>
              <th className="p-2 px-8 bg-gray-100 border border-gray-300 text-center">Year</th>
              <th className="p-2 px-8 bg-gray-100 border border-gray-300 text-center">Name</th>
              <th className="p-2 px-8 bg-gray-100 border border-gray-300 text-center">Rank</th>
              {sortedResults.length > 0 &&
                Object.keys(sortedResults[0])
                  .filter(
                    (key) =>
                      !["year", "position", "rank", "name", "honors"].includes(key)
                  )
                  .map((key) => (
                    <th
                      key={key}
                      className="p-2 bg-gray-100 border border-gray-300 text-center"
                    >
                      {key}
                    </th>
                  ))}
              <th className="p-2 px-8 bg-gray-100 border border-gray-300 text-center">
                Football Analytics Nerd Awards
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedResults.map((player, index) => {
              const { year, position, rank, name, honors, ...stats } = player;
              return (
                <tr key={index}>
                  <td className="p-2 px-8 border border-gray-300 text-center">{position}</td>
                  <td className="p-2 px-8 border border-gray-300 text-center">{year}</td>
                  <td className="p-2 px-8 border border-gray-300 text-center">{name}</td>
                  <td className="p-2 px-8 border border-gray-300 text-center">{rank}</td>
                  {Object.entries(stats).map(([key, val]) => {
                    const style = getColor(key, val)
                      ? { backgroundColor: getColor(key, val) }
                      : {};
                    return (
                      <td
                        key={key}
                        className="p-2 border border-gray-300 text-center"
                        style={style}
                      >
                        {val}
                      </td>
                    );
                  })}
                  <td className="p-2 px-8 border border-gray-300 text-center">
                    {honors || "-"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
        {/* Stat Vector Comparison Chart */}
        {selectedPlayer && (
  <StatVectorChart
    name={selectedPlayer.name}
    year={selectedPlayer.year}
    position={selectedPlayer.position}
  />
)}

      </>
    )}
  </div>
);
}