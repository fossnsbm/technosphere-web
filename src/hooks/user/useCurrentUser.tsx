import { useQuery } from "@tanstack/react-query";
import httpClient from "../../http-common";

const fetchCurrentUser = () =>
  httpClient.get("/users/me").then((response) => response.data);

export const useCurrentUser = () => {
  return useQuery(["current-user"], fetchCurrentUser);
};
