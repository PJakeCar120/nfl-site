import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";
import RankingsPage from "./pages/RankingsPage";
import Research from "./pages/Research";
import ContractsPage from "./pages/ContractsPage";
import PlayerComparison from "./pages/PlayerComparison";
import AwardsPage from "./pages/Awards"
import ContractMarket from "./pages/ContractMarket";
import DraftPreviews from "./pages/DraftPreviews";
import PlayerPage from "./pages/SearchResults";
import DraftPage from "./pages/DraftPage";
import SearchResults from "./pages/SearchResults";
import WhoBetta from "./pages/PlayerComparer";
import TeamLineup from "./pages/TeamLineup"; // ✅ NEW IMPORT
import TopFreeAgents from "./pages/TopFreeAgents"; // ✅ Add this
import ChartsPage from "./pages/Charts"; // adjust if your path is different



function App() {
  return (
    <Router>
      <Navbar />
      <div className="w-full px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:id" element={<ProjectPage />} />
          <Route path="/rankings" element={<RankingsPage />} />
          <Route path="/research" element={<Research />} />
          <Route path="/contract-market" element={<ContractMarket />} />
          <Route path="/contracts" element={<ContractsPage />} />
          <Route path="/compare" element={<PlayerComparison />} />
          <Route path="/draft-previews" element={<DraftPreviews />} />
          <Route path="/awards" element={<AwardsPage />} />
          <Route path="/projects/similarity" element={<PlayerComparison />} />
          <Route path="/projects/contract-market" element={<ContractMarket />} />
          <Route path="/player" element={<PlayerPage />} />
          <Route path="/draft-page" element={<DraftPage />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/playersearch" element={<SearchResults />} />
          <Route path="/freeagents" element={<TopFreeAgents />} />
          <Route path="/whobetta" element={<WhoBetta />} />
          <Route path="/lineup" element={<TeamLineup />} />
          <Route path="/charts" element={<ChartsPage />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
