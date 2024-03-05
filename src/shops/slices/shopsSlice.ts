import { StateCreator } from "zustand";
import { produce } from "immer";
import { ShopsState } from "../types";

export const createShopsSlice: StateCreator<ShopsState> = (set) => ({
  shops: [],
  loadShops: (shops) =>
    set(
      produce((state: ShopsState) => {
        state.shops = shops;
      })
    ),
});
