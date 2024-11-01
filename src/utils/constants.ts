import { BeerType } from '../types/beer_type';
import { Column } from '../types/table_type';

// Graphs
export const BEER_STYLE = ['IPA', 'Stout', 'Lager', 'Pilsner', 'Ale', 'Porter'];
export const BREWARIES = [
  'BrewDog',
  'Stone Brewing',
  'Sierra Nevada',
  'Lagunitas',
  'Founders',
  'Dogfish Head',
];

// Links
export const MANAGEMENT_PAGE = '/management';
export const DETAILS_PAGE = '/details';

// Filters
export const ORDER_BY = ['A to Z', 'Z to A'];
export const INIT_BEER: BeerType = {
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
  rating: '',
};
export const MAX_PRICE = 100;
export const MAX_ABV = 13;

// Common constants
export const STORAGE_NAME = 'beer_storage';

// Table
export const COLUMNS_BEER: Column[] = [
  { Header: 'Name', accessor: 'name' },
  { Header: 'Brand', accessor: 'brand' },
  { Header: 'Style', accessor: 'style' },
  { Header: 'ABV', accessor: 'abv' },
  { Header: 'Price', accessor: 'price' },
  { Header: 'Tagline', accessor: 'tagline' },
  { Header: 'Rating', accessor: 'rating' },
  { Header: 'Actions', accessor: 'actions' },
];
