import jwt_decode from "jwt-decode";

export const getAuthStorage = () => {
  return JSON.parse(localStorage.getItem("auth-storage")!).state.accessToken;
};

export const getApiKey = () => {
  if(localStorage.getItem("key-storage"))
  {

  return JSON.parse(localStorage.getItem("key-storage")!).state.key;

  }else
  {
    return null
  }
};
