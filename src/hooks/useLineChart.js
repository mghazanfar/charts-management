import { useEffect, useState } from "react";
import {
  getLineChartsData,
  getObservationsData,
  getReleasesData,
  getSearchData,
} from "../api/getLineChartsData";

const mapChartData = (data, type) => {
  return data?.map((item) => {
    const x =
      type === "observations"
        ? item?.value
        : type === "releases"
        ? item?.id
        : type === "search"
        ? item?.popularity
        : item?.popularity;

    const y =
      type === "observations"
        ? item?.id
        : type === "releases"
        ? item?.units
        : type === "search"
        ? item?.group_popularity
        : item?.units;
    return { ...item, x, y };
  });
};

export const useLineChart = () => {
  const [loadingLineChartData, setLoadingLineChartData] = useState(false);
  const [errorLineChartData, setErrorLineChartData] = useState("");
  const [lineChartData, setLineChartData] = useState([]);

  const fetchLineChartData = (
    type = "observations",
    search = "",
    frequency = "Monthly"
  ) => {
    setLoadingLineChartData(true);
    setErrorLineChartData("");

    const callback =
      type === "observations"
        ? getObservationsData
        : type === "releases"
        ? getReleasesData
        : type === "search"
        ? getSearchData
        : getLineChartsData;

    callback(search, frequency)
      .then((res) => {
        const dataKey =
          type === "search" || type === "series" ? "seriess" : type;
        const mappedData = mapChartData(res?.data?.[dataKey], type);
        setLineChartData(mappedData);
      })
      .catch((err) => {
        setErrorLineChartData(err?.message);
      })
      .finally(() => {
        setLoadingLineChartData(false);
      });
  };

  useEffect(() => {
    fetchLineChartData();
  }, []);

  return {
    loadingLineChartData,
    errorLineChartData,
    lineChartData,
    refetch: fetchLineChartData,
  };
};
