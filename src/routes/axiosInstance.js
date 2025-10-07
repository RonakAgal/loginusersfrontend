import axios from "axios";


export const AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    withCredentials:true
})
console.log("BASE URL:", import.meta.env.VITE_API_BASE_URL);
