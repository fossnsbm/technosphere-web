import create from "zustand";
import { devtools, persist } from "zustand/middleware";

type Nullable<T> = T | null;

interface TokenStore {
  accessToken: Nullable<string>;
  setAccessToken: (token: string) => void;
  clear: () => void;
}

export const useTokenStore = create<TokenStore>()(
  devtools(
    persist(
      (set) => ({
        accessToken: null,
        setAccessToken: (accessToken: string) =>
          set(() => ({ accessToken: accessToken })),
        clear: () => set(() => ({ accessToken: null })),
      }),
      {
        name: "auth-storage",
      }
    )
  )
);
