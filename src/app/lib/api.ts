// src/app/lib/api.ts
import axios, { InternalAxiosRequestConfig } from "axios";
import { getAuthToken } from "./auth"; // <-- pakai helper cookies

const api = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_API_BASE_URL || "http://127.0.0.1:8000/api",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = getAuthToken(); // ambil dari cookies
  if (token) {
    config.headers.set("Authorization", `Bearer ${token}`);
  }
  return config;
});

export default api;
