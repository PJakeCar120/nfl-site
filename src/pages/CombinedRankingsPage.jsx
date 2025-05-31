import { useEffect, useState } from "react";
import Papa from "papaparse";
import { Link, useParams } from "react-router-dom";

const labelMap = {
  qb: "QB",
  rb: "RB",
  wr: "WR",
  te: "TE",
  idl: "IDL",
  edge: "EDGE",
  ilb: "ILB",
  cb: "CB",
  s: "S",
};

const YEARS = ["2024", "2023", "2022", "2021"];

export default function CombinedRankingsPage() {
  const { pos } = useParams();
  const position = pos.toLowerCase();
  const displayName = labelMap[position] || pos.toUpperCase();

  const [data, setData] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [scoreCol, setScoreCol] = useState("");
  const [sortCol, setSortCol] = useState("Rank");
  const [sortOrder, setSortOrder] = useState("asc");

  const scoreColMap = {
    qb: "Analytical Quarterback Score",
    rb: "Analytical Running Back Score (ARBS)",
    wr: "Analytical Wide Receiver Score (AWRS)",
    te: "Analytical Tight End Score (ATES)",
    idl: "Analytical Interior Defensive Lineman Score (AIS)",
    edge: "Analytical EDGE Score (AES)",
    ilb: "Analytical ILB Score (ILS)",
    cb: "Analytical Cornerback Score (ACS)",
    s: "Analytical Safety Score (ASS)",
  };

  const getColorScale = (value, colMin, colMax, key) => {
    if (key === "Year" || key === "Rank") return undefined;
    const num = parseFloat(value);
    if (isNaN(num)) return "inherit";
    const percent = Math.max(0, Math.min(1, (num - colMin) / (colMax - colMin)));
    const red = Math.round(255 * (1 - percent));
    const green = Math.round(255 * percent);
    return `rgb(${red}, ${green}, 100)`;
  };

  useEffect(() => {
    const fetchData = async () => {
      const allRows = [];
      let firstHeaders = null;

      const csvPrefixMap = {
        idl: "DIScoreResults",
        edge: "EDScoreResults",
        qb: "QBScoreResults",
        rb: "RBScoreResults",
        wr: "WRScoreResults",
        te: "TEScoreResults",
        ilb: "ILBScoreResults",
        cb: "CBScoreResults",
        s: "SScoreResults"
      };

      const scoreColumn = scoreColMap[position];

      for (const year of YEARS) {
        try {
          const res = await fetch(`/assets/${csvPrefixMap[position]}${year}.csv`);
          const text = await res.text();
          const parsed = Papa.parse(text, { header: true });

          if (!firstHeaders) {
            firstHeaders = parsed.meta.fields;
            setScoreCol(scoreColumn);
            setHeaders(["Year", "Rank", "Name", ...firstHeaders.filter((h) => h !== "Name" && h !== "Rank")]);
          }

          parsed.data.forEach((row) => {
            if (row.Name && row[scoreColumn]) {
              allRows.push({
                ...row,
                Year: year,
                Score: parseFloat(row[scoreColumn]),
              });
            }
          });
        } catch (e) {
          console.warn(`Failed to load data for ${year} ${position}:`, e);
        }
      }

      const ranked = allRows
        .filter((row) => !isNaN(row.Score))
        .sort((a, b) => b.Score - a.Score)
        .map((row, i) => ({ ...row, Rank: i + 1 }));

      setData(ranked);
    };

    fetchData();
  }, [position]);

  const sorted = [...data].sort((a, b) => {
    const aVal = parseFloat(a[sortCol]) || a[sortCol];
    const bVal = parseFloat(b[sortCol]) || b[sortCol];
    if (aVal < bVal) return sortOrder === "asc" ? -1 : 1;
    if (aVal > bVal) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });

  const colMinMax = {};
  headers.forEach((h) => {
    const vals = data.map((d) => parseFloat(d[h])).filter((x) => !isNaN(x));
    colMinMax[h] = { min: Math.min(...vals), max: Math.max(...vals) };
  });

  if (!scoreCol || data.length === 0) {
    return (
      <div className="px-4 py-12 text-lg">
        Loading combined {displayName} rankings...
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 py-12">
      <h1 className="text-3xl font-bold mb-8">
        Combined 2021–2024 {displayName} Score Rankings
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 text-sm ranking-table">
          <thead className="bg-gray-100">
            <tr>
              {headers.map((h) => (
                <th
                  key={h}
                  className="border p-2 cursor-pointer text-xs sm:text-sm"
                  onClick={() => {
                    if (sortCol === h) {
                      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
                    } else {
                      setSortCol(h);
                      setSortOrder("desc");
                    }
                  }}
                >
                  {h} {sortCol === h ? (sortOrder === "asc" ? "↑" : "↓") : ""}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sorted.map((row, i) => (
              <tr key={i} className="odd:bg-white even:bg-gray-50">
                {headers.map((h, j) => {
                  const val = row[h];
                  const bg = getColorScale(val, colMinMax[h].min, colMinMax[h].max, h);
                  return (
                    <td
                      key={j}
                      className="border px-2 py-1 text-[10px] sm:text-sm font-mono max-w-[80px] break-normal"
                      style={{ backgroundColor: bg }}
                    >
                      {h === "Name" ? (
                        <Link
                        to={`/playersearch?name=${encodeURIComponent(val)}`}
                        className="text-blue-600 underline hover:text-blue-800"
                      >
                        {val}
                      </Link>
                      
                      
                      ) : (
                        val
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
