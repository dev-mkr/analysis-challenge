import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AnalysisData from "./routes/AnalysisData";
import PointDetails from "./routes/PointDetails";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AnalysisData />} />
        <Route path="/point-details" element={<PointDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
