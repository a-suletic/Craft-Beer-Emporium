import React from 'react';
import { LineGraphEarning } from './line-graph';
import { ColumnGraph } from './column-graph';
import { PieGraph } from './pie-graph';
import { AreaGraph } from './area-graph';

const BeerGraphs: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <LineGraphEarning />
      <ColumnGraph />
      <PieGraph />
      <AreaGraph />
    </div>
  );
};

export default BeerGraphs;
