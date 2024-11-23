import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { Box, CircularProgress } from "@mui/joy";
import { useLineChart } from "../../../hooks/useLineChart";
import { Error } from "../../error";

export function LineChartComponent({ config }) {
  const { lineChartData, errorLineChartData, refetch, loadingLineChartData } =
    useLineChart();

  const lineChartXAxisData = lineChartData?.map((item, index) =>
    isNaN(item?.x) ? 0 : parseFloat(item?.x) + index
  );

  const lineChartYAxisData = lineChartData?.map((item, index) =>
    isNaN(item?.x) ? 0 : parseFloat(item?.x) - index - 1
  );

  React.useEffect(() => {
    refetch(config?.dataSource, config?.dataSourceSearchText);
  }, [config?.dataSource]);

  return errorLineChartData ? (
    <Error error={errorLineChartData} />
  ) : loadingLineChartData ? (
    <Box
      width="100%"
      height="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <CircularProgress size="lg" color="primary" variant="soft" />
    </Box>
  ) : (
    <LineChart
      xAxis={[
        {
          data: lineChartXAxisData,
          label: config?.xLabel,
          hideTooltip: config?.hideXValue,
          disableLine: config?.disableLine,
          disableTicks: config?.disableTicks,
          labelStyle: {
            fontSize: config?.xLabelFontSize,
          },
        },
      ]}
      yAxis={[
        {
          data: lineChartYAxisData,
          label: config?.yLabel,
          hideTooltip: config?.hideYValue,
          disableLine: config?.disableLine,
          disableTicks: config?.disableTicks,
          labelStyle: {
            fontSize: config?.yLabelFontSize,
          },
          scaleType: config?.lineType,
        },
      ]}
      series={[
        {
          data: lineChartXAxisData,
          label: config?.xLabel,
          area: config?.withArea,
          color: config?.lineColor1,
        },
        {
          data: lineChartYAxisData,
          label: config?.yLabel,
          area: config?.withArea,
          color: config?.lineColor2,
        },
      ]}
      {...config}
      grid={{ horizontal: config?.grid, vertical: config?.grid }}
    />
  );
}
