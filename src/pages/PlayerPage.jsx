import { useLocation } from "react-router-dom";

export default function PlayerPage() {
  const location = useLocation();
  const { results, searchTerm } = location.state || {};

  if (!results || results.length === 0) {
    return <div className="p-6 text-lg">No results found.</div>;
  }

  // Sort by year ascending
  const sortedResults = [...results].sort((a, b) => parseInt(a.year) - parseInt(b.year));

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">🔍 Results for "{searchTerm}"</h2>
      <ul className="space-y-4 text-sm text-gray-800">
        {sortedResults.map((p, i) => (
          <li key={i} className="bg-white p-4 rounded shadow">
            <div className="font-semibold">
              {p.name} — {p.position}, {p.year}
            </div>
            <div>Rank: {p.rank}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
