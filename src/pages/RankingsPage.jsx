import { Link } from "react-router-dom";

export default function RankingsPage() {
  const rankings = [
    { pos: "QB", label: "Quarterbacks" },
    { pos: "RB", label: "Running Backs" },
    { pos: "WR", label: "Wide Receivers" },
    { pos: "TE", label: "Tight Ends" },
    { pos: "IDL", label: "Interior Defensive Line" },
    { pos: "EDGE", label: "EDGEs" },
    { pos: "ILB", label: "Inside Linebackers" },
    { pos: "CB", label: "Cornerbacks" },
    { pos: "S", label: "Safeties" },
  ];

  const years = ["2024", "2023", "2022", "2021"];

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-12 box-border">
      <h1 className="text-4xl font-bold mb-10">🏆 Rankings</h1>
      <p className="text-gray-700 text-base mb-12 leading-relaxed max-w-3xl">
        Each player’s Analytical Score is calculated by converting key performance metrics into percentiles relative to their position group.
        More predictive or valuable stats are given higher weights, and a weighted average of these percentiles forms the final score.
        Higher scores reflect players who excelled in the areas that matter most for their role.
      </p>

      <div className="overflow-x-auto w-full">
        <table className="table-auto w-full border border-gray-300 text-sm">
          <thead>
            <tr>
              <th className="p-2 px-8 bg-gray-100 border border-gray-300 text-left">Position</th>
              {years.map((year) => (
                <th key={year} className="p-2 px-8 bg-gray-100 border border-gray-300 text-center">
                  {year}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rankings.map(({ pos, label }) => (
              <tr key={pos}>
                <td className="p-2 px-8 border border-gray-300 font-medium">{label}</td>
                {years.map((year) => (
                  <td key={year} className="p-2 px-8 border border-gray-300 text-center">
                    <Link
                      to={`/projects/${pos.toLowerCase()}${year}`}
                      className="text-blue-500 hover:underline"
                    >
                      {year} Rankings
                    </Link>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
