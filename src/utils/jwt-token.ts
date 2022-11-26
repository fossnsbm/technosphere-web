import jwt_decode from "jwt-decode";

export const getAuthStorage = () => {
  return JSON.parse(localStorage.getItem("auth-storage")!).state.accessToken;
};
