import type { ChartData } from "chart.js";
import type { Chart as ChartJS } from "chart.js";
export type StoreType = {
  analysisData: reArrangedAnalysisDataType | undefined;
  error: any;
  fetchAnalysisData: () => void;
  selectedCountry: string;
  selectedCamp: string;
  selectedSchool: string;
  setStore: <T>(key: string, payload: T) => void;
  chartData: ChartData<"line">;
  chartRef: ChartJS<"line"> | null;
};
export type analysisDataType = {
  id: string;
  month: string;
  camp: string;
  country: string;
  school: string;
  lessons: number;
}[];

export type reArrangedAnalysisDataType = Map<
  string,
  { [camp: string]: { [school: string]: analysisDataType } }
>;
