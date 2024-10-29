import React from 'react';
import { Chart } from 'react-google-charts';
import { beerSalesData, earningsTop3Data } from './graph-data';

export function LineGraph() {
  return (
    <Chart
      chartType="LineChart"
      data={beerSalesData}
      options={{
        title: 'Beer Sales Over the Last 3 Months',
        hAxis: { title: 'Month' },
        vAxis: { title: 'Sales' },
        curveType: 'function',
        legend: { position: 'bottom' },
      }}
      width="100%"
      height="400px"
    />
  );
}

export function LineGraphEarning() {
  return (
    <Chart
      chartType="LineChart"
      data={earningsTop3Data}
      options={{
        title: 'Monthly Earnings for Top 3 Beers',
        hAxis: { title: 'Month' },
        vAxis: { title: 'Earnings ($)' },
        legend: { position: 'bottom' },
      }}
      width="100%"
      height="400px"
    />
  );
}
