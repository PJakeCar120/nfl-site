import { useState, useEffect } from "react";
import Papa from "papaparse";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);


const YEARS = ["2024", "2023", "2022", "2021"];
const POSITIONS = ["QB", "RB", "WR", "TE", "IDL", "EDGE", "ILB", "CB", "S"];
const filePrefixMap = {
  QB: "QBScore", RB: "RBScore", WR: "WRScore", TE: "TEScore",
  IDL: "DIScore", EDGE: "EDScore", ILB: "ILBScore", CB: "CBScore", S: "SScore"
};

export default function WhoBetta() {
  const [position, setPosition] = useState("");
  const [allData, setAllData] = useState([]);

  const [search1, setSearch1] = useState("");
  const [search2, setSearch2] = useState("");
  const [selected1, setSelected1] = useState(null);
  const [selected2, setSelected2] = useState(null);
  const [year1, setYear1] = useState("");
  const [year2, setYear2] = useState("");

  useEffect(() => {
    if (!position || !filePrefixMap[position]) return;

    const loadData = async () => {
      const combined = [];
      await Promise.all(
        YEARS.map((year) =>
          new Promise((resolve) => {
            Papa.parse(`/assets/${filePrefixMap[position]}Results${year}.csv`, {
              download: true,
              header: true,
              complete: (res) => {
                res.data.forEach((row) => {
                  if (row.Name) {
                    combined.push({ ...row, year });
                  }
                });
                resolve();
              },
            });
          })
        )
      );
      setAllData(combined);
      setSelected1(null);
      setSelected2(null);
      setSearch1("");
      setSearch2("");
      setYear1("");
      setYear2("");
    };

    loadData();
  }, [position]);

  const getPlayer = (name, year) =>
    allData.find((p) => p.Name === name && p.year === year);

  const filteredNames = Array.from(new Set(allData.map((p) => p.Name)));

  const getAvailableYears = (name) =>
    YEARS.filter((year) =>
      allData.some((p) => p.Name === name && p.year === year)
    );

  const p1 = selected1 && year1 ? getPlayer(selected1, year1) : null;
  const p2 = selected2 && year2 ? getPlayer(selected2, year2) : null;

  const statKeys =
    p1 && p2
      ? Object.keys(p1).filter(
          (k) => !["Name", "Rank", "year"].includes(k) && k in p2
        )
      : [];

  const getColor = (key, value) => {
    const num = parseFloat(value);
    if (isNaN(num)) return "";
    const pct = Math.max(0, Math.min(1, num / 100));
    const red = Math.round(255 * (1 - pct));
    const green = Math.round(255 * pct);
    return `rgb(${red}, ${green}, 100)`;
  };

  return (
    <div className="w-full px-6 py-8 box-border">

      <h1 className="text-2xl font-bold mb-6">🔥 Head2Head</h1>

      <div className="w-full flex flex-wrap justify-center items-center gap-4 mb-8">
        <select
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          className="p-3 text-base border rounded shadow"
        >
          <option value="">Select Position</option>
          {POSITIONS.map((pos) => (
            <option key={pos}>{pos}</option>
          ))}
        </select>
      </div>

      {/* Player 1 Search */}
      <div className="w-full flex justify-center mb-4">
        <div className="flex w-full max-w-xl">
          <input
            type="text"
            list="player1-names"
            placeholder="Search Player 1"
            value={search1}
            onChange={(e) => {
              const input = e.target.value;
              setSearch1(input);
              const match = filteredNames.find(n => n.toLowerCase() === input.toLowerCase());
              if (match) setSelected1(match);
              setYear1("");
            }}
            className="w-full p-4 text-lg border rounded-l shadow text-center"
          />
          <datalist id="player1-names">
            {filteredNames
              .filter((n) => n.toLowerCase().includes(search1.toLowerCase()))
              .map((n) => (
                <option key={n} value={n} />
              ))}
          </datalist>
          <button
            onClick={() => {
              if (getAvailableYears(search1).length) setSelected1(search1);
            }}
            className="p-4 text-lg bg-blue-600 text-white rounded-r hover:bg-blue-700"
          >
            🔍
          </button>
        </div>
      </div>

      {selected1 && getAvailableYears(selected1).length > 0 && (
        <div className="flex justify-center mb-6">
          <select
            className="p-2 border rounded"
            value={year1}
            onChange={(e) => setYear1(e.target.value)}
          >
            <option value="">Select Year</option>
            {getAvailableYears(selected1).map((y) => (
              <option key={y}>{y}</option>
            ))}
          </select>
        </div>
      )}

      {/* Player 2 Search */}
      <div className="w-full flex justify-center mb-4">
        <div className="flex w-full max-w-xl">
          <input
            type="text"
            list="player2-names"
            placeholder="Search Player 2"
            value={search2}
            onChange={(e) => {
              const input = e.target.value;
              setSearch2(input);
              const match = filteredNames.find(n => n.toLowerCase() === input.toLowerCase());
              if (match) setSelected2(match);
              setYear2("");
            }}
            className="w-full p-4 text-lg border rounded-l shadow text-center"
          />
          <datalist id="player2-names">
            {filteredNames
              .filter((n) => n.toLowerCase().includes(search2.toLowerCase()))
              .map((n) => (
                <option key={n} value={n} />
              ))}
          </datalist>
          <button
            onClick={() => {
              if (getAvailableYears(search2).length) setSelected2(search2);
            }}
            className="p-4 text-lg bg-blue-600 text-white rounded-r hover:bg-blue-700"
          >
            🔍
          </button>
        </div>
      </div>

      {selected2 && getAvailableYears(selected2).length > 0 && (
        <div className="flex justify-center mb-10">
          <select
            className="p-2 border rounded"
            value={year2}
            onChange={(e) => setYear2(e.target.value)}
          >
            <option value="">Select Year</option>
            {getAvailableYears(selected2).map((y) => (
              <option key={y}>{y}</option>
            ))}
          </select>
        </div>
      )}

      {/* Table comparison */}
      {p1 && p2 && (
        <table className="table-auto w-full border border-gray-300 text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">Stat</th>
              <th className="p-2 border">{p1.Name} ({p1.year})</th>
              <th className="p-2 border">{p2.Name} ({p2.year})</th>
            </tr>
          </thead>
          <tbody>
            {statKeys.map((key) => (
              <tr key={key}>
                <td className="p-2 border text-center font-medium">{key}</td>
                <td
                  className="p-2 border text-center"
                  style={{ backgroundColor: getColor(key, p1[key]) }}
                >
                  {p1[key]}
                </td>
                <td
                  className="p-2 border text-center"
                  style={{ backgroundColor: getColor(key, p2[key]) }}
                >
                  {p2[key]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {p1 && p2 && (
  <div className="mt-10">
    <h3 className="text-lg font-bold mb-4 text-center">Stat Vector Comparison</h3>
    <div className="w-full mx-auto h-[400px] sm:h-[600px] md:h-[800px] max-w-full md:max-w-[1000px] px-4">


      <Radar
        data={{
          labels: statKeys,
          datasets: [
            {
              label: `${p1.Name} (${p1.year})`,
              data: statKeys.map((key) => parseFloat(p1[key])),
              backgroundColor: "rgba(59, 130, 246, 0.2)",
              borderColor: "rgba(59, 130, 246, 1)",
              borderWidth: 2,
            },
            {
              label: `${p2.Name} (${p2.year})`,
              data: statKeys.map((key) => parseFloat(p2[key])),
              backgroundColor: "rgba(16, 185, 129, 0.2)",
              borderColor: "rgba(16, 185, 129, 1)",
              borderWidth: 2,
            },
          ],
        }}
        options={{
          maintainAspectRatio: false,
          responsive: true,
          scales: {
            r: {
              suggestedMin: 0,
              suggestedMax: 100,
              pointLabels: {
                font: {
                  size: 10,
                  weight: 'bold',
                },
                color: "#000", // black
              },
              ticks: {
                backdropColor: "transparent",
              },
            },
          },
          plugins: {
            legend: {
              position: "top",
              labels: {
                color: "#000", // black
                font: {
                  weight: "bold",
                  size: 14, // optional tweak
                },
              },
            },
          },
        }}
      />
    </div>
  </div>
)}

      {!p1 || !p2 ? (
        <p className="text-gray-500 mt-6 text-center">
          Search two players and pick a year to compare.
        </p>
      ) : null}
    </div>
  );
}
