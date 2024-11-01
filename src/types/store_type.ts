import { BeerSlice } from '../store/beer-slice';
import { CartSlice } from '../store/cart-slice';
import { FilterSlice } from '../store/filter-slice';
import { ManagementSlice } from '../store/management_slice';
import { UserSlice } from '../store/user-slice';

export type StoreType = UserSlice &
  CartSlice &
  BeerSlice &
  FilterSlice &
  ManagementSlice;
