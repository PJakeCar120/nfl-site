import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Papa from "papaparse";

const projects = {
  // 🔢 QB Rankings
  qb2024: {
    title: "2024 QB Score Rankings",
    description: "QB model results: all stats in percentiles (min 250 dropbacks).",
    csvUrl: "/assets/QBScoreResults2024.csv",
  },
  qb2023: {
    title: "2023 QB Score Rankings",
    description: "QB model results: all stats in percentiles (min 250 dropbacks).",
    csvUrl: "/assets/QBScoreResults2023.csv",
  },
  qb2022: {
    title: "2022 QB Score Rankings",
    description: "QB model results: all stats in percentiles (min 250 dropbacks).",
    csvUrl: "/assets/QBScoreResults2022.csv",
  },
  qb2021: {
    title: "2021 QB Score Rankings",
    description: "QB model results: all stats in percentiles (min 250 dropbacks).",
    csvUrl: "/assets/QBScoreResults2021.csv",
  },

  // 🧤 WR Rankings
  wr2024: {
    title: "2024 WR Score Rankings",
    description: "WR model results: all stats in percentiles (min 30 targets).",
    csvUrl: "/assets/WRScoreResults2024.csv",
  },
  wr2023: {
    title: "2023 WR Score Rankings",
    description: "WR model results: all stats in percentiles (min 30 targets).",
    csvUrl: "/assets/WRScoreResults2023.csv",
  },
  wr2022: {
    title: "2022 WR Score Rankings",
    description: "WR model results: all stats in percentiles (min 30 targets).",
    csvUrl: "/assets/WRScoreResults2022.csv",
  },
  wr2021: {
    title: "2021 WR Score Rankings",
    description: "WR model results: all stats in percentiles (min 30 targets).",
    csvUrl: "/assets/WRScoreResults2021.csv",
  },

  // 📚 Research PDFs
  bdb2025: {
    title: "Big Data Bowl 2025",
    description: "Motion: A Defensive Perspective",
    pdfUrl: "/assets/BDB2025.pdf",
  },
  ohc: {
    title: "The Argument for Offensive Head Coaches",
    description: "Exploring why offensive HCs dominate modern football.",
    pdfUrl: "/assets/OHC.pdf",
  },
  "2025coaches": {
    title: "2025 NFL Head Coaching Candidate Rankings",
    description: "Personal opinion and early tiers.",
    pdfUrl: "/assets/NFLHeadCoachCandidates2025.pdf",
  },
  draftroi: {
    title: "NFL Draft ROI Report",
    description: "Return on Investment by Position (2013–2019)",
    pdfUrl: "/assets/NFLDraftROI2013-2019.pdf",
  },

  // 🎥 Video
  offseasonTutorial: {
    title: "Offseason Dashboard Tutorial",
    description: "2-minute walkthrough of my draft/free agency dashboard.",
    videoUrl: "/assets/OffseasonDashboardTutorial.mp4",
  },
};

const getColorScale = (value, colMin, colMax) => {
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
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
      <p className="text-gray-700 mb-6">{project.description}</p>

      {!pdfError ? (
        <div
          className="w-full border rounded overflow-auto"
          style={{
            height: "90vh",
            WebkitOverflowScrolling: "touch", // for iOS smooth scroll
          }}
        >
          <div
            style={{
              transform: "scale(0.75)", // zoomed out slightly more
              transformOrigin: "top center",
              width: "100%",
              height: "100%",
            }}
          >
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
          </div>
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
        <table className="table-fixed w-full border border-gray-300 text-sm">
          <thead className="bg-gray-100">
            <tr>
              {headers.map((key) => (
                <th
                  key={key}
                  className="border px-2 py-2 text-left w-[120px] truncate font-mono"
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
                  const bgColor =
                    key !== "Name"
                      ? getColorScale(value, columnStats[key].min, columnStats[key].max)
                      : undefined;
                  return (
                    <td
                      key={j}
                      className="border px-2 py-2 text-sm text-gray-800 w-[120px] truncate font-mono"
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
