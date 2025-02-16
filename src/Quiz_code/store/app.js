import { create } from "zustand";

export const useBearStore = create((set) => ({
  dataSelect: [],
  increasePopulation: (data) =>
    set((state) => ({ dataSelect: [...state.dataSelect, data] })),
}));
