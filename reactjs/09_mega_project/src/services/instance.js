import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_LIVE_BASE_URL
})

export default axiosInstance;