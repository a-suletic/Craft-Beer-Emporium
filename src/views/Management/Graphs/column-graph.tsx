import React from 'react';
import { Chart } from 'react-google-charts';
import { beerSalesData } from './graph-data';

export function ColumnGraph() {
  return (
    <Chart
      chartType="ColumnChart"
      data={[
        ['Beer', 'March Sales'],
        ...beerSalesData.slice(1).map((row) => [row[0], row[3] as number]),
      ]}
      options={{
        title: 'Beer Sales in October',
        hAxis: { title: 'Beer' },
        vAxis: { title: 'Sales' },
        legend: { position: 'none' },
      }}
      width="100%"
      height="400px"
    />
  );
}
