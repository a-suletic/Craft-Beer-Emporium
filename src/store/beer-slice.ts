import { StateCreator } from 'zustand';
import { StoreType } from '../types/store_type';
import { BeerType } from '../types/beer_type';
import axios from 'axios';
import { mapBeerApiToBeer } from '../utils/beer_api.utils';

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
  selected: initBeer,
  fetchBeers: async () => {
    const response = await axios.get(
      'https://ih-beers-api2.herokuapp.com/beers'
    );
    const mappedBeers = mapBeerApiToBeer(response.data);
    set((state) => {
      state.beers = mappedBeers;
      state.displayBeers = mappedBeers;
      state.filterAbv = MAX_ABV;
      state.filterPrice = MAX_PRICE;
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
