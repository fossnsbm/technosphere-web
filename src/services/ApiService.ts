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

  getLeaderBoard = () => {
    return apiClient.get("/leaderboard");
  };

  getWebinars = () => {
    return apiClient.get("/meta/webinar");
  };

  getComments = (id: string) => {
    return apiClient.get(`/meta/comment/${id}`);
  };
}
