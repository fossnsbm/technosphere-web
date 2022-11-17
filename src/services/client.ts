import axios from "axios";
import { getAuthStorage } from "../utils/jwt-token";

const id_token = getAuthStorage();

const apiClient = axios.create({
  baseURL: "http://localhost:4000",
  responseType: "json",
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ${id_token}`,
  },
});

export { apiClient };
