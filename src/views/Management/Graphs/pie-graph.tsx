import React from 'react';
import { Chart } from 'react-google-charts';
import { top3BeersData } from './graph-data';

export function PieGraph() {
  return (
    <Chart
      chartType="PieChart"
      data={top3BeersData}
      options={{
        title: 'Top 3 Best-Selling Beers in October',
        is3D: true,
      }}
      width="100%"
      height="400px"
    />
  );
}
