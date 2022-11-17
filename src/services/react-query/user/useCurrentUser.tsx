import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { ApiService } from "../../ApiService";

/**
 *
 * @returns Deals with `/user/me` api
 * Caching handled by react query
 */
export const GetUserDetails = () => {
  const requestService = ApiService.createInstance();
  // const userId = useStore(state => state.userId);

  return useQuery(["UserDetails"], async () => {
    const response: AxiosResponse = await requestService.getCharacters();
    return response.data;
  });
};
