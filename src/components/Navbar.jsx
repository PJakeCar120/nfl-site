import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="w-full px-6 py-4 shadow-md bg-white sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="text-2xl font-bold tracking-tight">
          🏈 Football Analytics Nerd
        </Link>
        <nav className="space-x-4">
          <Link to="/"><button className="hover:underline">Home</button></Link>
          <Link to="/rankings"><button className="hover:underline">Rankings</button></Link>
          <Link to="/research"><button className="hover:underline">Research</button></Link>
          <Link to="/contracts"><button className="hover:underline">Extension Projections</button></Link>
          <Link to="/compare"><button className="hover:underline">Player Similarity Comparisons</button></Link>
          <Link to="/contract-market"><button className="hover:underline">Contract Market</button></Link>
          <Link to="/draft-previews"><button className="hover:underline">Draft Previews</button></Link>
        </nav>
      </div>
    </header>
  );
}
