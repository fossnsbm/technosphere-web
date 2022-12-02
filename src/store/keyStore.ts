import create from "zustand";
import { devtools, persist } from "zustand/middleware";

type Nullable<T> = T | null;

interface KeyStore {
  key: Nullable<string>;
  setApiKey: (token: string) => void;
  clear: () => void;
}

export const useApiKeyStore = create<KeyStore>()(
  devtools(
    persist(
      (set) => ({
        key: null,
        setApiKey: (ApiKey: string) => set(() => ({ key: ApiKey })),
        clear: () => set(() => ({ key: null })),
      }),
      {
        name: "key-storage",
      }
    )
  )
);
