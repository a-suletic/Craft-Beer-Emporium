import { StateCreator } from 'zustand';
import { StoreType } from '../types/store_type';
import { BeerType } from '../types/beer_type';
import { filterBeers } from '../services/store-service';
import { INIT_BEER, MAX_ABV, MAX_PRICE } from '../utils/constants';

type FilterState = {
  filterPrice: number;
  filterAbv: number;
  filterStyle: string;
  filterBrand: string;
  filterOrder: string | undefined;
};

type FilterActions = {
  filterByPrice: (maxPrice: string) => BeerType[];
  filterByAbv: (maxAbv: number) => BeerType[];
  filterByStyle: (style: string) => BeerType[];
  filterByBrand: (brand: string) => BeerType[];
  sortOrder: (order: string | undefined) => void;
};

export type FilterSlice = FilterState & FilterActions;

export const createFilterSlice: StateCreator<
  StoreType,
  [['zustand/immer', never]],
  [],
  FilterSlice
> = (set, get) => ({
  filterPrice: MAX_PRICE,
  filterAbv: MAX_ABV,
  filterStyle: '',
  filterBrand: '',
  filterOrder: 'asc',
  filterByPrice: (maxPrice) => {
    const filterByPrice = filterBeers(
      get().beers,
      get().filterAbv,
      Number(maxPrice),
      get().filterStyle,
      get().filterBrand,
      get().filterOrder
    );
    set((state) => {
      state.displayBeers = filterByPrice;
      state.filterPrice = Number(maxPrice);
    });
    return filterByPrice;
  },
  filterByAbv: (maxAbv) => {
    const filterByAbv = filterBeers(
      get().beers,
      Number(maxAbv),
      get().filterPrice,
      get().filterStyle,
      get().filterBrand,
      get().filterOrder
    );
    set((state) => {
      state.displayBeers = filterByAbv;
      state.filterAbv = Number(maxAbv);
    });
    return filterByAbv;
  },
  filterByStyle: (style) => {
    const filterByStyle = filterBeers(
      get().beers,
      get().filterAbv,
      get().filterPrice,
      style,
      get().filterBrand,
      get().filterOrder
    );
    set((state) => {
      state.displayBeers = filterByStyle;
      state.filterStyle = style;
    });
    return filterByStyle;
  },
  filterByBrand: (brand) => {
    const filterByStyle = filterBeers(
      get().beers,
      get().filterAbv,
      get().filterPrice,
      get().filterStyle,
      brand,
      get().filterOrder
    );
    set((state) => {
      state.displayBeers = filterByStyle;
      state.filterBrand = brand;
    });
    return filterByStyle;
  },
  sortOrder: (order) => {
    const orderedBeers = filterBeers(
      get().beers,
      get().filterAbv,
      get().filterPrice,
      get().filterStyle,
      get().filterBrand,
      order
    );
    set((state) => {
      state.displayBeers = orderedBeers;
      state.filterOrder = order;
    });
    return orderedBeers;
  },
});
