// StatVectorChart.jsx
import { useEffect, useState } from "react";
import Papa from "papaparse";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from "chart.js";
import {
  getStatColumns,
  getStatWeights,
  getStatsVector,
  computeSimilarity
} from "./vectorUtils";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const YEARS = ["2024", "2023", "2022", "2021"];

export default function StatVectorChart({ name, year, position }) {
  const [base, setBase] = useState(null);
  const [match, setMatch] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!name || !position) return;

    const prefix = {
      IDL: "DI",
      EDGE: "ED",
      ILB: "ILB",
      QB: "QB",
      RB: "RB",
      WR: "WR",
      TE: "TE",
      CB: "CB",
      S: "S"
    }[position];

    if (!prefix) return;

    Promise.all(
      YEARS.map((yr) =>
        new Promise((resolve) => {
          Papa.parse(`/assets/${prefix}ScoreResults${yr}.csv`, {
            download: true,
            header: true,
            complete: (res) => {
              const rows = res.data.filter((r) => r.Name);
              resolve(rows.map((r) => ({ ...r, year: yr })));
            }
          });
        })
      )
    ).then((all) => {
      setData(all.flat());
    });
  }, [name, position]);

  useEffect(() => {
    if (!data.length) return;

    const cols = getStatColumns(position);
    const weights = getStatWeights(position);

    const player = data.find((r) => r.Name === name && r.year === year);
    if (!player) return;

    const playerVec = getStatsVector(player, cols);
    if (!playerVec || playerVec.some((v) => isNaN(v))) return;

    setBase({ ...player, vec: playerVec });

    const others = data
      .filter((r) => r.Name !== name)
      .map((r) => {
        const vec = getStatsVector(r, cols);
        const sim = computeSimilarity(playerVec, vec, weights);
        return { ...r, vec, sim };
      })
      .filter((r) => r.vec && !r.vec.some((v) => isNaN(v)) && !isNaN(r.sim))
      .sort((a, b) => b.sim - a.sim);

    if (others.length > 0) setMatch(others[0]);
  }, [data, name, year, position]);

  if (!base || !match) return null;

  return (
    <div className="mt-10 max-w-5xl mx-auto">
      <h3 className="text-xl font-semibold text-center mb-6">
        Most Similar Season
      </h3>
      <div className="relative h-[500px]">
        <Radar
          data={{
            labels: getStatColumns(position),
            datasets: [
              {
                label: `${base.Name} (${base.year})`,
                data: base.vec,
                backgroundColor: "rgba(59, 130, 246, 0.2)",
                borderColor: "rgba(59, 130, 246, 1)",
                borderWidth: 2
              },
              {
                label: `${match.Name} (${match.year})`,
                data: match.vec,
                backgroundColor: "rgba(16, 185, 129, 0.2)",
                borderColor: "rgba(16, 185, 129, 1)",
                borderWidth: 2
              }
            ]
          }}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              r: {
                suggestedMin: 0,
                suggestedMax: 100,
                pointLabels: {
                  font: { size: 10, weight: "bold" },
                  color: "#000"
                },
                ticks: { backdropColor: "transparent" }
              }
            },
            plugins: {
              legend: {
                position: "top",
                labels: {
                  color: "#000",
                  font: { weight: "bold", size: 14 }
                }
              }
            }
          }}
        />
      </div>
    </div>
  );
}
