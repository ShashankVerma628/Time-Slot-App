import axios from "axios";
import CONFIG from "../const";

const axiosInstance = axios.create({
  baseURL: CONFIG.BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
