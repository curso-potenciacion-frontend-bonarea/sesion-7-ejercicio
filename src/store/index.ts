import { create } from "zustand";
import { ShopsState } from "@/shops/types";
import { createShopsSlice } from "@/shops/slices/shopsSlice";

export const useAppStore = create<ShopsState>((...creators) => ({
  ...createShopsSlice(...creators),
}));
