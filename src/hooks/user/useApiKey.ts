import { useState } from "react";

export const useApiKeyStorage = () => {
  function setApiKey(key: string) {
    localStorage.setItem("apiKey", key);
  }

  function getApiKey() {
    const saved = localStorage.getItem("apiKey");
    if (saved) return saved;
  }

  return { setApiKey, getApiKey };
};
