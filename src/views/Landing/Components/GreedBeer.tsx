import React, { useEffect } from 'react';
import { useStore } from '../../../store/store';
import { useShallow } from 'zustand/react/shallow';
import BeerCard from '../../../components/Card/BeerCard';

function GreedBeer() {
  const { fetchBeers, beers } = useStore(
    useShallow((state) => ({
      fetchBeers: state.fetchBeers,
      beers: state.displayBeers,
    }))
  );

  useEffect(() => {
    const getBeers = async () => {
      await fetchBeers();
    };
    getBeers();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-28 p-12">
      {beers.map((beer) => (
        <BeerCard beer={beer} />
      ))}
    </div>
  );
}

export default GreedBeer;
