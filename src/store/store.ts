import create from "zustand";
import { analysisDataType, reArrangedAnalysisDataType } from "../types/storeTypes";
import reArrangeData from "../utilities/reArrangeData";
type Store = {
  analysisData: Map<string, reArrangedAnalysisDataType> | undefined;
  error: any;
  fetchAnalysisData: () => void;
  setStore: <T>(key: string, payload: T) => void;
};

const useStore = create<Store>()((set) => ({
  analysisData: undefined,
  error: false,

  fetchAnalysisData: () => {
    fetch(
      "https://raw.githubusercontent.com/abdelrhman-arnos/analysis-fe-challenge/master/data.json"
    )
      .then((res) => res.json())
      .then((data) => set({ analysisData: reArrangeData(data) }))
      .catch((error) => set({ error: error }));
  },
  setStore: (key, payload) => set({ [key]: payload }),
}));

export default useStore;
