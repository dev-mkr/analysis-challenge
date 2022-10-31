//types for chartjs
import type { Chart as ChartJS } from "chart.js";

import Line from "./registeredChart";
import { useState, useEffect, useRef } from "react";
import useStore from "../../store/store";
//helper functions
import sortMonthsDataSets from "../../utilities/sortMonthsDataSets";
import { getColor } from "../../utilities/colorsPalaets";
import { months } from "../../utilities/monthsLabels";
import pointClickHandler from "./helpers/pointClickHandler";
//router
import { useNavigate } from "react-router";
import chartOptions from "./helpers/chartOptions";

const LineChart = () => {
  const navigateTo = useNavigate();

  const analysisData = useStore((state) => state.analysisData);
  const selectedCountry = useStore((state) => state.selectedCountry);
  const selectedCamp = useStore((state) => state.selectedCamp);
  const selectedSchool = useStore((state) => state.selectedSchool);
  const setStor = useStore((state) => state.setStore);

  const chartData = useStore((state) => state.chartData);
  const chartRef = useRef<ChartJS<"line">>(null);
  const { options } = chartOptions();

  useEffect(() => {
    const chart = chartRef.current;
    setStor("chartRef", chart);
  }, []);

  useEffect(() => {
    if (selectedSchool !== "showAll") {
      const color = getColor.next().value;
      setStor("chartData", {
        labels: months,
        datasets: [
          {
            label: selectedSchool,
            borderColor: `rgba(${color})`,
            backgroundColor: `rgba(${color})`,
            pointStyle: "circle",
            pointRadius: 7,
            data: [
              ...sortMonthsDataSets(
                analysisData?.get(selectedCountry)?.[selectedCamp]?.[selectedSchool] || []
              ).values(),
            ],
          },
        ],
      });
    } else {
      setStor("chartData", {
        labels: months,
        datasets: Object.entries(
          analysisData?.get(selectedCountry)?.[selectedCamp] || {}
        ).map((school) => {
          const color = getColor.next().value;
          return {
            label: school[0],
            pointStyle: "circle",
            pointRadius: 7,
            borderColor: `rgba(${color})`,
            backgroundColor: `rgba(${color}, 0.5)`,
            data: [...sortMonthsDataSets(school[1]).values()],
          };
        }),
      });
    }
  }, [selectedCountry, selectedCamp, selectedSchool]);
  return (
    <div className="basis-full  bg-primary text-base lg:basis-4/6">
      <Line
        ref={chartRef}
        data={chartData}
        options={options}
        className="max-w-full"
        onClick={(event) =>
          pointClickHandler(
            event,
            chartRef.current,
            navigateTo,
            selectedCountry,
            selectedCamp
          )
        }
      />
    </div>
  );
};

export default LineChart;
