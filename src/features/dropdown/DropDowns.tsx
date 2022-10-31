import { useEffect } from "react";

import useStore from "../../store/store";
import CampDropDown from "./components/CampDropDown";
import CountryDropDown from "./components/CountryDropDown";
import SchoolDropDown from "./components/SchoolDropDown";
const DropDowns = () => {
  const analysisData = useStore((state) => state.analysisData);
  const selectedCountry = useStore((state) => state.selectedCountry);
  const selectedCamp = useStore((state) => state.selectedCamp);
  const setStore = useStore((state) => state.setStore);

  useEffect(() => {
    const firstCamp = Object.keys(analysisData?.get(selectedCountry) || {})[0];
    if (!selectedCamp) {
      setStore("selectedCamp", firstCamp);
    }
  }, []);

  return (
    <header className="flex w-full py-10 justify-between flex-col lg:flex-row gap-3">
      <CountryDropDown />
      <CampDropDown />
      <SchoolDropDown />
    </header>
  );
};

export default DropDowns;
