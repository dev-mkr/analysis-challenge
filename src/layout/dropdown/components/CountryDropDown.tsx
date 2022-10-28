import { memo } from "react";
import useStore from "../../../store/store";
import DropDown from "../../../components/DropDown";

const CountryDropDown = () => {
  const analysisData = useStore((state) => state.analysisData);
  const setStore = useStore((state) => state.setStore);
  const selectedCountry = useStore((state) => state.selectedCountry);

  const countries = [...(analysisData?.keys() || [])].map((country) => {
    return <option key={country}>{country}</option>;
  });

  return (
    <DropDown
      labelText="Select a country"
      value={selectedCountry}
      onChange={(event) => setStore("selectedCountry", event.target.value)}
    >
      {countries}
    </DropDown>
  );
};

export default memo(CountryDropDown);
