import { Box, Grid, Typography } from "@mui/joy";
import { ChartConfigurations } from "./components/chart-configurations";
import { Charts } from "./components/charts";
import { useState } from "react";

function App() {
  const [selectedChart, setSelectedChart] = useState(null);
  const [chartConfig, setChartConfig] = useState([]);
  return (
    <Grid container spacing={2} sx={{ flexGrow: 1, height: "100vh" }}>
      <Grid
        sm={12}
        md={3}
        sx={{
          borderRight: "1px solid #e7e7e7",
          height: "100%",
          p: 2,
          backgroundColor: "rgb(235, 245, 255)",
          borderColor: "rgb(153, 204, 255)",
        }}
      >
        <ChartConfigurations
          handleChange={setSelectedChart}
          handleChartConfigChange={setChartConfig}
        />
      </Grid>
      <Grid sm={12} md={9} sx={{ height: "100%", p: 2 }}>
        <Typography level="title-md" sx={{ fontWeight: "bold", mt: 1 }}>
          Chart Preview
        </Typography>
        <Typography level="body-md" sx={{ mt: 1 }}>
          We're using react, @mui/joy for UI commponents, @mui/icons-material
          for icons, @mui/x-charts for charts and axios for API integration. The
          charts on the left are highly customizable with configurations of the
          charts given below the selected chart.
        </Typography>
        <Box
          borderRadius={16}
          border="1px solid rgb(153, 204, 255)"
          p={2}
          mt={2}
          height="80vh"
          textAlign="center"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {selectedChart ? (
            <Charts type={selectedChart} config={chartConfig} />
          ) : (
            <Box>Please Select a chart from left.</Box>
          )}
        </Box>
      </Grid>
    </Grid>
  );
}

export default App;
