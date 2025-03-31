import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";
import RankingsPage from "./pages/RankingsPage";
import ResearchPage from "./pages/ResearchPage";
import ContractsPage from "./pages/ContractsPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<ProjectPage />} />
        <Route path="/rankings" element={<RankingsPage />} />
        <Route path="/research" element={<ResearchPage />} />
        <Route path="/contracts" element={<ContractsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
