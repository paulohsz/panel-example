import axios from "axios";

import config from './../config';
const {  apiUrl } = config;

//import { getToken } from "./auth";

const api = axios.create({
  baseURL: apiUrl
});

/*api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});*/

export default api;
