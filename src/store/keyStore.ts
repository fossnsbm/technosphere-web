import create from "zustand";
import { devtools, persist } from "zustand/middleware";

type Nullable<T> = T | null;

interface KeyStore {
  key: Nullable<string>;
  setAccessToken: (token: string) => void;
  clear: () => void;
}

export const useTokenStore = create<KeyStore>()(
  devtools(
    persist(
      (set) => ({
        key: null,
        setAccessToken: (accessToken: string) =>
          set(() => ({ key: accessToken })),
        clear: () => set(() => ({ key: null })),
      }),
      {
        name: "key-storage",
      }
    )
  )
);
