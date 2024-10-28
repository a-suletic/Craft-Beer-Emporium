import { StateCreator } from 'zustand';
import { StoreType } from '../types/store_type';

type CartState = {
  total: number;
  setTotal: (total: number) => void;
  reset: () => void;
};

type CartActions = {
  setTotal: (total: number) => void;
  reset: () => void;
};

export type CartSlice = CartState & CartActions;

export const createCartSlice: StateCreator<
  StoreType,
  [['zustand/immer', never]],
  [],
  CartSlice
> = (set) => ({
  total: 0,
  setTotal: (total) =>
    set((state) => {
      state.total = state.total + total;
    }),
  reset: () =>
    set((state) => {
      state.total = 0;
    }),
});
