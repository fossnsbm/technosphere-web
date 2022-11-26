import { AxiosRequestConfig } from "axios";
import { apiClient } from "./client";

export class ApiService {
  config?: AxiosRequestConfig = {};

  static createInstance(): ApiService {
    const activeInstance = new ApiService();
    return activeInstance;
  }

  getCharacters = () => {
    return apiClient.get("/users/me");
  };

  getChallengers = () => {
    return apiClient.get("/meta/challengers/public");
  };
}
