import { BeerType } from '../types/beer_type';
import { sortBeersByName, filterBeers } from './store-service';

const MOCK_BEERS: BeerType[] = [
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

describe('sortBeersByName', () => {
  it('should sort beers in ascending order by name', () => {
    const sortedBeers = sortBeersByName(MOCK_BEERS, 'asc');
    expect(sortedBeers[0].name).toBe('Amber');
    expect(sortedBeers[1].name).toBe('Buzz');
    expect(sortedBeers[2].name).toBe('Storm');
  });

  it('should sort beers in descending order by name', () => {
    const sortedBeers = sortBeersByName(MOCK_BEERS, 'desc');
    expect(sortedBeers[0].name).toBe('Storm');
    expect(sortedBeers[1].name).toBe('Buzz');
    expect(sortedBeers[2].name).toBe('Amber');
  });
});

describe('filterBeers', () => {
  it('should filter beers by maximum ABV and maximum price', () => {
    const filteredBeers = filterBeers(MOCK_BEERS, 5, 7, '', '', 'asc');
    expect(filteredBeers.length).toBe(2);
    expect(filteredBeers[0].name).toBe('Amber');
    expect(filteredBeers[1].name).toBe('Buzz');
  });

  it('should filter beers by style and brand', () => {
    const filteredBeers = filterBeers(
      MOCK_BEERS,
      10,
      10,
      'Stout',
      'BrewDog',
      'asc'
    );
    expect(filteredBeers.length).toBe(1);
    expect(filteredBeers[0].name).toBe('Storm');
  });

  it('should return all beers if no filters are applied and sorted by name', () => {
    const filteredBeers = filterBeers(MOCK_BEERS, 10, 10, '', '', 'asc');
    expect(filteredBeers.length).toBe(MOCK_BEERS.length);
    expect(filteredBeers[0].name).toBe('Amber');
    expect(filteredBeers[1].name).toBe('Buzz');
    expect(filteredBeers[2].name).toBe('Storm');
  });
});
