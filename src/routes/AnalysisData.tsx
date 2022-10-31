import { useEffect } from "react";
import useStore from "../store/store";
import DropDowns from "../features/dropdown/DropDowns";
import LineChart from "../features/chart/LineChart";
import SideLegend from "../features/sideLegend/SideLegend";
import AnalysisLoader from "../components/AnalysisLoader";

const AnalysisData = () => {
  const fetchAnalysisData = useStore((state) => state.fetchAnalysisData);
  const analysisData = useStore((state) => state.analysisData);
  const error = useStore((state) => state.error);
  useEffect(() => fetchAnalysisData(), []);
  if (error) return <div>something went wrong</div>;
  return (
    <main className="h-screen w-full px-4 sm:px-6 md:px-8 xl:px-6">
      <h1 className="py-5 text-5xl">Analysis Chart</h1>
      <h2 className="py-5 text-3xl">Number of lessons</h2>
      {!analysisData ? (
        <AnalysisLoader />
      ) : (
        <>
          <DropDowns />
          <section className="flex flex-wrap justify-between pb-10">
            <SideLegend />
            <LineChart />
          </section>
        </>
      )}
    </main>
  );
};

export default AnalysisData;
