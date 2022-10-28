import { memo } from "react";
import useStore from "../../../store/store";
import DropDown from "../../../components/DropDown";

const CampDropDown = () => {
  const analysisData = useStore((state) => state.analysisData);
  const setStore = useStore((state) => state.setStore);
  const selectedCountry = useStore((state) => state.selectedCountry);
  const selectedCamp = useStore((state) => state.selectedCamp);

  const camps = Object.keys(analysisData?.get(selectedCountry) || {}).map(
    (camp, index) => {
      return <option key={camp}>{camp}</option>;
    }
  );
  return (
    <DropDown
      labelText="Select a Country"
      value={selectedCamp}
      onChange={(event) => setStore("selectedCamp", event.target.value)}
    >
      {camps}
    </DropDown>
  );
};

export default memo(CampDropDown);
