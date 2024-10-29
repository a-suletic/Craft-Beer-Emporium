import { StateCreator } from 'zustand';
import { StoreType } from '../types/store_type';
import { BeerType } from '../types/beer_type';
import { filterBeers } from '../services/store-service';
import { INIT_BEER, MAX_ABV, MAX_PRICE } from '../utils/constants';

const initBeers: BeerType[] = [INIT_BEER];

type FilterState = {
  beers: BeerType[];
  displayBeers: BeerType[];
  filterPrice: number;
  filterAbv: number;
  filterStyle: string;
  filterBrand: string;
};

type FilterActions = {
  filterByPrice: (maxPrice: string) => BeerType[];
  filterByAbv: (maxAbv: number) => BeerType[];
  filterByStyle: (style: string) => BeerType[];
  filterByBrand: (brand: string) => BeerType[];
};

export type FilterSlice = FilterState & FilterActions;

export const createFilterSlice: StateCreator<
  StoreType,
  [['zustand/immer', never]],
  [],
  FilterSlice
> = (set, get) => ({
  beers: initBeers,
  displayBeers: initBeers,
  filterPrice: MAX_PRICE,
  filterAbv: MAX_ABV,
  filterStyle: '',
  filterBrand: '',
  filterByPrice: (maxPrice) => {
    const filterByPrice = filterBeers(
      get().beers,
      get().filterAbv,
      Number(maxPrice),
      get().filterStyle,
      get().filterBrand
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
      get().filterBrand
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
      get().filterBrand
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
      brand
    );
    set((state) => {
      state.displayBeers = filterByStyle;
      state.filterBrand = brand;
    });
    return filterByStyle;
  },
});
