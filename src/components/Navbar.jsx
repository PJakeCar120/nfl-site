import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const [comparisonOpen, setComparisonOpen] = useState(false);

  const isActive = (path) =>
    location.pathname.startsWith(path)
      ? "text-blue-600 underline"
      : "hover:text-blue-600";

  return (
    <header className="w-full px-6 py-4 shadow-md bg-blue-50 sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="text-2xl font-bold tracking-tight text-blue-900">
          🏈 Football Analytics Nerd
        </Link>

        <nav className="relative text-blue-800 font-medium text-sm flex flex-wrap items-center space-x-4">
          <Link to="/"><button className={isActive("/")}>Home</button></Link>
          <Link to="/rankings"><button className={isActive("/rankings")}>Rankings</button></Link>
          <Link to="/lineup"><button className={isActive("/lineup")}>Team Pages</button></Link>
          <Link to="/freeagents"><button className={isActive("/freeagents")}>Top Free Agents</button></Link>

          {/* Grouped Player Comparison Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setComparisonOpen(true)}
            onMouseLeave={() => setComparisonOpen(false)}
          >
            <button className={`relative z-10 ${isActive("/compare") || isActive("/whobetta")}`}>
              Player Comparison
            </button>

            {comparisonOpen && (
              <div className="absolute left-0 mt-2 bg-white border rounded shadow-md z-50 w-56">
                <Link
                  to="/compare"
                  className="block px-4 py-2 hover:bg-gray-100 text-sm text-blue-800"
                  onClick={() => setComparisonOpen(false)}
                >
                  Similarity Tool
                </Link>
                <Link
                  to="/whobetta"
                  className="block px-4 py-2 hover:bg-gray-100 text-sm text-blue-800"
                  onClick={() => setComparisonOpen(false)}
                >
                  Head2Head
                </Link>
              </div>
            )}
          </div>

          <Link to="/draft-page"><button className={isActive("/draft-page")}>Draft Center</button></Link>
          <Link to="/contract-market"><button className={isActive("/contract-market")}>Contract Market</button></Link>
          <Link to="/contracts"><button className={isActive("/contracts")}>Extension Projections</button></Link>
          <Link to="/draft-previews"><button className={isActive("/draft-previews")}>Team Draft Previews</button></Link>
          <Link to="/awards"><button className={isActive("/awards")}>Awards</button></Link>
          <Link to="/research"><button className={isActive("/research")}>Research</button></Link>
          <Link to="/charts"><button className={isActive("/charts")}>Charts</button></Link>
          <Link to="/search"><button className={isActive("/search")}>Player Search</button></Link>
        </nav>
      </div>
    </header>
  );
}
