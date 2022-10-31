import { useLocation } from "react-router";
import { Link } from "react-router-dom";
type LocatedPointState = {
  country: string;
  camp: string;
  schoolName: string;
  schoolLessons: number;
  month: string;
};
const PointDetails = () => {
  const location = useLocation();
  const state: LocatedPointState = location.state;
  const { country, camp, schoolName, schoolLessons, month } = state;
  return (
    <>
      <div>Country: {country}</div>
      <div>Camp: {camp}</div>
      <div>School: {schoolName}</div>
      <div>Month: {month}</div>
      <div>No. of lessons: {schoolLessons}</div>
      <Link to={"/"}>Back</Link>
    </>
  );
};

export default PointDetails;
