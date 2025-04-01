import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="w-full px-6 py-4 shadow-md bg-white sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="text-2xl font-bold tracking-tight">
          🏈 Football Analytics Nerd
        </Link>
        <nav className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/rankings" className="hover:underline">Rankings</Link>
          <Link to="/research" className="hover:underline">Research</Link>
          <Link to="/contracts" className="hover:underline">Extension Projections</Link>
          <Link to="/compare" className="hover:underline">Compare Players</Link>
          <Link to="/contract-market" className="hover:underline">Contract Market</Link>
          <Link to="/draft-previews" className="hover:underline">Draft Previews</Link>
        </nav>
      </div>
    </header>
  );
}
