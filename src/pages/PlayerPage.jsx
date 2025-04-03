import { useLocation } from "react-router-dom";

export default function PlayerPage() {
  const location = useLocation();
  const { results, searchTerm } = location.state || {};

  if (!results || results.length === 0) {
    return <div className="p-6 text-lg">No results found.</div>;
  }

  const sortedResults = [...results].sort((a, b) => parseInt(b.year) - parseInt(a.year));

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">🔍 Results for "{searchTerm}"</h2>

      {sortedResults.map((player, index) => {
        const { name, rank, year, position, ...stats } = player;

        return (
          <div key={index} className="mb-10">
            <h3 className="text-xl font-semibold mb-2">
              {name} — {position}, {year}
            </h3>

            <table className="table-auto w-full text-sm text-left border border-gray-300">
              <thead>
                <tr>
                  <th className="p-2 bg-gray-100 border border-gray-300">Rank</th>
                  <th className="p-2 bg-gray-100 border border-gray-300">Name</th>
                  {Object.keys(stats).map((key) => (
                    <th key={key} className="p-2 bg-gray-100 border border-gray-300">
                      {key}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border border-gray-300">{rank}</td>
                  <td className="p-2 border border-gray-300">{name}</td>
                  {Object.entries(stats).map(([key, val]) => {
                    const num = parseFloat(val);
                    const isUncolored =
                      key.toLowerCase().includes("analytical") || key === "Rank" || key === "Name";

                    const style = {
                      backgroundColor: "white",
                      textAlign: key.toLowerCase().includes("analytical") ? "center" : "left",
                    };

                    if (!isUncolored && !isNaN(num)) {
                      const pct = Math.max(0, Math.min(1, num / 100));
                      const red = Math.round(255 * (1 - pct));
                      const green = Math.round(255 * pct);
                      style.backgroundColor = `rgb(${red}, ${green}, 100)`;
                    }

                    return (
                      <td key={key} className="p-2 border border-gray-300" style={style}>
                        {val}
                      </td>
                    );
                  })}
                </tr>
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
}
