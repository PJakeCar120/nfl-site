import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const [hoveredDropdown, setHoveredDropdown] = useState(null);

  const isMobile = () => window.innerWidth < 640;

  const isActive = (path) =>
    location.pathname.startsWith(path)
      ? "text-blue-600 underline font-bold"
      : "hover:text-blue-600 font-bold";

  const handleDropdown = (key) => {
    if (isMobile()) {
      setHoveredDropdown((prev) => (prev === key ? null : key));
    }
  };

  const handleMouseEnter = (key) => {
    if (!isMobile()) {
      setHoveredDropdown(key);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile()) {
      setHoveredDropdown(null);
    }
  };

  return (
    <header
      className={`w-full px-6 py-4 shadow-md bg-blue-50 sticky top-0 z-50 transition-all duration-300 ${
        isMobile() && hoveredDropdown ? "pb-40" : ""
      }`}
    >
      <div className="w-full">
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-x-6 gap-y-4">
          <Link
            to="/"
            className="text-2xl font-bold tracking-tight text-blue-900 whitespace-nowrap"
          >
            🏈 Football Analytics Nerd
          </Link>

          <div className="overflow-x-scroll sm:overflow-visible w-full relative z-30 border-t border-blue-200 pt-2">
            <nav
              className="flex flex-row flex-nowrap whitespace-nowrap min-w-max gap-3 sm:gap-4 text-blue-800 font-medium text-xs sm:text-sm no-scrollbar"
              style={{ WebkitOverflowScrolling: "touch" }}
            >
              {isMobile() && (
                <div className="flex-shrink-0 animate-pulse text-gray-400 select-none pointer-events-none">
                  ⬅ Scroll ➡
                </div>
              )}

              <Link to="/">
                <button className={isActive("/")}>Home</button>
              </Link>
              <Link to="/lineup">
                <button className={isActive("/lineup")}>Team Pages</button>
              </Link>

              {[
                {
                  key: "rankings",
                  label: "Rankings & Awards",
                  links: [
                    { to: "/rankings", text: "Rankings" },
                    { to: "/awards", text: "Awards" },
                  ],
                },
                {
                  key: "comparison",
                  label: "Player Comparison Tools",
                  links: [
                    { to: "/compare", text: "Similarity Scores" },
                    { to: "/whobetta", text: "Player Comparison" },
                    { to: "/guess-similarity", text: "Similarity Game" }, // ⬅️ Add this line
                  ],
                },
                {
                  key: "analysis",
                  label: "Charts & Research",
                  links: [
                    { to: "/charts", text: "Charts" },
                    { to: "/research", text: "Research" },
                  ],
                },
                {
                  key: "contracts",
                  label: "Contracts",
                  links: [
                    { to: "/contract-market", text: "Contract Market" },
                    { to: "/contracts", text: "Extension Projections" },
                    { to: "/freeagents", text: "Top Free Agents" },
                  ],
                },
                {
                  key: "draft",
                  label: "2025 Draft",
                  links: [
                    { to: "/draft-page", text: "Draft Center" },
                    { to: "/draft-previews", text: "Team Draft Previews" },
                  ],
                },
              ].map(({ key, label, links }) => {
                const isActiveDropdown = links.some((l) =>
                  location.pathname.startsWith(l.to)
                );
                const dropdownOpen =
                  hoveredDropdown === key &&
                  (isMobile() || (!isMobile() && hoveredDropdown === key));

                return (
                  <div
                    key={key}
                    className="relative group"
                    onMouseEnter={() => handleMouseEnter(key)}
                    onMouseLeave={() => handleMouseLeave()}
                    onClick={() => handleDropdown(key)}
                  >
                    <button
                      className={
                        isActiveDropdown
                          ? "text-blue-600 underline font-bold"
                          : "hover:text-blue-600 font-bold"
                      }
                    >
                      {label} ▾
                    </button>
                    {dropdownOpen && (
                      <div
                        className={`${
                          isMobile() ? "relative mt-2" : "absolute mt-px left-0"
                        } bg-white border rounded shadow-lg z-50 w-48 py-2`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        {links.map(({ to, text }) => (
                          <Link
                            key={to}
                            to={to}
                            className="block px-4 py-2 hover:bg-gray-100 text-blue-800 font-bold"
                            onClick={() => setHoveredDropdown(null)}
                          >
                            {text}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              <Link to="/search">
                <button className={isActive("/search")}>Player Search</button>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
