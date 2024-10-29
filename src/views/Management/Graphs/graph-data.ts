// Number of sold beers in last 3 months (top 10)
export const beerSalesData = [
  ['Beer', 'August', 'September', 'October'],
  ['Buzz', 120, 140, 150],
  ['Trashy Blonde', 110, 130, 170],
  ['Berliner Weisse With Yuzu - B-Sides', 95, 100, 110],
  ['Pilsen Lager', 160, 140, 155],
  ['Avery Brown Dredge', 80, 75, 90],
  ['Electric India', 200, 220, 210],
  ['AB:12', 170, 160, 165],
  ['Fake Lager', 150, 145, 160],
  ['Rabiator', 130, 135, 125],
  ['Storm', 190, 210, 220],
];

// Number of sold beers in last 3 months (top 3)
export const top3BeersData = [
  ['Beer', 'Sales'],
  ['Electric India', 210],
  ['Storm', 220],
  ['Buzz', 150],
];

// Fixed prices for top 3 beers
export const pricesTop3 = {
  'Electric India': 25,
  Storm: 30,
  Buzz: 55,
};

// Calculate earnings for the top 3 beers
export const earningsTop3Data = [
  ['Month', 'Buzz', 'Electric India', 'Storm'],
  ...[1, 2, 3].map((month) => [
    ['August', 'September', 'October'][month - 1],
    Number(beerSalesData[1][month]) * pricesTop3['Buzz'],
    Number(beerSalesData[5][month]) * pricesTop3['Electric India'],
    Number(beerSalesData[9][month]) * pricesTop3['Storm'],
  ]),
];
