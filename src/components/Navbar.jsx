import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

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

        {/* Hamburger Button for Mobile */}
        <button
          className="sm:hidden text-blue-800 text-xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </button>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex space-x-4 text-blue-800 font-medium text-sm">
          {navItems.map(({ path, label }) => (
            <Link key={path} to={path}>
              <button className={isActive(path)}>{label}</button>
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="flex flex-col sm:hidden px-6 pt-4 space-y-3 text-blue-800 font-medium text-sm bg-blue-50 shadow-inner">
          {navItems.map(({ path, label }) => (
            <Link key={path} to={path} onClick={() => setMobileOpen(false)}>
              <span className={isActive(path)}>{label}</span>
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

const navItems = [
  { path: "/", label: "Home" },
  { path: "/rankings", label: "Rankings" },
  { path: "/lineup", label: "Team Pages" },
  { path: "/freeagents", label: "Top Free Agents" },
  { path: "/compare", label: "Player Similarity Comparison" },
  { path: "/whobetta", label: "Head2Head" },
  { path: "/draft-page", label: "Draft Center" },
  { path: "/contract-market", label: "Contract Market" },
  { path: "/contracts", label: "Extension Projections" },
  { path: "/draft-previews", label: "Team Draft Previews" },
  { path: "/awards", label: "Awards" },
  { path: "/research", label: "Research" },
  { path: "/charts", label: "Charts" },
  { path: "/search", label: "Player Search" },
];
