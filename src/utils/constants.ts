import { BeerType } from '../types/beer_type';

export const BEER_STYLE = ['IPA', 'Stout', 'Lager', 'Pilsner', 'Ale', 'Porter'];
export const BREWARIES = [
  'BrewDog',
  'Stone Brewing',
  'Sierra Nevada',
  'Lagunitas',
  'Founders',
  'Dogfish Head',
];
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
};

export const MAX_PRICE = 100;
export const MAX_ABV = 13;

export const STORAGE_NAME = 'beer_storage';
