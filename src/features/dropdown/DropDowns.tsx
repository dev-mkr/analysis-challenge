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
    <header className="flex w-full flex-col justify-between gap-3 bg-primary py-10 text-base lg:flex-row">
      <CountryDropDown />
      <CampDropDown />
      <SchoolDropDown />
    </header>
  );
};

export default DropDowns;
