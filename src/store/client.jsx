import create from "zustand";

export const searchClientStore = create((set) => ({
  oneclientData: undefined,
  setOneClientData: (oneclientData) => set((state) => ({ oneclientData })),
}));

export const useProdutStore = create((set) => ({
  productData: undefined,
  setProductData: (productData) => set((state) => ({ productData })),
}));

export const useProdutSelected = create((set) => ({
  productDataSelected: undefined,
  setProductDataSelected: (productDataSelected) =>
    set((state) => ({ productDataSelected })),
}));
