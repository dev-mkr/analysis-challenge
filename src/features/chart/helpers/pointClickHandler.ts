import type { MouseEvent } from "react";
import type { Chart as ChartJS } from "chart.js";
import { getElementAtEvent } from "react-chartjs-2";
import type { NavigateFunction } from "react-router";

const pointClickHandler = (
  event: MouseEvent<HTMLCanvasElement>,
  chartRef: ChartJS<"line"> | null,
  navigateTo: NavigateFunction,
  selectedCountry: string,
  selectedCamp: string
) => {
  if (!chartRef) {
    return;
  }

  const points = getElementAtEvent(chartRef, event);
  if (points && points.length > 0 && points[0]) {
    const { datasetIndex, index } = points[0];
    const month = chartRef?.data?.labels?.[index];
    const schoolName = chartRef?.data.datasets[datasetIndex].label;
    const schoolLessons = chartRef?.data?.datasets[datasetIndex].data[index];

    navigateTo("/point-details", {
      state: {
        country: selectedCountry,
        camp: selectedCamp,
        schoolName,
        month,
        schoolLessons,
      },
    });
  }
};

export default pointClickHandler;
