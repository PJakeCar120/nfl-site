import { Link } from "react-router-dom";

export default function RankingsPage() {
  return (
    <div className="px-6 py-8">
      <h1 className="text-3xl font-bold mb-6">🏆 Rankings</h1>

      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">Quarterbacks</h2>
          <ul className="list-disc ml-6 text-blue-500 space-y-1">
            <li><Link to="/projects/qb2024">2024 QB Rankings</Link></li>
            <li><Link to="/projects/qb2023">2023 QB Rankings</Link></li>
            <li><Link to="/projects/qb2022">2022 QB Rankings</Link></li>
            <li><Link to="/projects/qb2021">2021 QB Rankings</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Wide Receivers</h2>
          <ul className="list-disc ml-6 text-blue-500 space-y-1">
            <li><Link to="/projects/wr2024">2024 WR Rankings</Link></li>
            <li><Link to="/projects/wr2023">2023 WR Rankings</Link></li>
            <li><Link to="/projects/wr2022">2022 WR Rankings</Link></li>
            <li><Link to="/projects/wr2021">2021 WR Rankings</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Cornerbacks</h2>
          <ul className="list-disc ml-6 text-blue-500 space-y-1">
            <li><Link to="/projects/cb2024">2024 CB Rankings</Link></li>
            <li><Link to="/projects/cb2023">2023 CB Rankings</Link></li>
            <li><Link to="/projects/cb2022">2022 CB Rankings</Link></li>
            <li><Link to="/projects/cb2021">2021 CB Rankings</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
