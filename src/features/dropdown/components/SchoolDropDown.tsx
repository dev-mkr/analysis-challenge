import useStore from "../../../store/store";
import DropDown from "../../../components/DropDownComponent";
import { nanoid } from "nanoid";

const SchoolDropDown = () => {
  const analysisData = useStore((state) => state.analysisData);
  const setStore = useStore((state) => state.setStore);
  const selectedCountry = useStore((state) => state.selectedCountry);
  const selectedCamp = useStore((state) => state.selectedCamp);
  const selectedSchool = useStore((state) => state.selectedSchool);

  const schools = Object.keys(
    analysisData?.get(selectedCountry)?.[selectedCamp] || {}
  ).map((school, index) => {
    return <option key={nanoid()}>{school}</option>;
  });

  return (
    <DropDown
      labelText="Select a School"
      value={selectedSchool}
      onChange={(event) => setStore("selectedSchool", event.target.value)}
      showAll={true}
    >
      {schools}
    </DropDown>
  );
};

export default SchoolDropDown;
