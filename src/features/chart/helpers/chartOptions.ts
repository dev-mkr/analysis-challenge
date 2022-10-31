import { useState } from "react";
import type { ChartOptions } from "chart.js";
import { getDataSetLabel, getPointValue } from "./tooltipConfigHelpers";

const chartOptions = () => {
  const [options, setChartOptions] = useState<ChartOptions<"line">>({
    plugins: {
      tooltip: {
        usePointStyle: true,
        rtl: true,
        padding: 10,
        boxPadding: 50,
        callbacks: {
          title: () => "",
          label: getDataSetLabel,
          afterBody: getPointValue,
        },
      },
      legend: {
        display: false,
      },
    },
  });
  return { options, setChartOptions };
};

export default chartOptions;
