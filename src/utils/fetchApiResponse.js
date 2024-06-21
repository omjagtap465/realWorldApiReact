import axios from "axios";
const baseUrl = "https://api.realworld.io/api";

const fetchApi = async (url, payload) => {
  const res = await axios(baseUrl + url, payload);
  const apiResponse = res.data;
  return apiResponse;
};
export default fetchApi;
