import create from "zustand";
import { StoreType } from "../types/storeTypes";
import reArrangeData from "../utilities/reArrangeData";

const useStore = create<StoreType>()((set, get) => ({
  analysisData: undefined,
  error: false,
  fetchAnalysisData: () => {
    fetch(
      "https://raw.githubusercontent.com/abdelrhman-arnos/analysis-fe-challenge/master/data.json"
    )
      .then((res) => res.json())
      .then((data) => {
        set({ analysisData: reArrangeData(data) });
        if (!get().selectedCountry) {
          set({ selectedCountry: data[0].country });
        }
      })
      .catch((error) => set({ error: error }));
  },
  selectedCountry: "",
  selectedCamp: "",
  selectedSchool: "showAll",
  setStore: (key, payload) => set({ [key]: payload }),
  chartData: { datasets: [] },
  chartRef: null,
}));

export default useStore;
