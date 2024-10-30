import { sortBeersByName, filterBeers } from './store-service';
import { MOCK_BEERS } from '../utils/test-utils';

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
