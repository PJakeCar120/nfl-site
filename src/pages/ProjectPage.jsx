import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Papa from "papaparse";
import { Link } from "react-router-dom"; //




const projects = {
  // 🔢 QB Rankings
  qb2024: {
    title: "2024 QB Score Rankings",
    description: "QB model results: all stats in percentiles except AQS (min 250 dropbacks). The Analytical Score uses my custom formula, weighting the most important stats more heavily. It is meant to serve as an overall season grade.",
    csvUrl: "/assets/QBScoreResults2024.csv",
  },
  qb2023: {
    title: "2023 QB Score Rankings",
    description: "QB model results: all stats in percentiles except AQS (min 250 dropbacks). The Analytical Score uses my custom formula, weighting the most important stats more heavily. It is meant to serve as an overall season grade.",
    csvUrl: "/assets/QBScoreResults2023.csv",
  },
  qb2022: {
    title: "2022 QB Score Rankings",
    description: "QB model results: all stats in percentiles except AQS (min 250 dropbacks). The Analytical Score uses my custom formula, weighting the most important stats more heavily. It is meant to serve as an overall season grade.",
    csvUrl: "/assets/QBScoreResults2022.csv",
  },
  qb2021: {
    title: "2021 QB Score Rankings",
    description: "QB model results: all stats in percentiles except AQS (min 250 dropbacks). The Analytical Score uses my custom formula, weighting the most important stats more heavily. It is meant to serve as an overall season grade.",
    csvUrl: "/assets/QBScoreResults2021.csv",
  },
  rb2024: {
    title: "2024 RB Score Rankings",
    description: "RB model results: all stats in percentiles except ARBS (min 50 rushes). The Analytical Score uses my custom formula, weighting the most important stats more heavily. It is meant to serve as an overall season grade.",
    csvUrl: "/assets/RBScoreResults2024.csv",
  },
  rb2023: {
    title: "2023 RB Score Rankings",
    description: "RB model results: all stats in percentiles except ARBS (min 50 rushes). The Analytical Score uses my custom formula, weighting the most important stats more heavily. It is meant to serve as an overall season grade.",
    csvUrl: "/assets/RBScoreResults2023.csv",
  },
  rb2022: {
    title: "2022 RB Score Rankings",
    description: "RB model results: all stats in percentiles except ARBS (min 50 rushes). The Analytical Score uses my custom formula, weighting the most important stats more heavily. It is meant to serve as an overall season grade.",
    csvUrl: "/assets/RBScoreResults2022.csv",
  },
  rb2021: {
    title: "2021 RB Score Rankings",
    description: "RB model results: all stats in percentiles except ARBS (min 50 rushes). The Analytical Score uses my custom formula, weighting the most important stats more heavily. It is meant to serve as an overall season grade.",
    csvUrl: "/assets/RBScoreResults2021.csv",
  },

  // 🧤 WR Rankings
  wr2024: {
    title: "2024 WR Score Rankings",
    description: "WR model results: all stats in percentiles except AWRS (min 30 targets). The Analytical Score uses my custom formula, weighting the most important stats more heavily. It is meant to serve as an overall season grade.",
    csvUrl: "/assets/WRScoreResults2024.csv",
  },
  wr2023: {
    title: "2023 WR Score Rankings",
    description: "WR model results: all stats in percentiles except AWRS (min 30 targets). The Analytical Score uses my custom formula, weighting the most important stats more heavily. It is meant to serve as an overall season grade.",
    csvUrl: "/assets/WRScoreResults2023.csv",
  },
  wr2022: {
    title: "2022 WR Score Rankings",
    description: "WR model results: all stats in percentiles except AWRS (min 30 targets). The Analytical Score uses my custom formula, weighting the most important stats more heavily. It is meant to serve as an overall season grade.",
    csvUrl: "/assets/WRScoreResults2022.csv",
  },
  wr2021: {
    title: "2021 WR Score Rankings",
    description: "WR model results: all stats in percentiles except AWRS (min 30 targets). The Analytical Score uses my custom formula, weighting the most important stats more heavily. It is meant to serve as an overall season grade.",
    csvUrl: "/assets/WRScoreResults2021.csv",
  },
  te2024: {
    title: "2024 TE Score Rankings",
    description: "TE model results: all stats in percentiles except ATES (min 200 routes). The Analytical Score uses my custom formula, weighting the most important stats more heavily. It is meant to serve as an overall season grade.",
    csvUrl: "/assets/TEScoreResults2024.csv",
  },
  te2023: {
    title: "2023 TE Score Rankings",
    description: "TE model results: all stats in percentiles except ATES (min 200 routes). The Analytical Score uses my custom formula, weighting the most important stats more heavily. It is meant to serve as an overall season grade.",
    csvUrl: "/assets/TEScoreResults2023.csv",
  },
  te2022: {
    title: "2022 TE Score Rankings",
    description: "TE model results: all stats in percentiles except ATES (min 200 routes). The Analytical Score uses my custom formula, weighting the most important stats more heavily. It is meant to serve as an overall season grade.",
    csvUrl: "/assets/TEScoreResults2022.csv",
  },
  te2021: {
    title: "2021 TE Score Rankings",
    description: "TE model results: all stats in percentiles except ATES (min 200 routes). The Analytical Score uses my custom formula, weighting the most important stats more heavily. It is meant to serve as an overall season grade.",
    csvUrl: "/assets/TEScoreResults2021.csv",
  },
  idl2024: {
    title: "2024 IDL Score Rankings",
    description: "IDL model results: all stats in percentiles except AIS (min 150 pass rush, run stop snaps). The Analytical Score uses my custom formula, weighting the most important stats more heavily. It is meant to serve as an overall season grade.",
    csvUrl: "/assets/DIScoreResults2024.csv",
  },
  idl2023: {
    title: "2023 IDL Score Rankings",
    description: "IDL model results: all stats in percentiles except AIS (min 150 pass rush, run stop snaps). The Analytical Score uses my custom formula, weighting the most important stats more heavily. It is meant to serve as an overall season grade.",
    csvUrl: "/assets/DIScoreResults2023.csv",
  },
  idl2022: {
    title: "2022 IDL Score Rankings",
    description: "IDL model results: all stats in percentiles except AIS (min 150 pass rush, run stop snaps). The Analytical Score uses my custom formula, weighting the most important stats more heavily. It is meant to serve as an overall season grade.",
    csvUrl: "/assets/DIScoreResults2022.csv",
  },
  idl2021: {
    title: "2021 IDL Score Rankings",
    description: "IDL model results: all stats in percentiles except AIS (min 150 pass rush, run stop snaps). The Analytical Score uses my custom formula, weighting the most important stats more heavily. It is meant to serve as an overall season grade.",
    csvUrl: "/assets/DIScoreResults2021.csv",
  },
  edge2024: {
    title: "2024 EDGE Score Rankings",
    description: "EDGE model results: all stats in percentiles except AES (min 100 pass rush, run stop snaps). The Analytical Score uses my custom formula, weighting the most important stats more heavily. It is meant to serve as an overall season grade.",
    csvUrl: "/assets/EDScoreResults2024.csv",
  },
  edge2023: {
    title: "2023 EDGE Score Rankings",
    description: "EDGE model results: all stats in percentiles except AES (min 100 pass rush, run stop snaps). The Analytical Score uses my custom formula, weighting the most important stats more heavily. It is meant to serve as an overall season grade.",
    csvUrl: "/assets/EDScoreResults2023.csv",
  },
  edge2022: {
    title: "2022 EDGE Score Rankings",
    description: "EDGE model results: all stats in percentiles except AES (min 100 pass rush, run stop snaps). The Analytical Score uses my custom formula, weighting the most important stats more heavily. It is meant to serve as an overall season grade.",
    csvUrl: "/assets/EDScoreResults2022.csv",
  },
  edge2021: {
    title: "2021 EDGE Score Rankings",
    description: "EDGE model results: all stats in percentiles except AES (min 100 pass rush, run stop snaps). The Analytical Score uses my custom formula, weighting the most important stats more heavily. It is meant to serve as an overall season grade.",
    csvUrl: "/assets/EDScoreResults2021.csv",
  },
  ilb2024: {
    title: "2024 ILB Score Rankings",
    description: "ILB model results: all stats in percentiles except AIS (min 100 coverage, run stop snaps). The Analytical Score uses my custom formula, weighting the most important stats more heavily. It is meant to serve as an overall season grade.",
    csvUrl: "/assets/ILBScoreResults2024.csv",
  },
  ilb2023: {
    title: "2023 ILB Score Rankings",
    description: "ILB model results: all stats in percentiles except AIS (min 100 coverage, run stop snaps). The Analytical Score uses my custom formula, weighting the most important stats more heavily. It is meant to serve as an overall season grade.",
    csvUrl: "/assets/ILBScoreResults2023.csv",
  },
  ilb2022: {
    title: "2022 ILB Score Rankings",
    description: "ILB model results: all stats in percentiles except AIS (min 100 coverage, run stop snaps). The Analytical Score uses my custom formula, weighting the most important stats more heavily. It is meant to serve as an overall season grade.",
    csvUrl: "/assets/ILBScoreResults2022.csv",
  },
  ilb2021: {
    title: "2021 ILB Score Rankings",
    description: "ILB model results: all stats in percentiles except AIS (min 100 coverage, run stop snaps). The Analytical Score uses my custom formula, weighting the most important stats more heavily. It is meant to serve as an overall season grade.",
    csvUrl: "/assets/ILBScoreResults2021.csv",
  },
 
  cb2024: {
    title: "2024 CB Score Rankings",
    description: "CB model results: all stats in percentiles except ACS (min 200 coverage snaps). The Analytical Score uses my custom formula, weighting the most important stats more heavily. It is meant to serve as an overall season grade.",
    csvUrl: "/assets/CBScoreResults2024.csv",
  },
  cb2023: {
    title: "2023 CB Score Rankings",
    description: "CB model results: all stats in percentiles except ACS (min 200 coverage snaps). The Analytical Score uses my custom formula, weighting the most important stats more heavily. It is meant to serve as an overall season grade.",
    csvUrl: "/assets/CBScoreResults2023.csv",
  },
  cb2022: {
    title: "2022 CB Score Rankings",
    description: "CB model results: all stats in percentiles except ACS (min 200 coverage snaps). The Analytical Score uses my custom formula, weighting the most important stats more heavily. It is meant to serve as an overall season grade.",
    csvUrl: "/assets/CBScoreResults2022.csv",
  },
  cb2021: {
    title: "2021 CB Score Rankings",
    description: "CB model results: all stats in percentiles except ACS (min 200 coverage snaps). The Analytical Score uses my custom formula, weighting the most important stats more heavily. It is meant to serve as an overall season grade.",
    csvUrl: "/assets/CBScoreResults2021.csv",
  },
  s2024: {
    title: "2024 S Score Rankings",
    description: "S model results: all stats in percentiles except ASS (min 250 snaps). The Analytical Score uses my custom formula, weighting the most important stats more heavily. It is meant to serve as an overall season grade.",
    csvUrl: "/assets/SScoreResults2024.csv",
  },
  s2023: {
    title: "2023 S Score Rankings",
    description: "S model results: all stats in percentiles except ASS (min 250 snaps). The Analytical Score uses my custom formula, weighting the most important stats more heavily. It is meant to serve as an overall season grade.",
    csvUrl: "/assets/SScoreResults2023.csv",
  },
  s2022: {
    title: "2022 S Score Rankings",
    description: "S model results: all stats in percentiles except ASS (min 250 snaps). The Analytical Score uses my custom formula, weighting the most important stats more heavily. It is meant to serve as an overall season grade.",
    csvUrl: "/assets/SScoreResults2022.csv",
  },
  s2021: {
    title: "2021 S Score Rankings",
    description: "S model results: all stats in percentiles except ASS (min 250 snaps). The Analytical Score uses my custom formula, weighting the most important stats more heavily. It is meant to serve as an overall season grade.",
    csvUrl: "/assets/SScoreResults2021.csv",
  },


  // 📚 Research PDFs
  bdb2025: {
    title: "Big Data Bowl 2025",
    pdfUrl: "/assets/BDB2025.pdf",
  },
  ohc: {
    title: "The Argument for Offensive Head Coaches",
    pdfUrl: "/assets/OHC.pdf",
  },
  draftroi: {
    title: "NFL Draft ROI Report",
    pdfUrl: "/assets/NFLDraftROI2013-2019.pdf",
  },
  "2025nfldraft": {
    title: "2025 NFL Draft: What I’d Do as GM for Every Team",
    pdfUrl: "/assets/2025NFLDraft.pdf",
  },
  // 🎥 Video
  offseasonTutorial: {
    title: "Offseason Dashboard Tutorial",
    videoUrl: "/assets/OffseasonDashboardTutorial.mp4",
  },
};

const getColorScale = (value, colMin, colMax, key) => {
  if (key === "Name" || key === "Rank") return undefined;
  const num = parseFloat(value);
  if (isNaN(num)) return "inherit";
  const percent = Math.max(0, Math.min(1, (num - colMin) / (colMax - colMin)));
  const red = Math.round(255 * (1 - percent));
  const green = Math.round(255 * percent);
  return `rgb(${red}, ${green}, 100)`;
};


export default function ProjectPage() {
  const { id } = useParams();
  const project = projects[id];
  const [csvData, setCsvData] = useState([]);
  const [pdfError, setPdfError] = useState(false);

  // ✅ MOVE THESE INSIDE THE FUNCTION COMPONENT
  const [sortColumn, setSortColumn] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  const sortedData = [...csvData].sort((a, b) => {
    if (!sortColumn) return 0;
    const aVal = parseFloat(a[sortColumn]) || a[sortColumn];
    const bVal = parseFloat(b[sortColumn]) || b[sortColumn];
  
    if (aVal < bVal) return sortOrder === "asc" ? -1 : 1;
    if (aVal > bVal) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });

  useEffect(() => {
    if (project?.csvUrl) {
      Papa.parse(project.csvUrl, {
        download: true,
        header: true,
        complete: (result) => setCsvData(result.data),
      });
    }
  }, [project]);

  if (!project) return <div className="p-6 text-lg">Project not found.</div>;

  if (project.pdfUrl) {
    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
        <p className="text-gray-700 mb-6">{project.description || ""}</p>
  
        <a
          href={project.pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition"
        >
          View Full PDF
        </a>
      </div>
    );
  }
  

// 🎥 Video view
if (project.videoUrl) {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
      <p className="text-gray-700 mb-6">{project.description}</p>

      <div className="w-full overflow-x-auto flex justify-center">
        <div
          style={{
            transform: "scale(0.85)",
            transformOrigin: "top center",
          }}
        >
          <video
            controls
            className="rounded-lg shadow-md"
            style={{ width: "1000px", maxWidth: "100%" }}
          >
            <source src={project.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}
// 📊 CSV view
if (project.csvUrl && csvData.length > 0) {
  const headers = Object.keys(csvData[0]);
  const columnStats = {};

  headers.forEach((header) => {
    if (header === "Name") return;
    const values = csvData
      .map((row) => parseFloat(row[header]))
      .filter((v) => !isNaN(v));
    columnStats[header] = {
      min: Math.min(...values),
      max: Math.max(...values),
    };
  });

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
      <p className="text-gray-700 mb-6">{project.description}</p>

      <div className="overflow-x-auto">
        <div style={{ maxHeight: "75vh", overflowY: "auto" }}>
          <table className="min-w-full border border-gray-300 text-sm ranking-table">
            <thead className="bg-gray-100">
              <tr>
                {headers.map((key) => (
                  <th
                    key={key}
                    onClick={() => {
                      if (sortColumn === key) {
                        setSortOrder(sortOrder === "asc" ? "desc" : "asc");
                      } else {
                        setSortColumn(key);
                        setSortOrder("desc");
                      }
                    }}
                    className="border px-4 py-2 text-left whitespace-nowrap font-mono cursor-pointer hover:bg-gray-200"
                  >
                    {key} {sortColumn === key ? (sortOrder === "asc" ? "↑" : "↓") : ""}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {sortedData.map((row, i) => (
                <tr key={i} className="odd:bg-white even:bg-gray-50">
                  {headers.map((key, j) => {
                    const value = row[key];
                    const bgColor = getColorScale(
                      value,
                      columnStats[key]?.min,
                      columnStats[key]?.max,
                      key
                    );

                    return (
                      <td
                        key={j}
                        className="border px-4 py-2 text-sm text-gray-800 whitespace-nowrap font-mono"
                        style={{ backgroundColor: bgColor }}
                      >
                        {key === "Name" ? (
                          <Link
                            to={`/playersearch?name=${encodeURIComponent(value)}`}
                            className="text-blue-600 underline hover:text-blue-800"
                          >
                            {value}
                          </Link>
                        ) : (
                          value
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
    </div>
  );
}
}