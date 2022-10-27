import create from "zustand";
type Store = {
  analysisData:
    | {
        id: string;
        month: string;
        camp: string;
        country: string;
        school: string;
        lessons: number;
      }
    | undefined;
  error: any;
  fetch: (key: string, url: string) => void;
};

const useStore = create<Store>()((set) => ({
  analysisData: undefined,
  error: false,
  fetch: (key, url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => set({ [key]: data }))
      .catch((error) => set({ error: error }));
  },
}));

export default useStore;
