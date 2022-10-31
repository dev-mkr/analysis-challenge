import { nanoid } from "nanoid";
import { ReactComponent as MinusCircle } from "../../assets/minusCircle.svg";
import useStore from "../../store/store";
const SideLegend = () => {
  const chartData = useStore((state) => state.chartData.datasets);
  const chartRef = useStore((state) => state.chartRef);
  const selectedCamp = useStore((state) => state.selectedCamp);

  const handelButtonClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: number
  ) => {
    const isItemVisible = chartRef?.isDatasetVisible(index);
    if (isItemVisible) {
      chartRef?.hide(index);
      e.currentTarget.classList.add("opacity-30");
    }
    if (!isItemVisible) {
      chartRef?.show(index);
      e.currentTarget.classList.remove("opacity-30");
    }
  };
  const totalCampLessons = (
    <div className="flex flex-wrap">
      <span className="flex w-full items-end gap-x-2 font-bold">
        <span className="text-3xl">
          {chartData.reduce((acc: number, curr): number => {
            [...curr.data].map((lessonsNumber) => (acc += lessonsNumber as number));
            return acc;
          }, 0)}
        </span>
        lessons
      </span>
      <span>in {selectedCamp}</span>
    </div>
  );

  return (
    <aside className="flex basis-full flex-col gap-y-5 lg:order-2 lg:basis-1/4">
      {totalCampLessons}
      <div className="flex w-full flex-col gap-y-3">
        {chartData.map((school, index) => {
          //get total school lessons over the year
          const totalSchoolLessons = school.data.reduce((acc: number, curr): number => {
            return (acc += curr as number);
          }, 0);
          return (
            <button
              key={nanoid()}
              onClick={(e) => handelButtonClick(e, index)}
              className="flex flex-wrap items-center gap-x-5 "
              style={{
                color: school.borderColor as string,
              }}
              title="toggle chart"
            >
              <MinusCircle className="w-7" />

              <div>
                <span className="flex items-end gap-3">
                  <span className="text-2xl ">{totalSchoolLessons}</span>
                  lessons
                </span>
                <span>in {school.label}</span>
              </div>
            </button>
          );
        })}
      </div>
    </aside>
  );
};

export default SideLegend;
