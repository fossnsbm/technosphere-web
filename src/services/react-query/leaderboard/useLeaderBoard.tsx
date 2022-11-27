import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { ApiService } from "../../ApiService";

/**
 *
 * @returns Deals with `/leaderboard` api
 * Caching handled by react query
 */
export const GetLeaderBoard = () => {
  const requestService = ApiService.createInstance();

  return useQuery(["Challenges"], async () => {
    const response: AxiosResponse = await requestService.getLeaderBoard();
    return response.data;
  });
};
