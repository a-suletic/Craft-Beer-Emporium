import { StateCreator } from 'zustand';
import { StoreType } from '../types/store_type';
import { BeerType } from '../types/beer_type';
import axios from 'axios';
import { mapBeerApiToBeer } from '../utils/beer_api.utils';
import { INIT_BEER, MAX_ABV, MAX_PRICE } from '../utils/constants';

const initBeers: BeerType[] = [INIT_BEER];

type BeerState = {
  beers: BeerType[];
  selected: BeerType;
  displayBeers: BeerType[];
};

type BeerAction = {
  fetchBeers: () => Promise<BeerType[]>;
  getSelected: (selectedId: string) => BeerType | undefined;
};

export type BeerSlice = BeerState & BeerAction;

export const createBeerSlice: StateCreator<
  StoreType,
  [['zustand/immer', never]],
  [],
  BeerSlice
> = (set, get) => ({
  beers: initBeers,
  displayBeers: initBeers,
  selected: INIT_BEER,
  fetchBeers: async () => {
    const response = await axios.get(process.env.REACT_BEER_API!);
    const mappedBeers = mapBeerApiToBeer(response.data);
    set((state) => {
      state.beers = mappedBeers;
      state.displayBeers = mappedBeers;
      state.filterAbv = MAX_ABV;
      state.filterPrice = MAX_PRICE;
      state.filterBrand = '';
      state.filterStyle = '';
    });

    return mappedBeers;
  },
  getSelected: (selectedId) => {
    const selectedBeer = get().beers.find((beer) => beer.id === selectedId);
    if (selectedBeer) {
      set((state) => {
        state.selected = selectedBeer;
      });
    }
    return selectedBeer;
  },
});
