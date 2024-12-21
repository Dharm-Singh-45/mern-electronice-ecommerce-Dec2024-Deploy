import axios from "axios";

const api = axios.create({
  baseURL: "https://mern-electronice-ecommerce-backend.vercel.app/api",
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;