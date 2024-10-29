import { BeerType } from '../types/beer_type';

export const filterByAbvandOrice = (
  beers: BeerType[],
  maxAbv: number,
  maxPrice: number,
  style: string,
  brand: string
) => {
  const result = beers.filter((beer) => {
    return (
      parseInt(beer.price) < maxPrice &&
      parseInt(beer.abv) < maxAbv &&
      (style !== '' ? beer.style === style : beer) &&
      (brand !== '' ? beer.brand === brand : beer)
    );
  });
  return result;
};
