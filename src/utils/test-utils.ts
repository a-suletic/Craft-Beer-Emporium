import { BeerType } from '../types/beer_type';

export const MOCK_BEERS: BeerType[] = [
  {
    id: '1',
    name: 'Buzz',
    brand: 'BrewDog',
    image: '/images/buzz.jpg',
    style: 'IPA',
    abv: '4.5',
    price: '5',
    description: 'A light, crisp and bitter IPA.',
    tagline: 'A Real Bitter Experience!',
    tips: 'Pair with spicy food',
    attenuation: '75',
    rating: '4',
  },
  {
    id: '2',
    name: 'Storm',
    brand: 'BrewDog',
    image: '/images/storm.jpg',
    style: 'Stout',
    abv: '5.0',
    price: '8',
    description: 'A strong, dark stout.',
    tagline: 'Bold and Dark',
    tips: 'Enjoy with dessert',
    attenuation: '80',
    rating: '5',
  },
  {
    id: '3',
    name: 'Amber',
    brand: 'BrewDog',
    image: '/images/amber.jpg',
    style: 'Amber Ale',
    abv: '4.8',
    price: '7',
    description: 'Smooth and malty with caramel notes.',
    tagline: 'Rich and Smooth',
    tips: 'Great with grilled meat',
    attenuation: '78',
    rating: '3',
  },
];
