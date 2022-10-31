import create from "zustand";
import { persist } from "zustand/middleware";
import { StoreType, themeStoreType } from "../types/storeTypes";
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
export const useThemeStore = create<themeStoreType>()(
  persist(
    (set) => ({
      theme: "light",
      setThem: (payload: string) => set({ theme: payload }),
    }),
    {
      name: "theme",
    }
  )
);
export default useStore;
