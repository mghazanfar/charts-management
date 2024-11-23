import { Box } from "@mui/joy";
import { LineChartComponent } from "./line-chart";
import { BarChartComponent } from "./bar-chart";

export const Charts = ({ type, config }) => {
  return (
    <Box width="100%" height="100%">
      {type === "Line Chart" && <LineChartComponent config={config} />}
      {type === "Bar Chart" && <BarChartComponent config={config} />}
    </Box>
  );
};
