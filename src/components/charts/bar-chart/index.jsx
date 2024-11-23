import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { Box, CircularProgress } from "@mui/joy";
import { useLineChart } from "../../../hooks/useLineChart";

export function BarChartComponent({ config = {} }) {
  const { refetch, errorLineChartData, lineChartData, loadingLineChartData } =
    useLineChart();

  const lineChartXAxisData = lineChartData?.map((item, index) =>
    isNaN(item?.x) ? 0 : parseFloat(item?.x) + index
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
    <BarChart
      dataset={lineChartData}
      series={[
        {
          data: lineChartXAxisData,
          label: config?.xLabel,
          area: config?.withArea,
          color: config?.color,
        },
      ]}
      borderRadius={config?.borderRadius}
      {...config}
    />
  );
}
