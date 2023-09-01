import create from "zustand";

export const searchClientStore = create((set) => ({
  oneclientData: undefined,
  setOneClientData: (oneclientData) => set((state) => ({ oneclientData })),
}));
