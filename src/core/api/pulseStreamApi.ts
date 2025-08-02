import { env } from "@/config/env";
import { useAuthStore } from "@/store/authStore";
import axios from "axios";

const appApi = axios.create({
  baseURL: env.VITE_BASE_URL,
});

appApi.interceptors.request.use(async (config) => {
  const token = useAuthStore.getState().auth.accessToken;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export { appApi };
