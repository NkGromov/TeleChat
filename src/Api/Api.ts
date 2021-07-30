import axios from "axios";
import { Auth } from "../Types/ApiResponce";
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
        const originalRequest = error.config;
        if (error.response.status === 401 && error.config && !error.config._isRetry) {
            originalRequest.isRetry = true;
            try {
                const response = await axios.get<Auth>(`${API_URL}/refresh`, { withCredentials: true });
                localStorage.setItem("token", response.data.accesToken);
                return api.request(originalRequest);
            } catch (e) {
                console.log("Не авторизован");
            }
        }
        throw error;
    }
);
export default api;
