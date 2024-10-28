import { StateCreator } from 'zustand';
import { StoreType } from '../types/store_type';

type UserState = {
  name: string;
};

type UserActions = {
  setName: (name: string) => void;
};

export type UserSlice = UserState & UserActions;

export const createUserSlice: StateCreator<
  StoreType,
  [['zustand/immer', never]],
  [],
  UserSlice
> = (set) => ({
  name: '',
  setName: (name) =>
    set((state) => {
      state.name = name;
    }),
});
