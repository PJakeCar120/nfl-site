import { Link } from "react-router-dom";

const Research = [
  { id: "offseasonTutorial", title: "Offseason Dashboard Tutorial" },
  { id: "draftroi", title: "What NFL Positions Have the Highest Return on 1st Round Picks (2013–2019)?" },
  { id: "bdb2025", title: "Big Data Bowl 2025" },
  { id: "ohc", title: "The Argument for Offensive Head Coaches" },
];

export default function ResearchPage() {
  return (
    <div className="px-6 py-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">📚  Research </h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
        {Research.map(({ id, title }) => (
          <Link
            key={id}
            to={`/projects/${id}`}
            className="block bg-white p-5 min-h-[100px] border border-gray-200 rounded-lg shadow hover:shadow-lg transition"
          >
            <h2 className="text-lg font-semibold text-blue-600">{title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
