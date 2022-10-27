import { analysisDataType } from "../types/storeTypes";

import { reArrangedAnalysisDataType } from "../types/storeTypes";

const reArrangeData = (data: analysisDataType) => {
  const sortedData = data.reduce(function (mappedData, item) {
    if (!mappedData.get(item.country) || !mappedData.get(item.country)[item.camp]) {
      mappedData.set(item.country, { ...mappedData.get(item.country), [item.camp]: {} });
    }
    if (!mappedData.get(item.country)[item.camp][item.school]) {
      mappedData.set(item.country, {
        ...mappedData.get(item.country),
        [item.camp]: {
          ...mappedData.get(item.country)[item.camp],
          [item.school]: [],
        },
      });
    }

    mappedData.set(item.country, {
      ...mappedData.get(item.country),
      [item.camp]: {
        ...mappedData.get(item.country)[item.camp],
        [item.school]: [...mappedData.get(item.country)[item.camp][item.school], item],
      },
    });

    return mappedData;
  }, new Map());
  return sortedData;
};

export default reArrangeData;
