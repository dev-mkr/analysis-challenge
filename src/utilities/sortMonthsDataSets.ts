import { analysisDataType } from "../types/storeTypes";
import { months } from "./monthsLabels";
const sortMonthsDataSets = (data: analysisDataType) => {
  return data.reduce((months, schoolObj): Map<string, number> => {
    return months.set(
      schoolObj.month,
      (months?.get(schoolObj.month) || 0) + schoolObj.lessons
    );
  }, new Map(months.map((month) => [month, 0])));
};

export default sortMonthsDataSets;
