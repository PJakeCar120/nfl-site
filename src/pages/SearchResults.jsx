import { useState, useEffect } from "react";
import Papa from "papaparse";
import { useLocation } from "react-router-dom";

const YEARS = ["2021", "2022", "2023", "2024"];
const POSITIONS = ["QB", "RB", "WR", "TE", "DI", "EDGE", "ILB", "CB", "S"];

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
                  S: "SScore"
                };

                Papa.parse(`/assets/${positionToFilePrefix[pos]}Results${year}.csv`, {
                  download: true,
                  header: true,
                  complete: (res) => {
                    res.data.forEach((row) => {
                      if (row.Name) {
                        combined.push({
                          year,
                          position: pos === "DI" ? "IDL" : pos, // convert DI -> IDL
                          name: row.Name,
                          rank: row.Rank,
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
                });
              })
          )
        )
      );
      setAllData(combined);
    };

    loadData();
  }, []);

  // Handle ?name= query param
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const nameParam = params.get("name");
    if (nameParam && allData.length > 0) {
      setSearchTerm(nameParam);
      const term = nameParam.toLowerCase().trim();
      const matches = allData.filter((p) =>
        p.name.toLowerCase().includes(term)
      );
      setResults(matches);
    }
  }, [location.search, allData]);

  const handleSearch = () => {
    const term = searchTerm.toLowerCase().trim();
    const matches = allData.filter((p) =>
      p.name.toLowerCase().includes(term)
    );
    setResults(matches);
  };

  const sortedResults = [...results].sort((a, b) => parseInt(b.year) - parseInt(a.year));

  const getColor = (key, value) => {
    const isScore = key.toLowerCase().includes("score");
    const num = parseFloat(value);
    if (isNaN(num) || isScore) return "";
    const pct = Math.max(0, Math.min(1, num / 100));
    const red = Math.round(255 * (1 - pct));
    const green = Math.round(255 * pct);
    return `rgb(${red}, ${green}, 100)`;
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Centered Big Search Bar */}
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
          <h2 className="text-2xl font-bold mb-6">🔍 Results for "{searchTerm}"</h2>
          {sortedResults.map((player, index) => {
            const { name, rank, year, position, ...stats } = player;

            return (
              <div key={index} className="mb-10">
                <h3 className="text-xl font-semibold mb-2">
                  {name} — {position}, {year}
                </h3>
                <table className="table-auto w-full text-sm border border-gray-300">
                  <thead>
                    <tr>
                      <th className="p-2 bg-gray-100 border border-gray-300 text-center">Rank</th>
                      <th className="p-2 bg-gray-100 border border-gray-300 text-center">Name</th>
                      {Object.keys(stats).map((key) => (
                        <th
                          key={key}
                          className="p-2 bg-gray-100 border border-gray-300 text-center"
                        >
                          {key}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-2 border border-gray-300 text-center">{rank}</td>
                      <td className="p-2 border border-gray-300 text-center">{name}</td>
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
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}
