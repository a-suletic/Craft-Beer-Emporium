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
  selectedForEdit: BeerType;
  displayBeers: BeerType[];
};

type BeerAction = {
  fetchBeers: () => Promise<BeerType[]>;
  addBeer: (beer: BeerType) => void;
  removeBeer: (beerId: string) => void;
  updateBeer: (beer: BeerType) => void;
  getSelected: (selectedId: string) => BeerType | undefined;
  setSelectedForEdit: (beer: BeerType) => void;
};
const apiEndpoint = process.env.REACT_APP_API_ENDPOINT!;
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
  selectedForEdit: INIT_BEER,
  fetchBeers: async () => {
    const response = await axios.get(apiEndpoint);
    const mappedBeers = mapBeerApiToBeer(response.data);
    set((state) => {
      state.beers = mappedBeers;
      state.displayBeers = mappedBeers;
      state.filterAbv = MAX_ABV;
      state.filterPrice = MAX_PRICE;
      state.filterBrand = '';
      state.filterStyle = '';
      state.filterOrder = '';
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
  setSelectedForEdit: (selectedBeer) => {
    set((state) => {
      state.selectedForEdit = selectedBeer;
    });
  },
  addBeer: (beer) => {
    set((state) => {
      const beers = [...state.beers, beer];
      return { beers: beers, displayBeers: beers };
    });
  },
  updateBeer: (beer) => {
    set((state) => ({
      beers: state.beers.map((beerLoop) =>
        beer.id === beerLoop.id ? beer : beerLoop
      ),
      displayBeers: state.displayBeers.map((beerLoop) =>
        beer.id === beerLoop.id ? beer : beerLoop
      ),
    }));
  },
  removeBeer: (beerId) => {
    set((state) => {
      const beers = state.beers.filter((beer) => beer.id !== beerId);
      return { beers: beers, displayBeers: beers };
    });
  },
});
