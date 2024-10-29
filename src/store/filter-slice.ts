import { StateCreator } from 'zustand';
import { StoreType } from '../types/store_type';
import { BeerType } from '../types/beer_type';
import { filterByAbvandOrice } from '../services/store-service';
import { BREWARIES, BEER_STYLE } from '../utils/constants';

const initBeer: BeerType = {
  id: '',
  name: '',
  brand: '',
  image: '',
  style: '',
  abv: '',
  price: '',
  description: '',
  tagline: '',
  tips: '',
  attenuation: '',
};

const MAX_PRICE = 100;
const MAX_ABV = 13;

const initBeers: BeerType[] = [initBeer];

type FilterState = {
  beers: BeerType[];
  displayBeers: BeerType[];
  // sortByBrand: boolean;
  // sortByStyle: boolean;
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
    // if (Number(maxPrice) <= MAX_PRICE) {
    //   set((state) => {
    //     state.filterPrice = Number(maxPrice);
    //   });
    // }
    set((state) => {
      state.filterPrice = Number(maxPrice);
    });
    const filterByPrice = filterByAbvandOrice(
      get().beers,
      get().filterAbv,
      Number(maxPrice),
      get().filterStyle,
      get().filterBrand
    );
    set((state) => {
      state.displayBeers = filterByPrice;
    });
    console.log('filetrByPrice');
    console.log(filterByPrice);
    return filterByPrice;
  },
  filterByAbv: (maxAbv) => {
    // if (Number(maxAbv) <= MAX_ABV) {
    //   set((state) => {
    //     state.filterAbv = Number(maxAbv);
    //   });
    // }
    set((state) => {
      state.filterAbv = Number(maxAbv);
    });
    const filterByAbv = filterByAbvandOrice(
      get().beers,
      Number(maxAbv),
      get().filterPrice,
      get().filterStyle,
      get().filterBrand
    );
    set((state) => {
      state.displayBeers = filterByAbv;
    });
    console.log(filterByAbv);
    return filterByAbv;
  },
  filterByStyle: (style) => {
    // if (style !== '') {
    //   set((state) => {
    //     state.filterStyle = style;
    //   });
    // }
    set((state) => {
      state.filterStyle = style;
    });
    const filterByStyle = filterByAbvandOrice(
      get().beers,
      get().filterAbv,
      get().filterPrice,
      style,
      get().filterBrand
    );
    set((state) => {
      state.displayBeers = filterByStyle;
    });
    console.log(filterByStyle);
    return filterByStyle;
  },
  filterByBrand: (brand) => {
    // if (brand !== '') {
    //   set((state) => {
    //     state.filterBrand = brand;
    //   });
    // }
    set((state) => {
      state.filterBrand = brand;
    });
    const filterByStyle = filterByAbvandOrice(
      get().beers,
      get().filterAbv,
      get().filterPrice,
      get().filterStyle,
      brand
    );
    set((state) => {
      state.displayBeers = filterByStyle;
    });
    console.log(filterByStyle);
    return filterByStyle;
  },
});
