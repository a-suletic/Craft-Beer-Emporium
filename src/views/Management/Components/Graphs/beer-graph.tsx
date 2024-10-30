import React from 'react';
import RatingChart from './rating-graph';
import SalesGrowth from './sales-graph';

const BeerGraphs: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <SalesGrowth />
      <RatingChart />
    </div>
  );
};

export default BeerGraphs;
