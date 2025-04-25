import { Link } from "react-router-dom";

export default function RankingsPage() {
  return (
    <div className="px-6 py-8">
      <h1 className="text-3xl font-bold mb-6">🏆 Rankings</h1>
      <p className="text-gray-700 text-sm mb-6">
        Each player’s Analytical Score is calculated by converting key performance metrics into percentiles relative to their position group. 
        More predictive or valuable stats are given higher weights, and a weighted average of these percentiles forms the final score. 
        Higher scores reflect players who excelled in the areas that matter most for their role.
      </p>

      <div className="space-y-6">
        {/* Quarterbacks */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Quarterbacks</h2>
          <ul className="list-disc ml-6 text-blue-500 space-y-1">
            <li><Link to="/projects/qb2024">2024 QB Rankings</Link></li>
            <li><Link to="/projects/qb2023">2023 QB Rankings</Link></li>
            <li><Link to="/projects/qb2022">2022 QB Rankings</Link></li>
            <li><Link to="/projects/qb2021">2021 QB Rankings</Link></li>
          </ul>
        </div>

        {/* Running Backs */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Running Backs</h2>
          <ul className="list-disc ml-6 text-blue-500 space-y-1">
            <li><Link to="/projects/rb2024">2024 RB Rankings</Link></li>
            <li><Link to="/projects/rb2023">2023 RB Rankings</Link></li>
            <li><Link to="/projects/rb2022">2022 RB Rankings</Link></li>
            <li><Link to="/projects/rb2021">2021 RB Rankings</Link></li>
          </ul>
        </div>

        {/* Wide Receivers */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Wide Receivers</h2>
          <ul className="list-disc ml-6 text-blue-500 space-y-1">
            <li><Link to="/projects/wr2024">2024 WR Rankings</Link></li>
            <li><Link to="/projects/wr2023">2023 WR Rankings</Link></li>
            <li><Link to="/projects/wr2022">2022 WR Rankings</Link></li>
            <li><Link to="/projects/wr2021">2021 WR Rankings</Link></li>
          </ul>
        </div>

        {/* Tight Ends */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Tight Ends</h2>
          <ul className="list-disc ml-6 text-blue-500 space-y-1">
            <li><Link to="/projects/te2024">2024 TE Rankings</Link></li>
            <li><Link to="/projects/te2023">2023 TE Rankings</Link></li>
            <li><Link to="/projects/te2022">2022 TE Rankings</Link></li>
            <li><Link to="/projects/te2021">2021 TE Rankings</Link></li>
          </ul>
        </div>

        {/* Interior Defensive Line */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Interior Defensive Line</h2>
          <ul className="list-disc ml-6 text-blue-500 space-y-1">
            <li><Link to="/projects/idl2024">2024 IDL Rankings</Link></li>
            <li><Link to="/projects/idl2023">2023 IDL Rankings</Link></li>
            <li><Link to="/projects/idl2022">2022 IDL Rankings</Link></li>
            <li><Link to="/projects/idl2021">2021 IDL Rankings</Link></li>
          </ul>
        </div>

        {/* EDGEs */}
        <div>
          <h2 className="text-xl font-semibold mb-2">EDGEs</h2>
          <ul className="list-disc ml-6 text-blue-500 space-y-1">
            <li><Link to="/projects/edge2024">2024 EDGE Rankings</Link></li>
            <li><Link to="/projects/edge2023">2023 EDGE Rankings</Link></li>
            <li><Link to="/projects/edge2022">2022 EDGE Rankings</Link></li>
            <li><Link to="/projects/edge2021">2021 EDGE Rankings</Link></li>
          </ul>
        </div>

        {/* Inside Linebackers */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Inside Linebackers</h2>
          <ul className="list-disc ml-6 text-blue-500 space-y-1">
            <li><Link to="/projects/ilb2024">2024 ILB Rankings</Link></li>
            <li><Link to="/projects/ilb2023">2023 ILB Rankings</Link></li>
            <li><Link to="/projects/ilb2022">2022 ILB Rankings</Link></li>
            <li><Link to="/projects/ilb2021">2021 ILB Rankings</Link></li>
          </ul>
        </div>

        {/* Cornerbacks */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Cornerbacks</h2>
          <ul className="list-disc ml-6 text-blue-500 space-y-1">
            <li><Link to="/projects/cb2024">2024 CB Rankings</Link></li>
            <li><Link to="/projects/cb2023">2023 CB Rankings</Link></li>
            <li><Link to="/projects/cb2022">2022 CB Rankings</Link></li>
            <li><Link to="/projects/cb2021">2021 CB Rankings</Link></li>
          </ul>
        </div>

        {/* Safeties */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Safeties</h2>
          <ul className="list-disc ml-6 text-blue-500 space-y-1">
            <li><Link to="/projects/s2024">2024 S Rankings</Link></li>
            <li><Link to="/projects/s2023">2023 S Rankings</Link></li>
            <li><Link to="/projects/s2022">2022 S Rankings</Link></li>
            <li><Link to="/projects/s2021">2021 S Rankings</Link></li>
          </ul>
        </div>

        {/* F.A.N. Awards Section */}
        <div>
          <h2 className="text-xl font-semibold mb-2">F.A.N. Awards</h2>
          <ul className="list-disc ml-6 text-blue-500 space-y-1">
            <li><Link to="/awards">View F.A.N. Awards</Link></li>
          </ul>
        </div>

      </div>
    </div>
  );
}
