import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";
import RankingsPage from "./pages/RankingsPage";
import Research from "./pages/Research";
import ContractsPage from "./pages/ContractsPage";
import PlayerComparison from "./pages/PlayerComparison";
import ContractMarket from "./pages/ContractMarket";
import DraftPreviews from "./pages/DraftPreviews";
import PlayerPage from "./pages/PlayerPage"; // Adjust path if needed



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<ProjectPage />} />
        <Route path="/rankings" element={<RankingsPage />} />
        <Route path="/research" element={<Research />} />
        <Route path="/contract-market" element={<ContractMarket />} />
        <Route path="/contracts" element={<ContractsPage />} />
        <Route path="/compare" element={<PlayerComparison />} />
        <Route path="/draft-previews" element={<DraftPreviews />} />
        <Route path="/projects/similarity" element={<PlayerComparison />} />
        <Route path="/projects/contract-market" element={<ContractMarket />} />
        <Route path="/player" element={<PlayerPage />} />

      </Routes>
    </Router>
  );
}

export default App;



// Inside your Routes:




