import { BeerApiType, BeerType } from '../types/beer_type';

// Sample arrays for random values
const beerStyles = ['IPA', 'Stout', 'Lager', 'Pilsner', 'Ale', 'Porter'];
const breweries = [
  'BrewDog',
  'Stone Brewing',
  'Sierra Nevada',
  'Lagunitas',
  'Founders',
  'Dogfish Head',
];

// Function to get a random value from an array
const getRandomArrayValue = <T>(arr: T[]): T =>
  arr[Math.floor(Math.random() * arr.length)];

// Function to get a random number in a range
const getRandomNumber = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1)) + min;

// Mapping function from BeerApiType to BeerType
export const mapBeerApiToBeer = (apiData: BeerApiType[]): BeerType[] => {
  return apiData.map((beer) => ({
    id: beer._id,
    name: beer.name,
    brand: getRandomArrayValue(breweries),
    image: beer.image_url,
    style: getRandomArrayValue(beerStyles),
    abv: getRandomNumber(4, 12).toString(),
    price: getRandomNumber(10, 100).toString(),
    description: beer.description,
    tagline: beer.tagline,
    tips: beer.brewers_tips,
    attenuation: beer.attenuation_level,
  }));
};
