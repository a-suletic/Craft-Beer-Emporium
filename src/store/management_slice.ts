import { StateCreator } from 'zustand';
import { StoreType } from '../types/store_type';

type ManagementState = {
  isCollapsed: boolean;
};

type ManagementAction = {
  setIsCollapsed: (colapsed: boolean) => void;
};

export type ManagementSlice = ManagementState & ManagementAction;

export const createManagementSlice: StateCreator<
  StoreType,
  [['zustand/immer', never]],
  [],
  ManagementSlice
> = (set) => ({
  isCollapsed: false,
  setIsCollapsed: (colapse) =>
    set((state) => {
      state.isCollapsed = colapse;
    }),
});
