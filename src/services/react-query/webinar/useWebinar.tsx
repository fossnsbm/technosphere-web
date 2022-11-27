import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { ApiService } from "../../ApiService";

/**
 *
 * @returns Deals with `/meta/webinar` api
 * Caching handled by react query
 */
export const GetWebinars = () => {
  const requestService = ApiService.createInstance();

  return useQuery(["webinars"], async () => {
    const response: AxiosResponse = await requestService.getWebinars();
    return response.data;
  });
};
