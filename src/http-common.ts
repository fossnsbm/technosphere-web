import axios from "axios";
import { getApiKey, getAuthStorage } from "./utils/jwt-token";
import { AppConfig } from "./config";

const id_token = getAuthStorage();
const api_key = getApiKey();

export default axios.create({
  baseURL: AppConfig.BACKEND_API,
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ${id_token}`,
    "X-API-KEY": api_key,
  },
});
