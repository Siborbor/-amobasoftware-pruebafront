import create from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    (set) => ({
      token: "",
      setToken: (token) =>
        set((state) => ({
          token,
        })),
    }),
    {
      name: "auth",
    }
  )
);

export const userProfileStore = create((set) => ({
  userProfileData: "",
  setUserData: (userProfileData) => set((state) => ({ userProfileData })),
}));
