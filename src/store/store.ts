import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { devtools, persist } from 'zustand/middleware';

import { StoreType } from '../types/store_type';
import { createUserSlice } from './user-slice';
import { createCartSlice } from './cart-slice';
import { createBeerSlice } from './beer-slice';

export const useStore = create<StoreType>()(
  devtools(
    persist(
      immer<StoreType>((...a) => ({
        ...createUserSlice(...a),
        ...createCartSlice(...a),
        ...createBeerSlice(...a),
      })),
      {
        name: 'beer-storage',
      }
    )
  )
);
