import axios from "axios";
import { getAuthStorage } from "./utils/jwt-token";
import { AppConfig } from "./config";

const id_token = getAuthStorage();

export default axios.create({
  baseURL: AppConfig.BACKEND_API,
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ${id_token}`,
  },
});
