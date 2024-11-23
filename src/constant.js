export const base_url = "https://api.stlouisfed.org/fred";
export const api_key = "b5012636c81dde3475ff4c99dba14ec9";

export const lineChartInitialConfigValues = {
  width: undefined,
  height: undefined,
  withArea: false,
  grid: false,
  skipAnimation: false,
  xLabel: "x Axis",
  yLabel: "y Axis",
  xLabelFontSize: 12,
  lineColor1: "#1AA7FF",
  lineColor2: "#FFBB00",
  hideXValue: false,
  disableLine: false,
  disableTicks: false,
  yLabelFontSize: 12,
  dataSource: "observations",
  dataSourceSearchText: "",
  lineType: "linear",
  frequency: "Monthly",
};

export const barChartInitialConfigValues = {
  width: undefined,
  height: undefined,
  borderRadius: 0,
  color: "#f07575",
  skipAnimation: false,
  xLabel: "x Axis",
  dataSource: "observations",
  dataSourceSearchText: "",
};
