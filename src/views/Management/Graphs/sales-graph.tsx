import React from 'react';
import { Chart } from 'react-google-charts';
import useTop10BeerSalesData from '../hooks/useBeerDataSales';

const SalesGrowth = () => {
  const { top10BeerSalesData } = useTop10BeerSalesData();

  return (
    <Chart
      chartType="LineChart"
      data={top10BeerSalesData}
      options={{
        title: 'Monthly Sales Growth for Top 10 Beers by Rating',
        hAxis: { title: 'Week' },
        vAxis: { title: 'Sales' },
        legend: { position: 'right' },
        colors: [
          '#ff7043',
          '#29b6f6',
          '#66bb6a',
          '#ffa726',
          '#7e57c2',
          '#ec407a',
          '#26c6da',
          '#d4e157',
          '#ab47bc',
          '#8d6e63',
        ],

        curveType: 'function',
        pointSize: 5,
      }}
      width="100%"
      height="400px"
    />
  );
};

export default SalesGrowth;
