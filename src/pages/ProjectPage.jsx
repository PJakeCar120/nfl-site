import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Papa from "papaparse";

const projects = {
  // 🔢 QB Rankings
  qb2024: {
    title: "2024 QB Score Rankings",
    description: "QB model results: all stats in percentiles except AQS (min 250 dropbacks).",
    csvUrl: "/assets/QBScoreResults2024.csv",
  },
  qb2023: {
    title: "2023 QB Score Rankings",
    description: "QB model results: all stats in percentiles except AQS (min 250 dropbacks).",
    csvUrl: "/assets/QBScoreResults2023.csv",
  },
  qb2022: {
    title: "2022 QB Score Rankings",
    description: "QB model results: all stats in percentiles except AQS (min 250 dropbacks).",
    csvUrl: "/assets/QBScoreResults2022.csv",
  },
  qb2021: {
    title: "2021 QB Score Rankings",
    description: "QB model results: all stats in percentiles except AQS (min 250 dropbacks).",
    csvUrl: "/assets/QBScoreResults2021.csv",
  },
  rb2024: {
    title: "2024 RB Score Rankings",
    description: "RB model results: all stats in percentiles except ARBS (min 50 rushes).",
    csvUrl: "/assets/RBScoreResults2024.csv",
  },
  rb2023: {
    title: "2023 RB Score Rankings",
    description: "RB model results: all stats in percentiles except ARBS (min 50 rushes).",
    csvUrl: "/assets/RBScoreResults2023.csv",
  },
  rb2022: {
    title: "2022 RB Score Rankings",
    description: "RB model results: all stats in percentiles except ARBS (min 50 rushes).",
    csvUrl: "/assets/RBScoreResults2022.csv",
  },
  rb2021: {
    title: "2021 RB Score Rankings",
    description: "RB model results: all stats in percentiles except ARBS (min 50 rushes).",
    csvUrl: "/assets/RBScoreResults2021.csv",
  },

  // 🧤 WR Rankings
  wr2024: {
    title: "2024 WR Score Rankings",
    description: "WR model results: all stats in percentiles except AWRS (min 30 targets).",
    csvUrl: "/assets/WRScoreResults2024.csv",
  },
  wr2023: {
    title: "2023 WR Score Rankings",
    description: "WR model results: all stats in percentiles except AWRS (min 30 targets).",
    csvUrl: "/assets/WRScoreResults2023.csv",
  },
  wr2022: {
    title: "2022 WR Score Rankings",
    description: "WR model results: all stats in percentiles except AWRS (min 30 targets).",
    csvUrl: "/assets/WRScoreResults2022.csv",
  },
  wr2021: {
    title: "2021 WR Score Rankings",
    description: "WR model results: all stats in percentiles except AWRS (min 30 targets).",
    csvUrl: "/assets/WRScoreResults2021.csv",
  },
  te2024: {
    title: "2024 TE Score Rankings",
    description: "TE model results: all stats in percentiles except ATES (min 200 routes).",
    csvUrl: "/assets/TEScoreResults2024.csv",
  },
  te2023: {
    title: "2023 TE Score Rankings",
    description: "TE model results: all stats in percentiles except ATES (min 200 routes).",
    csvUrl: "/assets/TEScoreResults2023.csv",
  },
  te2022: {
    title: "2022 TE Score Rankings",
    description: "TE model results: all stats in percentiles except ATES (min 200 routes).",
    csvUrl: "/assets/TEScoreResults2022.csv",
  },
  te2021: {
    title: "2021 TE Score Rankings",
    description: "TE model results: all stats in percentiles except ATES (min 200 routes).",
    csvUrl: "/assets/TEScoreResults2021.csv",
  },
  idl2024: {
    title: "2024 IDL Score Rankings",
    description: "IDL model results: all stats in percentiles except AIS (min 150 pass rush, run stop snaps).",
    csvUrl: "/assets/DIScoreResults2024.csv",
  },
  idl2023: {
    title: "2023 IDL Score Rankings",
    description: "IDL model results: all stats in percentiles except AIS (min 150 pass rush, run stop snaps).",
    csvUrl: "/assets/DIScoreResults2023.csv",
  },
  idl2022: {
    title: "2022 IDL Score Rankings",
    description: "IDL model results: all stats in percentiles except AIS (min 150 pass rush, run stop snaps).",
    csvUrl: "/assets/DIScoreResults2022.csv",
  },
  idl2021: {
    title: "2021 IDL Score Rankings",
    description: "IDL model results: all stats in percentiles except AIS (min 150 pass rush, run stop snaps).",
    csvUrl: "/assets/DIScoreResults2021.csv",
  },
  edge2024: {
    title: "2024 EDGE Score Rankings",
    description: "EDGE model results: all stats in percentiles except AES (min 100 pass rush, run stop snaps).",
    csvUrl: "/assets/EDScoreResults2024.csv",
  },
  edge2023: {
    title: "2023 EDGE Score Rankings",
    description: "EDGE model results: all stats in percentiles except AES (min 100 pass rush, run stop snaps).",
    csvUrl: "/assets/EDScoreResults2023.csv",
  },
  edge2022: {
    title: "2022 EDGE Score Rankings",
    description: "EDGE model results: all stats in percentiles except AES (min 100 pass rush, run stop snaps).",
    csvUrl: "/assets/EDScoreResults2022.csv",
  },
  edge2021: {
    title: "2021 EDGE Score Rankings",
    description: "EDGE model results: all stats in percentiles except AES (min 100 pass rush, run stop snaps).",
    csvUrl: "/assets/EDScoreResults2021.csv",
  },
 
  cb2024: {
    title: "2024 CB Score Rankings",
    description: "CB model results: all stats in percentiles except ACS (min 200 coverage snaps).",
    csvUrl: "/assets/CBScoreResults2024.csv",
  },
  cb2023: {
    title: "2023 CB Score Rankings",
    description: "CB model results: all stats in percentiles except ACS (min 200 coverage snaps).",
    csvUrl: "/assets/CBScoreResults2023.csv",
  },
  cb2022: {
    title: "2022 CB Score Rankings",
    description: "CB model results: all stats in percentiles except ACS (min 200 coverage snaps).",
    csvUrl: "/assets/CBScoreResults2022.csv",
  },
  cb2021: {
    title: "2021 CB Score Rankings",
    description: "CB model results: all stats in percentiles except ACS (min 200 coverage snaps).",
    csvUrl: "/assets/CBScoreResults2021.csv",
  },
  s2024: {
    title: "2024 S Score Rankings",
    description: "S model results: all stats in percentiles except ASS (min 250 snaps).",
    csvUrl: "/assets/SScoreResults2024.csv",
  },
  s2023: {
    title: "2023 S Score Rankings",
    description: "S model results: all stats in percentiles except ASS (min 250 snaps).",
    csvUrl: "/assets/SScoreResults2023.csv",
  },
  s2022: {
    title: "2022 S Score Rankings",
    description: "S model results: all stats in percentiles except ASS (min 250 snaps).",
    csvUrl: "/assets/SScoreResults2022.csv",
  },
  s2021: {
    title: "2021 S Score Rankings",
    description: "S model results: all stats in percentiles except ASS (min 250 snaps).",
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
  "2025coaches": {
    title: "2025 NFL Head Coaching Candidate Rankings",
    pdfUrl: "/assets/NFLHeadCoachCandidates2025.pdf",
  },
  draftroi: {
    title: "NFL Draft ROI Report",
    pdfUrl: "/assets/NFLDraftROI2013-2019.pdf",
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


// 📄 PDF view
if (project.pdfUrl) {
  const isMobile = window.innerWidth <= 768;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
      <p className="text-gray-700 mb-6">{project.description}</p>

      {!pdfError ? (
        <div
          className="w-full border rounded overflow-auto"
          style={{
            height: "90vh",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {isMobile ? (
            <embed
              src={project.pdfUrl}
              type="application/pdf"
              width="100%"
              height="100%"
              onError={() => setPdfError(true)}
              style={{ display: "block" }}
            />
          ) : (
            <iframe
              src={project.pdfUrl}
              title="PDF Viewer"
              width="100%"
              height="100%"
              onError={() => setPdfError(true)}
              className="rounded"
              style={{
                border: "none",
                display: "block",
              }}
            />
          )}
        </div>
      ) : (
        <div className="mt-6 p-4 border border-red-300 bg-red-50 rounded text-red-700">
          Failed to load PDF.
          <a
            href={project.pdfUrl}
            download
            className="ml-2 underline text-blue-600"
          >
            Click here to download
          </a>
        </div>
      )}

      <a
        href={project.pdfUrl}
        download
        className="mt-4 inline-block text-blue-600 underline"
      >
        📥 Download PDF
      </a>
    </div>
  );
}




  // 📊 CSV view
  if (project.csvUrl && csvData.length > 0) {
    const headers = Object.keys(csvData[0]);
    const columnStats = {};
    headers.forEach((header) => {
      if (header === "Name") return;
      const values = csvData.map((row) => parseFloat(row[header])).filter((v) => !isNaN(v));
      columnStats[header] = {
        min: Math.min(...values),
        max: Math.max(...values),
      };
    });
    return (
      <div className="p-6 overflow-x-auto">
        <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
        <p className="text-gray-700 mb-6">{project.description}</p>
        <table className="min-w-full border border-gray-300 text-sm">
          <thead className="bg-gray-100">
            <tr>
              {headers.map((key) => (
                <th
                  key={key}
                  className="border px-4 py-2 text-left whitespace-nowrap font-mono"
                >
                  {key}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {csvData.map((row, i) => (
              <tr key={i} className="odd:bg-white even:bg-gray-50">
                {headers.map((key, j) => {
                  const value = row[key];
                  const bgColor = getColorScale(value, columnStats[key]?.min, columnStats[key]?.max, key);
                    key !== "Name"
                      ? getColorScale(value, columnStats[key].min, columnStats[key].max)
                      : undefined;
                  return (
                    <td
                      key={j}
                      className="border px-4 py-2 text-sm text-gray-800 whitespace-nowrap font-mono"
                      style={{ backgroundColor: bgColor }}
                    >
                      {value}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div className="p-6 text-lg text-gray-600">
      No viewable content available for this project.
    </div>
  );
}
