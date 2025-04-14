import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="w-full px-6 py-4 shadow-md bg-blue-50 sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="text-2xl font-bold tracking-tight text-blue-900">
          🏈 Football Analytics Nerd
        </Link>
        <nav className="space-x-4 text-blue-800 font-medium text-sm">
          <Link to="/"><button className="hover:text-blue-600">Home</button></Link>
          <Link to="/rankings"><button className="hover:text-blue-600">Rankings</button></Link>
          <Link to="/lineup"><button className="hover:text-blue-600">Team Pages</button></Link> {/* ✅ new */}
          <Link to="/freeagents"><button className="hover:text-blue-600">Top Free Agents</button></Link>
          <Link to="/compare"><button className="hover:text-blue-600">Player Similarity Comparison</button></Link>
          <Link to="/whobetta"><button className="hover:text-blue-600">Head2Head</button></Link>
          <Link to="/draft-page"><button className="hover:text-blue-600">Draft Center</button></Link>
          <Link to="/contract-market"><button className="hover:text-blue-600">Contract Market</button></Link>
          <Link to="/contracts"><button className="hover:text-blue-600">Extension Projections</button></Link>
          <Link to="/draft-previews"><button className="hover:text-blue-600">Team Draft Previews</button></Link>
          <Link to="/research"><button className="hover:text-blue-600">Research</button></Link>
          <Link to="/search"><button className="hover:text-blue-600">Player Search</button></Link>
        </nav>
      </div>
    </header>
  );
}
