import { useEffect, useState } from "react";
import Papa from "papaparse";
import Select from "react-select";

const years = ["2024", "2023", "2022", "2021"];
const WR_PERCENTILE_COLS = [
    "Analytical Wide Receiver Score (AWRS)",
    "Air Yards",
    "Yards per Route Run",
    "Yards After Catch per Reception",
    "Team TD %",
    "First Downs per Route Run",
    "Contested Catch %",
    "QB Rating When Targeted",
    "Yards per Target Over Expectation",
    "Slot Rate",
    "Receiving YPG",
    "Catch Rate"
  ];

export default function PlayerComparison() {
  const [dataByYear, setDataByYear] = useState({});
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [similarPlayers, setSimilarPlayers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const allData = {};
      await Promise.all(
        years.map((year) =>
          new Promise((resolve) => {
            Papa.parse(`/assets/WRScoreResults${year}.csv`, {
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
  }, []);

  const allPlayers = years.flatMap((year) =>
    (dataByYear[year] || []).map((row) => ({
      label: `${row.Name} (${year})`,
      value: { name: row.Name, year },
    }))
  ).sort((a, b) => a.label.localeCompare(b.label));

  const getStatsVector = (row) =>
    WR_PERCENTILE_COLS.map((col) => parseFloat(row[col]));

  const computeSimilarity = (v1, v2) => {
    const dist = Math.sqrt(v1.reduce((sum, val, i) => sum + (val - v2[i]) ** 2, 0));
    return 100 * (1 - dist / Math.sqrt(v1.length * (100 ** 2)));
  };

  const handleSelect = (option) => {
    const { name, year } = option.value;
    const baseRow = (dataByYear[year] || []).find((r) => r.Name === name);
    const baseVec = getStatsVector(baseRow);

    if (baseVec.includes(NaN)) return;

    const allOthers = years.flatMap((y) =>
      (dataByYear[y] || []).map((r) => ({
        name: r.Name,
        year: y,
        vec: getStatsVector(r),
      }))
    ).filter((r) =>
      !(r.name === name && r.year === year) &&
      r.vec.length === baseVec.length &&
      !r.vec.includes(NaN)
    );

    const distances = allOthers.map((r) => ({
      name: r.name,
      year: r.year,
      similarity: computeSimilarity(baseVec, r.vec),
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
      <h2 className="text-3xl font-bold mb-6">🔍 WR Similarity Tool</h2>

      <Select
        options={allPlayers}
        onChange={handleSelect}
        placeholder="Select a WR season"
        className="mb-8"
      />

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
