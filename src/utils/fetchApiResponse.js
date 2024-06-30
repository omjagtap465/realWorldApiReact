import axios from "axios";
const baseUrl = "https://api.realworld.io/api";

const fetchApi = async (url, payload) => {
  console.log("url",url);
  const res = await axios(baseUrl + url, payload);
  const apiResponse = res.data;
  console.log(apiResponse);
  return apiResponse;
};
export default fetchApi;
