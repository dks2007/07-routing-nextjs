import axios from "axios";

const API_BASE_URL = "https://notehub-public.goit.study/api";
const TOKEN = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

if (!TOKEN) {
  throw new Error("NEXT_PUBLIC_NOTEHUB_TOKEN is not defined");
}

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
});
