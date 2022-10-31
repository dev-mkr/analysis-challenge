import { nanoid } from "nanoid";
import { memo } from "react";
import useStore from "../../../store/store";
import DropDown from "../../../components/DropDownComponent";

const CampDropDown = () => {
  const analysisData = useStore((state) => state.analysisData);
  const setStore = useStore((state) => state.setStore);
  const selectedCountry = useStore((state) => state.selectedCountry);
  const selectedCamp = useStore((state) => state.selectedCamp);

  const camps = Object.keys(analysisData?.get(selectedCountry) || {}).map((camp) => {
    return <option key={nanoid()}>{camp}</option>;
  });
  return (
    <DropDown
      labelText="Select a Camp"
      value={selectedCamp}
      onChange={(event) => {
        setStore("selectedCamp", event.target.value);
        setStore("selectedSchool", "showAll");
      }}
    >
      {camps}
    </DropDown>
  );
};

export default memo(CampDropDown);
