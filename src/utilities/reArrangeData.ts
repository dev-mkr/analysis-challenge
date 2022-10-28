import { analysisDataType } from "../types/storeTypes";
import { enableMapSet } from "immer";
import produce from "immer";
enableMapSet();

import { reArrangedAnalysisDataType } from "../types/storeTypes";

const reArrangeData = (data: analysisDataType): reArrangedAnalysisDataType => {
  const sortedData = produce(new Map(), (draft) => {
    return data.reduce((mappedData, item) => {
      if (!mappedData.get(item.country) || !mappedData.get(item.country)[item.camp]) {
        mappedData.set(item.country, {
          ...mappedData.get(item.country),
          [item.camp]: {},
        });
      }
      if (!mappedData.get(item.country)[item.camp][item.school]) {
        mappedData.get(item.country)[item.camp][item.school] = [];
      }
      mappedData.get(item.country)[item.camp][item.school].push(item);
      return mappedData;
    }, draft);
  });

  return sortedData;
};

// const reArrangeData = (data: analysisDataType) => {
//   const sortedData = data.reduce((mappedData, item) => {
//     if (!mappedData.get(item.country) || !mappedData.get(item.country)[item.camp]) {
//       mappedData.set(item.country, { ...mappedData.get(item.country), [item.camp]: {} });
//     }
//     if (!mappedData.get(item.country)[item.camp][item.school]) {
//       mappedData.set(item.country, {
//         ...mappedData.get(item.country),
//         [item.camp]: {
//           ...mappedData.get(item.country)[item.camp],
//           [item.school]: [],
//         },
//       });
//     }

//     mappedData.set(item.country, {
//       ...mappedData.get(item.country),
//       [item.camp]: {
//         ...mappedData.get(item.country)[item.camp],
//         [item.school]: [...mappedData.get(item.country)[item.camp][item.school], item],
//       },
//     });

//     return mappedData;
//   }, new Map());
//   return sortedData;
// };

export default reArrangeData;
