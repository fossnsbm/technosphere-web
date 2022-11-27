import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { ApiService } from "../../ApiService";

/**
 *
 * @returns Deals with `/meta/comment/${id}` api
 * Caching handled by react query
 */
export const GetComments = (id: string) => {
  const requestService = ApiService.createInstance();

  return useQuery([`commets-${id}`], async () => {
    const response: AxiosResponse = await requestService.getComments(id);
    return response.data;
  });
};
