import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";
import RankingsPage from "./pages/RankingsPage";
import ResearchPage from "./pages/ResearchPage";
import ContractsPage from "./pages/ContractsPage";
import PlayerComparison from "./pages/PlayerComparison";
import ContractMarket from "./pages/ContractMarket";
import DraftPreviews from "./pages/DraftPreviews";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<ProjectPage />} />
        <Route path="/rankings" element={<RankingsPage />} />
        <Route path="/research" element={<ResearchPage />} />
        <Route path="/contract-market" element={<ContractMarket />} />
        <Route path="/contracts" element={<ContractsPage />} />
        <Route path="/compare" element={<PlayerComparison />} />
        <Route path="/draft-previews" element={<DraftPreviews />} />
      </Routes>
    </Router>
  );
}

export default App;



// Inside your Routes:

