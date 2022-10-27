export type analysisDataType = {
  id: string;
  month: string;
  camp: string;
  country: string;
  school: string;
  lessons: number;
}[];

export type reArrangedAnalysisDataType = {
  camp: {
    school: analysisDataType;
  };
};
