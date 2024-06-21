import { useState } from "react";
import axios from "axios";
export default (url) => {
  const baseUrl = "https://api.realworld.io/api";
  const [options, setOptions] = useState(null);
  const [response, setResponse] = useState(null);
  const doFetch = (options = {}) => {
    setOptions(options);
  };
  axios(baseUrl + url, options)
    .then((res) => {
      setResponse(res.data);
      setIsLoading(false);
    })
    .catch((error) => {
      setError(error.response.data);
      setIsLoading(false);
    });
  return [response, doFetch];
};
