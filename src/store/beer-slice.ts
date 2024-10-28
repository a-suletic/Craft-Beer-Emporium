import { StateCreator } from 'zustand';
import { StoreType } from '../types/store_type';
import { BeerApiType, BeersApi, BeerType } from '../types/beer_type';
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
  dsescription: '',
  tagline: '',
  tips: '',
  attenuation: '',
};

const initBeers: BeerType[] = [initBeer];

type BeerState = {
  beers: BeerType[];
  selected: BeerType;
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
  selected: initBeer,
  fetchBeers: async () => {
    const response = await axios.get(
      'https://ih-beers-api2.herokuapp.com/beers'
    );
    const mappedBeers = mapBeerApiToBeer(response.data);
    set((state) => {
      state.beers = mappedBeers;
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
