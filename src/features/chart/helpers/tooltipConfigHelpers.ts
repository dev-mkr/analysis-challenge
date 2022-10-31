import type { TooltipItem, ChartType } from "chart.js";

export const getDataSetLabel = (tooltipItem: TooltipItem<ChartType>): string => {
  return tooltipItem.dataset.label || "";
};
export const getPointValue = (tooltipItems: TooltipItem<ChartType>[]): string => {
  const { formattedValue } = tooltipItems[0];
  return `${formattedValue} lessons`;
};
