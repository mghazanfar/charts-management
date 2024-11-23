import { useEffect, useState } from "react";
import { getBarChartsData } from "../api/getBarChartData";

export const useBarChart = () => {
  const [loadingBarChartData, setLoadingBarChartData] = useState(false);
  const [errorBarChartData, setErrorBarChartData] = useState("");
  const [barChartData, setBarChartData] = useState([]);

  const fetchBarChartData = () => {
    setLoadingBarChartData(true);
    setErrorBarChartData("");
    getBarChartsData()
      .then((res) => {
        setBarChartData(res);
      })
      .catch((err) => {
        setErrorBarChartData(err?.message);
      })
      .finally(() => {
        setLoadingBarChartData(false);
      });
  };

  useEffect(() => {
    fetchBarChartData();
  }, []);

  return {
    loadingBarChartData,
    errorBarChartData,
    barChartData,
    refetch: fetchBarChartData,
  };
};
