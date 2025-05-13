import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const [hoveredDropdown, setHoveredDropdown] = useState(null);

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

          {/* Player Comparison Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setHoveredDropdown("comparison")}
            onMouseLeave={() => setHoveredDropdown(null)}
          >
            <button
              className={`px-3 py-2 border rounded hover:bg-blue-100 transition-all ${
                isActive("/compare") || isActive("/whobetta")
              }`}
            >
              Player Comparison ▾
            </button>
            {hoveredDropdown === "comparison" && (
              <div className="absolute left-0 mt-px bg-white border rounded shadow-lg z-50 w-48 py-2">
                <Link to="/compare" className="block px-4 py-2 hover:bg-gray-100 text-blue-800" onClick={() => setHoveredDropdown(null)}>
                  Similarity Tool
                </Link>
                <Link to="/whobetta" className="block px-4 py-2 hover:bg-gray-100 text-blue-800" onClick={() => setHoveredDropdown(null)}>
                  Head2Head
                </Link>
              </div>
            )}
          </div>

          {/* Contracts Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setHoveredDropdown("contracts")}
            onMouseLeave={() => setHoveredDropdown(null)}
          >
            <button
              className={`px-3 py-2 border rounded hover:bg-blue-100 transition-all ${
                isActive("/contract-market") || isActive("/contracts")
              }`}
            >
              Contracts ▾
            </button>
            {hoveredDropdown === "contracts" && (
              <div className="absolute left-0 mt-px bg-white border rounded shadow-lg z-50 w-48 py-2">
                <Link to="/contract-market" className="block px-4 py-2 hover:bg-gray-100 text-blue-800" onClick={() => setHoveredDropdown(null)}>
                  Contract Market
                </Link>
                <Link to="/contracts" className="block px-4 py-2 hover:bg-gray-100 text-blue-800" onClick={() => setHoveredDropdown(null)}>
                  Extension Projections
                </Link>
              </div>
            )}
          </div>

          {/* 2024 Draft Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setHoveredDropdown("draft")}
            onMouseLeave={() => setHoveredDropdown(null)}
          >
            <button
              className={`px-3 py-2 border rounded hover:bg-blue-100 transition-all ${
                isActive("/draft-page") || isActive("/draft-previews")
              }`}
            >
              2024 Draft ▾
            </button>
            {hoveredDropdown === "draft" && (
              <div className="absolute left-0 mt-px bg-white border rounded shadow-lg z-50 w-48 py-2">
                <Link to="/draft-page" className="block px-4 py-2 hover:bg-gray-100 text-blue-800" onClick={() => setHoveredDropdown(null)}>
                  Draft Center
                </Link>
                <Link to="/draft-previews" className="block px-4 py-2 hover:bg-gray-100 text-blue-800" onClick={() => setHoveredDropdown(null)}>
                  Team Draft Previews
                </Link>
              </div>
            )}
          </div>

          <Link to="/awards"><button className={isActive("/awards")}>Awards</button></Link>
          <Link to="/research"><button className={isActive("/research")}>Research</button></Link>
          <Link to="/charts"><button className={isActive("/charts")}>Charts</button></Link>
          <Link to="/search"><button className={isActive("/search")}>Player Search</button></Link>
        </nav>
      </div>
    </header>
  );
}
