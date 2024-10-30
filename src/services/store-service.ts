import { BeerType } from '../types/beer_type';

const sortBeersByName = (
  beers: BeerType[],
  order: string | undefined
): BeerType[] => {
  return [...beers].sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if (order === 'asc') {
      return nameA.localeCompare(nameB);
    } else {
      return nameB.localeCompare(nameA);
    }
  });
};

export const filterBeers = (
  beers: BeerType[],
  maxAbv: number,
  maxPrice: number,
  style: string,
  brand: string,
  order: string | undefined
) => {
  const result = beers.filter((beer) => {
    return (
      parseInt(beer.price) < maxPrice &&
      parseInt(beer.abv) < maxAbv &&
      (style !== '' ? beer.style === style : beer) &&
      (brand !== '' ? beer.brand === brand : beer)
    );
  });
  const sortedBeers = sortBeersByName(result, order);
  return sortedBeers;
};
