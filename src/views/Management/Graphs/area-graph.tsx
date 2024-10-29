import React from 'react';
import { Chart } from 'react-google-charts';
import { beerSalesData } from './graph-data';

export function AreaGraph() {
  return (
    <Chart
      chartType="AreaChart"
      data={beerSalesData}
      options={{
        title: 'Sales Growth by Beer Over 3 Months',
        hAxis: { title: 'Month' },
        vAxis: { title: 'Sales' },
        isStacked: true,
        legend: { position: 'bottom' },
      }}
      width="100%"
      height="400px"
    />
  );
}
