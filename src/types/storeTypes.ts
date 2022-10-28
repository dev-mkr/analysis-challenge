export type StoreType = {
  analysisData: reArrangedAnalysisDataType | undefined;
  error: any;
  fetchAnalysisData: () => void;
  selectedCountry: string;
  selectedCamp: string;
  selectedSchool: string;
  setStore: <T>(key: string, payload: T) => void;
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
