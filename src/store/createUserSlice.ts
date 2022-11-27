import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { IUser } from "../interface/user";

type Nullable<T> = T | null;

export interface UserStore {
  user: Nullable<IUser>;
  setUser: (user: IUser) => void;
  clear: () => void;
}

export const useUserStore = create<UserStore>()(
  devtools(
    persist(
      (set) => ({
        user: null,
        setUser: (user: IUser) => set(() => ({ user: user })),
        clear: () => set(() => ({ user: null })),
      }),

      {
        name: "user-storage",
      }
    )
  )
);
