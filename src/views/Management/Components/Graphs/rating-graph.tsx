import React from 'react';
import { Chart } from 'react-google-charts';
import useBeerDataRation from '../../hooks/useBeerDataRating';

function RatingChart() {
  const { top10BeerRatings } = useBeerDataRation();

  return (
    <Chart
      chartType="PieChart"
      data={top10BeerRatings}
      options={{
        title: 'Top 10 Beer Ratings',
        pieHole: 0.4,
        is3D: true,
        legend: { position: 'right' },
        colors: [
          '#f28b30',
          '#ffc107',
          '#8bc34a',
          '#00bcd4',
          '#ff5722',
          '#795548',
          '#9e9e9e',
          '#607d8b',
          '#2196f3',
          '#e91e63',
        ],
      }}
      width="100%"
      height="400px"
    />
  );
}

export default RatingChart;
