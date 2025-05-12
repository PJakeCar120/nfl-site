import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (path) =>
    location.pathname.startsWith(path)
      ? "text-blue-600 underline"
      : "hover:text-blue-600";

  const navLinks = [
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

  return (
    <header className="w-full px-6 py-4 shadow-md bg-blue-50 sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="text-2xl font-bold tracking-tight text-blue-900">
          🏈 Football Analytics Nerd
        </Link>

        {/* Desktop nav — completely untouched */}
        <nav className="hidden md:flex space-x-4 text-blue-800 font-medium text-sm">
          {navLinks.map(({ path, label }) => (
            <Link key={path} to={path}>
              <button className={isActive(path)}>{label}</button>
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger toggle */}
        <button
          className="md:hidden text-2xl text-blue-800"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {mobileOpen && (
        <div className="md:hidden px-6 pt-4 pb-2 space-y-2 text-blue-800 font-medium text-sm bg-blue-50">
          {navLinks.map(({ path, label }) => (
            <Link key={path} to={path} onClick={() => setMobileOpen(false)}>
              <div className={isActive(path)}>{label}</div>
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
