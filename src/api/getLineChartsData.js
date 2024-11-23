import axios from "axios";
import { api_key, base_url } from "../constant";

export const getLineChartsData = () => {
  // const endpoint = `${base_url}/series?series_id=GNPCA&api_key=${api_key}&file_type=json&realtime_start=2000-08-08&limit=100&frequency=${frequency}`;
  const endpoint = `${base_url}/series?series_id=GNPCA&api_key=${api_key}&file_type=json&realtime_start=2000-08-08&limit=100`;
  return axios.get(endpoint);
};

export const getObservationsData = () => {
  const endpoint = `${base_url}/series/observations?series_id=GNPCA&api_key=${api_key}&file_type=json&realtime_start=2000-08-08&limit=100&`;
  return axios.get(endpoint);
};

export const getReleasesData = () => {
  const endpoint = `${base_url}/release?release_id=53&api_key=${api_key}&file_type=json&realtime_start=2000-08-08&limit=100`;
  return axios.get(endpoint);
};

export const getSearchData = (text) => {
  const endpoint = `${base_url}/series/search?search_text=${text}&api_key=${api_key}&file_type=json&realtime_start=2000-08-08&limit=100`;
  return axios.get(endpoint);
};
