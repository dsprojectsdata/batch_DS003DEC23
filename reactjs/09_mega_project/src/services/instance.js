import axios from "axios";
import store from "../redux/store"

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_LIVE_BASE_URL
})

// Request Interceptor
axiosInstance.interceptors.request.use(function (config){
    // console.log("config >>", config)
    const userData = store.getState().auth.userData
    // console.log("userData >>", userData);

    userData && (config.headers.Authorization = `Bearer ${userData.token}`)
    return config;

},function (error){

    return Promise.reject(error);
})

// Response Interceptor
axiosInstance.interceptors.response.use(function(response){
    // console.log("response >>", response)
    return response;
    
}, function (error){
    
    // console.log("error >>", error)
    return Promise.reject(error);
});

export default axiosInstance;