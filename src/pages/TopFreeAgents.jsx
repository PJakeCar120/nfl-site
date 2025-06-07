import { Link } from "react-router-dom";


const freeAgents = [
  { name: "J.K. Dobbins", position: "RB" },
  { name: "Gus Edwards", position: "RB" },
  { name: "Amari Cooper", position: "WR" },
  { name: "Keenan Allen", position: "WR" },
  { name: "Tyler Lockett", position: "WR" },
  { name: "Elijah Moore", position: "WR" },
  { name: "Gerald Everett", position: "TE" },
  { name: "Jordan Akins", position: "TE" },
  { name: "Folorunso Fatukasi", position: "IDL" },
  { name: "Johnathan Hankins ", position: "IDL" },
  { name: "Jadeveon Clowney", position: "EDGE" },
  { name: "Matthew Judon", position: "EDGE" },
  { name: "Za'Darius Smith", position: "EDGE" },
  { name: "Von Miller", position: "EDGE" },
  { name: "Dennis Gardeck", position: "EDGE" },
  { name: "Preston Smith", position: "EDGE" },
  { name: "Emmanuel Ogbah", position: "EDGE" },
  { name: "Dawuane Smoot", position: "EDGE" },
  { name: "Kyzir White", position: "ILB" },
  { name: "Eric Kendricks", position: "ILB" },
  { name: "De'Vondre Campbell", position: "ILB" },
  { name: "Asante Samuel Jr.", position: "CB" },
  { name: "Rasul Douglas", position: "CB" },
  { name: "Stephon Gilmore", position: "CB" },
  { name: "Shaquill Griffin", position: "CB" },
  { name: "Kendall Fuller", position: "CB" },
  { name: "Mike Hilton", position: "CB" },
  { name: "Jack Jones", position: "CB" },
  { name: "Justin Simmons", position: "S" },
  { name: "Julian Blackmon", position: "S" },
  { name: "Quandre Diggs", position: "S" },
  { name: "Jalen Mills", position: "S" },
  { name: "Marcus Williams", position: "S" },
];

// Position order for sorting
const positionOrder = {
  QB: 1,
  RB: 2,
  WR: 3,
  TE: 4,
  IDL: 5,
  EDGE: 6,
  ILB: 7,
  CB: 8,
  S: 9,
};

export default function TopFreeAgents() {
  const sortedFreeAgents = [...freeAgents].sort(
    (a, b) => positionOrder[a.position] - positionOrder[b.position]
  );

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Top Free Agents</h1>
      <ul className="list-disc list-inside space-y-2 text-blue-600">
        {sortedFreeAgents.map(({ name, position }) => (
          <li key={name}>
            <Link to={`/playersearch?name=${encodeURIComponent(name)}`} className="hover:underline">
              {position} — {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
