import { useMemo } from 'react';
import { useStore } from '../../../store/store';

const useRatingData = () => {
  const beers = useStore((state) => state.beers);

  const top10BeerRatings = useMemo(() => {
    // Sort beers by rating in descending order and take the top 10
    const sortedBeers = [...beers]
      .sort((a, b) => Number(b.rating) - Number(a.rating))
      .slice(0, 10);

    // Format data for the chart
    return [
      ['Beer', 'Rating'],
      ...sortedBeers.map((beer) => [beer.name, Number(beer.rating)]),
    ];
  }, [beers]);

  return { top10BeerRatings };
};

export default useRatingData;
