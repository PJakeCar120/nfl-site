import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const [hoveredDropdown, setHoveredDropdown] = useState(null);

  const isActive = (path) =>
    location.pathname.startsWith(path)
      ? "text-blue-600 underline font-bold"
      : "hover:text-blue-600 font-bold";

  return (
    <header className="w-full px-6 py-4 shadow-md bg-blue-50 sticky top-0 z-50">
      <div className="w-full">
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-x-6 gap-y-4">

          <Link to="/" className="text-2xl font-bold tracking-tight text-blue-900 whitespace-nowrap">
            🏈 Football Analytics Nerd
          </Link>

          {/* Wrap nav content in a scrollable shell only on mobile */}
          <div className="overflow-x-auto sm:overflow-visible">
            <nav className="flex flex-row sm:flex-row flex-nowrap whitespace-nowrap gap-3 sm:gap-4 text-blue-800 font-medium text-xs sm:text-sm no-scrollbar">
              <Link to="/"><button className={isActive("/")}>Home</button></Link>
              <Link to="/lineup"><button className={isActive("/lineup")}>Team Pages</button></Link>

              {/* Rankings & Awards Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setHoveredDropdown("rankings")}
                onMouseLeave={() => setHoveredDropdown(null)}
              >
                <button className={isActive("/rankings") || isActive("/awards")}>
                  Rankings & Awards ▾
                </button>
                {hoveredDropdown === "rankings" && (
                  <div className="absolute left-0 mt-px bg-white border rounded shadow-lg z-50 w-48 py-2">
                    <Link to="/rankings" className="block px-4 py-2 hover:bg-gray-100 text-blue-800 font-bold" onClick={() => setHoveredDropdown(null)}>Rankings</Link>
                    <Link to="/awards" className="block px-4 py-2 hover:bg-gray-100 text-blue-800 font-bold" onClick={() => setHoveredDropdown(null)}>Awards</Link>
                  </div>
                )}
              </div>

              {/* Player Comparison Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setHoveredDropdown("comparison")}
                onMouseLeave={() => setHoveredDropdown(null)}
              >
                <button className={isActive("/compare") || isActive("/whobetta")}>
                  Player Comparison Tools▾
                </button>
                {hoveredDropdown === "comparison" && (
                  <div className="absolute left-0 mt-px bg-white border rounded shadow-lg z-50 w-48 py-2">
                    <Link to="/compare" className="block px-4 py-2 hover:bg-gray-100 text-blue-800 font-bold" onClick={() => setHoveredDropdown(null)}>Similarity Scores</Link>
                    <Link to="/whobetta" className="block px-4 py-2 hover:bg-gray-100 text-blue-800 font-bold" onClick={() => setHoveredDropdown(null)}>Player Comparison</Link>
                  </div>
                )}
              </div>

              {/* Contracts Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setHoveredDropdown("contracts")}
                onMouseLeave={() => setHoveredDropdown(null)}
              >
                <button className={isActive("/contract-market") || isActive("/contracts") || isActive("/freeagents")}>
                  Contracts ▾
                </button>
                {hoveredDropdown === "contracts" && (
                  <div className="absolute left-0 mt-px bg-white border rounded shadow-lg z-50 w-56 py-2">
                    <Link to="/contract-market" className="block px-4 py-2 hover:bg-gray-100 text-blue-800 font-bold" onClick={() => setHoveredDropdown(null)}>Contract Market</Link>
                    <Link to="/contracts" className="block px-4 py-2 hover:bg-gray-100 text-blue-800 font-bold" onClick={() => setHoveredDropdown(null)}>Extension Projections</Link>
                    <Link to="/freeagents" className="block px-4 py-2 hover:bg-gray-100 text-blue-800 font-bold" onClick={() => setHoveredDropdown(null)}>Top Free Agents</Link>
                  </div>
                )}
              </div>

              {/* 2025 Draft Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setHoveredDropdown("draft")}
                onMouseLeave={() => setHoveredDropdown(null)}
              >
                <button className={isActive("/draft-page") || isActive("/draft-previews")}>
                  2025 Draft ▾
                </button>
                {hoveredDropdown === "draft" && (
                  <div className="absolute left-0 mt-px bg-white border rounded shadow-lg z-50 w-48 py-2">
                    <Link to="/draft-page" className="block px-4 py-2 hover:bg-gray-100 text-blue-800 font-bold" onClick={() => setHoveredDropdown(null)}>Draft Center</Link>
                    <Link to="/draft-previews" className="block px-4 py-2 hover:bg-gray-100 text-blue-800 font-bold" onClick={() => setHoveredDropdown(null)}>Team Draft Previews</Link>
                  </div>
                )}
              </div>

              {/* Analysis Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setHoveredDropdown("analysis")}
                onMouseLeave={() => setHoveredDropdown(null)}
              >
                <button className={isActive("/research") || isActive("/charts")}>
                  Analysis ▾
                </button>
                {hoveredDropdown === "analysis" && (
                  <div className="absolute left-0 mt-px bg-white border rounded shadow-lg z-50 w-44 py-2">
                    <Link to="/charts" className="block px-4 py-2 hover:bg-gray-100 text-blue-800 font-bold" onClick={() => setHoveredDropdown(null)}>Charts</Link>
                    <Link to="/research" className="block px-4 py-2 hover:bg-gray-100 text-blue-800 font-bold" onClick={() => setHoveredDropdown(null)}>Research</Link>
                  </div>
                )}
              </div>

              {/* Player Search */}
              <Link to="/search"><button className={isActive("/search")}>Player Search</button></Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
