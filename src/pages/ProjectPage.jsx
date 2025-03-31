import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Papa from 'papaparse';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const projects = {
  qb2024: {
    title: '2024 Analytical Quarterback Score Rankings',
    description: 'My Model’s Rankings and Advanced Analytics (all stats converted to percentiles, minimum 250 DBs)',
    csvUrl: '/assets/QBScoreResults2024.csv',
  },
  qb2023: {
    title: '2023 Analytical Quarterback Score Rankings',
    description: 'My Model’s Rankings and Advanced Analytics (all stats converted to percentiles, minimum 250 DBs)',
    csvUrl: '/assets/QBScoreResults2023.csv',
  },
  qb2022: {
    title: '2022 Analytical Quarterback Score Rankings',
    description: 'My Model’s Rankings and Advanced Analytics (all stats converted to percentiles, minimum 250 DBs)',
    csvUrl: '/assets/QBScoreResults2022.csv',
  },
  qb2021: {
    title: '2021 Analytical Quarterback Score Rankings',
    description: 'My Model’s Rankings and Advanced Analytics (all stats converted to percentiles, minimum 250 DBs)',
    csvUrl: '/assets/QBScoreResults2021.csv',
  },
  wr2024: {
    title: '2024 WR Advanced Wide Receiver Score Rankings',
    description: 'My Model’s Rankings and Advanced Analytics (all stats converted to percentiles, minimum 30 targets)',
    csvUrl: '/assets/WRScoreResults2024.csv',
  },
  wr2023: {
    title: '2023 WR Advanced Wide Receiver Score Rankings',
    description: 'My Model’s Rankings and Advanced Analytics (all stats converted to percentiles, minimum 30 targets)',
    csvUrl: '/assets/WRScoreResults2023.csv',
  },
  wr2022: {
    title: '2022 WR Advanced Wide Receiver Score Rankings',
    description: 'My Model’s Rankings and Advanced Analytics (all stats converted to percentiles, minimum 30 targets)',
    csvUrl: '/assets/WRScoreResults2022.csv',
  },
  wr2021: {
    title: '2021 WR Advanced Wide Receiver Score Rankings',
    description: 'My Model’s Rankings and Advanced Analytics (all stats converted to percentiles, minimum 30 targets)',
    csvUrl: '/assets/WRScoreResults2021.csv',
  },
  bdb2025: {
    title: 'Big Data Bowl 2025',
    description: 'Motion: A Defensive Perspective',
    pdfUrl: '/assets/BDB2025-14.pdf',
  },
  "2025coaches": {
    title: '2025 NFL Head Coaching Candidate Rankings',
    description: 'Personal Opinion',
    pdfUrl: '/assets/NFL Head Coaching Candidates 2025 2.pdf',
  },
  draftroi: {
    title: 'NFL Draft ROI Report',
    description: 'First Round Picks by Position (2013-2019)',
    pdfUrl: '/assets/NFL First Round Draft Pick ROI 2013-2019 Report.pdf',
  },
  offseasonTutorial: {
    title: 'Offseason Dashboard Tutorial',
    description: '2-minute dashboard walkthrough video',
    videoUrl: '/assets/OffseasonDashboardTutorial.mp4',
  },
};

const getColorScale = (value, colMin, colMax) => {
  const num = parseFloat(value);
  if (isNaN(num)) return 'inherit';
  const percent = Math.max(0, Math.min(1, (num - colMin) / (colMax - colMin)));
  const red = Math.round(255 * (1 - percent));
  const green = Math.round(255 * percent);
  return `rgb(${red}, ${green}, 100)`;
};

const ProjectPage = () => {
  const { id } = useParams();
  const project = projects[id];
  const [csvData, setCsvData] = useState([]);
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    if (project?.csvUrl) {
      Papa.parse(project.csvUrl, {
        download: true,
        header: true,
        complete: (result) => setCsvData(result.data),
      });
    }
  }, [project]);

  if (!project) return <div className="p-6">Project not found.</div>;

  // Video view
  if (project.videoUrl) {
    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
        <p className="text-gray-700 mb-6">{project.description}</p>
        <video
          controls
          className="w-full h-auto object-contain"
          style={{ maxHeight: '80vh' }}
        >
          <source src={project.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }

  // PDF view
  if (project.pdfUrl) {
    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
        <p className="text-gray-700 mb-6">{project.description}</p>
        <div className="w-full flex flex-col items-center gap-4">
          <Document
            file={project.pdfUrl}
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
            loading={<p>Loading PDF...</p>}
            error={<p className="text-red-600">Failed to load PDF.</p>}
          >
            {Array.from({ length: numPages }, (_, i) => (
              <Page key={i + 1} pageNumber={i + 1} scale={1.0} />
            ))}
          </Document>
        </div>
      </div>
    );
  }

  // CSV view
  return (
    <div className="p-6 overflow-x-auto">
      <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
      <p className="text-gray-700 mb-6">{project.description}</p>
      {csvData.length > 0 && (() => {
        const headers = Object.keys(csvData[0]);
        const columnStats = {};
        headers.forEach((header) => {
          if (header === 'Name') return;
          const values = csvData.map(row => parseFloat(row[header])).filter(v => !isNaN(v));
          columnStats[header] = {
            min: Math.min(...values),
            max: Math.max(...values),
          };
        });
        return (
          <table className="table-fixed w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                {headers.map((key) => (
                  <th
                    key={key}
                    className="border px-2 py-2 text-left w-[120px] overflow-hidden truncate font-mono"
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
                    const bgColor = key !== 'Name'
                      ? getColorScale(value, columnStats[key].min, columnStats[key].max)
                      : undefined;
                    return (
                      <td
                        key={j}
                        className="border px-2 py-2 text-sm text-gray-800 w-[120px] overflow-hidden truncate font-mono"
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
        );
      })()}
    </div>
  );
};

export default ProjectPage;
