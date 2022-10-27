import { useEffect, useMemo } from "react";
import { enableMapSet } from "immer";
import useStore from "./store/store";

enableMapSet();

function App() {
  const fetchAnalysisData = useStore((state) => state.fetchAnalysisData);
  const analysisData = useStore((state) => state.analysisData);
  useEffect(() => fetchAnalysisData(), []);

  if (!analysisData) return;
  console.log(analysisData);
  return <div className="App"></div>;
}

export default App;
