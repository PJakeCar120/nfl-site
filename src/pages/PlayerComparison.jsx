import { useEffect, useState } from "react";
import Papa from "papaparse";
import Select from "react-select";

const years = ["2024", "2023", "2022", "2021"];

// Define stat columns (excluding analytical score columns)
const TE_COLS = [
  "First Downs per Route Run",
  "Receiving Yards per Game",
  "Yards per Route Run",
  "Missed Tackles Forced per Reception",
  "Drop Rate",
  "Run Block Grade",
  "Yards per Target Over Expectation",
  "Yards After Catch per Reception",
  "Pass Block Grade",
  "TDs per Route Run",
  "Contested Catch Rate"
];

const WR_COLS = [
  "Yards per Route Run",
  "Receiving YPG",
  "First Downs per Route Run",
  "Air Yards",
  "TDs per Route Run",
  "Yards per Target Over Expectation",
  "Slot Rate",
  "Yards After Catch per Reception",
  "Contested Catch %",
  "QB Rating When Targeted",
  "Missed Tackles Forced per Reception"
];

const QB_COLS = [
  "Comp. % Over Expected",
  "Hero Throw %",
  "Turnover Worthy Throw %",
  "Pressure Sack Rate",
  "Drop %",
  "Rush YPG",
  "Adj. Comp %",
  "Pass TD/G",
  "Rush TD/G",
  "Fum/G",
  "Int/G"
];

const CB_COLS = [
  "Coverage Snaps per Reception",
  "QB Rating Against",
  "Yards Allowed per Snap",
  "Forced Incompletion Rate",
  "Interceptions",
  "Catch Rate Allowed",
  "Missed Tackle Rate",
  "Penalties per Snap",
  "TDs Allowed per Snap",
  "Coverage Snaps",
  "Slot Coverage Snaps",
  "Tackles"
];

const S_COLS = [
  "Forced Fumbles per Snap",
  "Interceptions per Snap",
  "Sacks per Snap",
  "Missed Tackle Rate",
  "QB Rating Against",
  "Snap Count"
];

const RB_COLS = [
  "Explosive Run %",
  "Attempts per Game",
  "Receiving Yards per Game",
  "Yards Before Contact per Run",
  "Touchdowns per Game",
  "Missed Tackles Forced per Attempt",
  "PFF Pass Blocking Grade",
  "Stuffed Run %"
];

const IDL_COLS = [
  "Pass Rush Win Rate",
  "Hurries per Snap",
  "Hits per Snap",
  "Sacks per Snap",
  "Pass Snaps/Game",
  "Pressures per Snap",
  "Average Depth of Tackle",
  "Forced Fumbles per Snap",
  "Run Snaps/Game",
  "Tackles per Snap",
  "Stops per Snap"
];

const IDL_WEIGHTS = [40, 30, 26, 20, 30, 10, 10, 6, 16, 8, 5];

const EDGE_COLS = [
  "Sacks per Snap",
  "Pass Snaps per Game",
  "Hurries per Snap",
  "Pass Rush Win Rate",
  "Forced Fumbles per Snap",
  "Hits per Snap",
  "Run Snaps per Game",
  "Avg Depth of Tackle",
  "Tackles per Snap",
  "Pressures per Snap",
  "Stop %"
];

const EDGE_WEIGHTS = [20, 22, 11, 14, 8, 5, 12, 5, 5, 4, 4]; // match your `edge_weights` values


// Define weights in same order as columns
const QB_WEIGHTS = [2, 4, 6, 5, 1, 2, 4, 4.5, 1, 1, 3];

const RB_WEIGHTS = [7, 7, 5, 4, 3, 2, 2, 1];

const WR_WEIGHTS = [8, 7, 6, 5, 5, 3, 3, 2, 2, 2, 1];

const TE_WEIGHTS = [14, 14, 12, 5, 5, 5, 4, 3, 3, 1, 1];

const CB_WEIGHTS = [5, 16, 22, 3, 12, 1, 9, 1, 1, 20, 5, 1];

const S_WEIGHTS = [2, 6, 7, 1, 6, 6];

export default function PlayerComparison() {
  const [position, setPosition] = useState("");
  const [dataByYear, setDataByYear] = useState({});
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [similarPlayers, setSimilarPlayers] = useState([]);

  useEffect(() => {
    if (!position) return;

    const positionToFilePrefix = {
      IDL: "DI",
      EDGE: "ED",
      QB: "QB",
      RB: "RB",
      WR: "WR",
      TE: "TE",
      CB: "CB",
      S: "S",
    };
    


    const fetchData = async () => {
      const allData = {};
      await Promise.all(
        years.map((year) =>
          new Promise((resolve) => {
            Papa.parse(`/assets/${positionToFilePrefix[position]}ScoreResults${year}.csv`, {
              download: true,
              header: true,
              complete: (result) => {
                allData[year] = result.data;
                resolve();
              },
            });
          })
        )
      );
      setDataByYear(allData);
    };
    fetchData();
  }, [position]);

  const COLUMNS =
  position === "WR"
    ? WR_COLS
    : position === "QB"
    ? QB_COLS
    : position === "CB"
    ? CB_COLS
    : position === "S"
    ? S_COLS
    : position === "RB"
    ? RB_COLS
    : position === "IDL"
    ? IDL_COLS
    : position === "EDGE"
    ? EDGE_COLS
    : TE_COLS;

const WEIGHTS =
  position === "WR"
    ? WR_WEIGHTS
    : position === "QB"
    ? QB_WEIGHTS
    : position === "CB"
    ? CB_WEIGHTS
    : position === "S"
    ? S_WEIGHTS
    : position === "RB"
    ? RB_WEIGHTS
    : position === "IDL"
    ? IDL_WEIGHTS
    : position === "EDGE"
    ? EDGE_WEIGHTS
    : TE_WEIGHTS;



  const allPlayers = years
    .flatMap((year) =>
      (dataByYear[year] || []).map((row) => ({
        label: `${row.Name} (${year})`,
        value: { name: row.Name, year },
      }))
    )
    .sort((a, b) => a.label.localeCompare(b.label));

  const getStatsVector = (row) => COLUMNS.map((col) => parseFloat(row[col]));

  const computeSimilarity = (v1, v2, weights) => {
    const weightedSum = v1.reduce((sum, val, i) => {
      const weight = weights?.[i] ?? 1;
      return sum + weight * (val - v2[i]) ** 2;
    }, 0);
    return 100 * (1 - Math.sqrt(weightedSum) / Math.sqrt(v1.length * (100 ** 2)));
  };

  const handleSelect = (option) => {
    const { name, year } = option.value;
    const baseRow = (dataByYear[year] || []).find((r) => r.Name === name);
    const baseVec = getStatsVector(baseRow);
    if (baseVec.includes(NaN)) return;

    const allOthers = years
      .flatMap((y) =>
        (dataByYear[y] || []).map((r) => ({
          name: r.Name,
          year: y,
          vec: getStatsVector(r),
        }))
      )
      .filter(
        (r) =>
          !(r.name === name && r.year === year) &&
          r.vec.length === baseVec.length &&
          !r.vec.includes(NaN)
      );

    const distances = allOthers.map((r) => ({
      name: r.name,
      year: r.year,
      similarity: computeSimilarity(baseVec, r.vec, WEIGHTS),
    }));

    const sorted = distances
      .filter((r) => !isNaN(r.similarity))
      .sort((a, b) => b.similarity - a.similarity)
      .slice(0, 5);

    setSelectedPlayer(option);
    setSimilarPlayers(sorted);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">🔍 Player Similarity Tool</h2>

      <div className="mb-4">
        <label className="font-semibold mr-2">Select Position:</label>
        <select
          value={position}
          onChange={(e) => {
            setPosition(e.target.value);
            setSelectedPlayer(null);
            setSimilarPlayers([]);
          }}
          className="p-2 border rounded"
        >
          <option value="" disabled>Select Position</option>
          <option value="QB">QB</option>
          <option value="RB">RB</option>
          <option value="WR">WR</option>
          <option value="TE">TE</option>
          <option value="IDL">IDL</option>
          <option value="EDGE">EDGE</option>
          <option value="CB">CB</option>
          <option value="S">S</option>
        </select>
      </div>

      {position && (
        <Select
          options={allPlayers}
          onChange={handleSelect}
          placeholder={`Select a ${position} season`}
          className="mb-8"
          styles={{
            control: (base) => ({
              ...base,
              backgroundColor: "#f9fafb",
              color: "#000",
            }),
            singleValue: (base) => ({
              ...base,
              color: "#000",
            }),
            menu: (base) => ({
              ...base,
              backgroundColor: "#fff",
              color: "#000",
            }),
            option: (base, state) => ({
              ...base,
              backgroundColor: state.isFocused ? "#e5e7eb" : "#fff",
              color: "#000",
            }),
          }}
        />
      )}

      {selectedPlayer && (
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Top 5 Similar Seasons to {selectedPlayer.label}
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            {similarPlayers.map((p, i) => (
              <li key={i}>
                {p.name} ({p.year}) — Similarity Score: {p.similarity.toFixed(1)}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
