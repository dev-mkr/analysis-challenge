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
  const selectedSchool = useStore((state) => state.selectedSchool);

  useEffect(() => {
    const firstCamp = Object.keys(analysisData?.get(selectedCountry) || {})[0];
    setStore("selectedCamp", firstCamp);
    setStore("selectedSchool", "Show All");
  }, []);

  return (
    <header>
      <CountryDropDown />
      <CampDropDown />
      <SchoolDropDown />

      <div>
        {selectedCountry}:{selectedCamp}:{selectedSchool}
      </div>
    </header>
  );
};

export default DropDowns;
