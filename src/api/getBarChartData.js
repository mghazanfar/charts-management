import axios from "axios";
import { api_key, base_url } from "../constant";

export const getBarChartsData = () => {
  const endpoint = `${base_url}&api_key=${api_key}&file_type=json&realtime_start=2000-08-08`;
  return axios.get(endpoint);
};
