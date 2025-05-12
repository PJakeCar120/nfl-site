import { Link } from "react-router-dom";

export default function RankingsPage() {
  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-12 box-border">
      <h1 className="text-4xl font-bold mb-10">🏆 Rankings</h1>
      <p className="text-gray-700 text-base mb-12 leading-relaxed max-w-3xl">
        Each player’s Analytical Score is calculated by converting key performance metrics into percentiles relative to their position group.
        More predictive or valuable stats are given higher weights, and a weighted average of these percentiles forms the final score.
        Higher scores reflect players who excelled in the areas that matter most for their role.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Quarterbacks */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">Quarterbacks</h2>
          <ul className="list-disc ml-6 text-blue-500 space-y-2">
            <li><Link to="/projects/qb2024">2024<br />QB<br />Rankings</Link></li>
            <li><Link to="/projects/qb2023">2023<br />QB<br />Rankings</Link></li>
            <li><Link to="/projects/qb2022">2022<br />QB<br />Rankings</Link></li>
            <li><Link to="/projects/qb2021">2021<br />QB<br />Rankings</Link></li>
          </ul>
        </div>

        {/* Running Backs */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">Running Backs</h2>
          <ul className="list-disc ml-6 text-blue-500 space-y-2">
            <li><Link to="/projects/rb2024">2024<br />RB<br />Rankings</Link></li>
            <li><Link to="/projects/rb2023">2023<br />RB<br />Rankings</Link></li>
            <li><Link to="/projects/rb2022">2022<br />RB<br />Rankings</Link></li>
            <li><Link to="/projects/rb2021">2021<br />RB<br />Rankings</Link></li>
          </ul>
        </div>

        {/* Wide Receivers */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">Wide Receivers</h2>
          <ul className="list-disc ml-6 text-blue-500 space-y-2">
            <li><Link to="/projects/wr2024">2024<br />WR<br />Rankings</Link></li>
            <li><Link to="/projects/wr2023">2023<br />WR<br />Rankings</Link></li>
            <li><Link to="/projects/wr2022">2022<br />WR<br />Rankings</Link></li>
            <li><Link to="/projects/wr2021">2021<br />WR<br />Rankings</Link></li>
          </ul>
        </div>

        {/* Tight Ends */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">Tight Ends</h2>
          <ul className="list-disc ml-6 text-blue-500 space-y-2">
            <li><Link to="/projects/te2024">2024<br />TE<br />Rankings</Link></li>
            <li><Link to="/projects/te2023">2023<br />TE<br />Rankings</Link></li>
            <li><Link to="/projects/te2022">2022<br />TE<br />Rankings</Link></li>
            <li><Link to="/projects/te2021">2021<br />TE<br />Rankings</Link></li>
          </ul>
        </div>

        {/* Interior Defensive Line */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">Interior Defensive Line</h2>
          <ul className="list-disc ml-6 text-blue-500 space-y-2">
            <li><Link to="/projects/idl2024">2024<br />IDL<br />Rankings</Link></li>
            <li><Link to="/projects/idl2023">2023<br />IDL<br />Rankings</Link></li>
            <li><Link to="/projects/idl2022">2022<br />IDL<br />Rankings</Link></li>
            <li><Link to="/projects/idl2021">2021<br />IDL<br />Rankings</Link></li>
          </ul>
        </div>

        {/* EDGEs */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">EDGEs</h2>
          <ul className="list-disc ml-6 text-blue-500 space-y-2">
            <li><Link to="/projects/edge2024">2024<br />EDGE<br />Rankings</Link></li>
            <li><Link to="/projects/edge2023">2023<br />EDGE<br />Rankings</Link></li>
            <li><Link to="/projects/edge2022">2022<br />EDGE<br />Rankings</Link></li>
            <li><Link to="/projects/edge2021">2021<br />EDGE<br />Rankings</Link></li>
          </ul>
        </div>

        {/* Inside Linebackers */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">Inside Linebackers</h2>
          <ul className="list-disc ml-6 text-blue-500 space-y-2">
            <li><Link to="/projects/ilb2024">2024<br />ILB<br />Rankings</Link></li>
            <li><Link to="/projects/ilb2023">2023<br />ILB<br />Rankings</Link></li>
            <li><Link to="/projects/ilb2022">2022<br />ILB<br />Rankings</Link></li>
            <li><Link to="/projects/ilb2021">2021<br />ILB<br />Rankings</Link></li>
          </ul>
        </div>

        {/* Cornerbacks */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">Cornerbacks</h2>
          <ul className="list-disc ml-6 text-blue-500 space-y-2">
            <li><Link to="/projects/cb2024">2024<br />CB<br />Rankings</Link></li>
            <li><Link to="/projects/cb2023">2023<br />CB<br />Rankings</Link></li>
            <li><Link to="/projects/cb2022">2022<br />CB<br />Rankings</Link></li>
            <li><Link to="/projects/cb2021">2021<br />CB<br />Rankings</Link></li>
          </ul>
        </div>

        {/* Safeties */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">Safeties</h2>
          <ul className="list-disc ml-6 text-blue-500 space-y-2">
            <li><Link to="/projects/s2024">2024<br />S<br />Rankings</Link></li>
            <li><Link to="/projects/s2023">2023<br />S<br />Rankings</Link></li>
            <li><Link to="/projects/s2022">2022<br />S<br />Rankings</Link></li>
            <li><Link to="/projects/s2021">2021<br />S<br />Rankings</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
