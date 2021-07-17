import axios from "axios";
export const API_URL = "http://localhost:8080/api";
const api = axios.create({
    baseURL: API_URL,
    withCredentials: true,
});

api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
    return config;
});
api.interceptors.response.use(
    (config) => {
        return config;
    },
    async (error) => {
        const originalRequset = error.config;
        if (error.response.status === 401 && error.config && !error.config._isRetry) {
            originalRequset._isRetry = true;
            try {
            } catch (e) {
                console.log(e);
            }
        }
        throw error;
    }
);
export default api;
