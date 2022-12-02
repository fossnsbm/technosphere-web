import jwt_decode from "jwt-decode";

export const getAuthStorage = () => {
  return JSON.parse(localStorage.getItem("auth-storage")!).state.accessToken;
};

export const getApiKey = () => {
  return JSON.parse(localStorage.getItem("key-storage")!).state.key;
};
