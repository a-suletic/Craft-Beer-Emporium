import { useMemo } from 'react';
import { useStore } from '../../../store/store';

const useSalesData = () => {
  const beers = useStore((state) => state.beers);

  const top10BeerSalesData = useMemo(() => {
    // Sort by rating and select the top 10
    const top10Beers = [...beers]
      .sort((a, b) => Number(b.rating) - Number(a.rating))
      .slice(0, 10);

    // Generate arbitrary sales data for each beer over 4 weeks
    return [
      ['Beer', 'Week 1', 'Week 2', 'Week 3', 'Week 4'],
      ...top10Beers.map((beer) => [
        beer.name,
        Math.floor(Math.random() * 100) + 20, // Sales for Week 1
        Math.floor(Math.random() * 100) + 50, // Sales for Week 2
        Math.floor(Math.random() * 100) + 70, // Sales for Week 3
        Math.floor(Math.random() * 100) + 90, // Sales for Week 4
      ]),
    ];
  }, [beers]);

  return { top10BeerSalesData };
};

export default useSalesData;
