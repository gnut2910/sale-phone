import axios from "axios";

const axiosClient = axios.create({
  baseURL: import.meta.env.REACT_APP_API_URL, // backend API
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;
