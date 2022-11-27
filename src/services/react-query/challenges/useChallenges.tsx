import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { ApiService } from "../../ApiService";

/**
 *
 * @returns Deals with `/meta/challengers/public` api
 * Caching handled by react query
 */
export const GetChallengers = () => {
  const requestService = ApiService.createInstance();

  return useQuery(["Challenges"], async () => {
    const response: AxiosResponse = await requestService.getChallengers();
    return response.data;
  });
};
