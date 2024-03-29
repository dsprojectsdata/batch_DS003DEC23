import { FETCH_ALL_BLOGS } from "../constants";
import axiosInstance from "./instance";


const getBlogs = (data) => axiosInstance.post("/blogs", data)

export { getBlogs };