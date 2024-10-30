import React from 'react';
import Slider from '../../components/Slider';
import Header from '../../components/Header';
import FilterByStyle from './Filters/FilterByStyle';
import FilterByBrewaries from './Filters/FilterByBrewaries';
import OrderByName from './Filters/OrderByName';
import FilterByPrice from './Filters/FilterByPrice';
import FilterByAbv from './Filters/FilterByAbv';
import GreedBeer from './Components/GreedBeer';

const LandingPage: React.FC = () => {
  return (
    <>
      <Header />
      <div className="relative min-h-screen overflow-hidden p-4 md:p-8 z-10 ">
        {/* Background slider */}
        <Slider />

        {/* Filter section */}
        <div className="relative flex flex-wrap gap-12 items-center px-12 pt-24">
          <FilterByStyle />
          <FilterByBrewaries />
          <OrderByName />
          <FilterByPrice />
          <FilterByAbv />
        </div>

        {/* Beer grid */}
        <GreedBeer />
      </div>
    </>
  );
};

export default LandingPage;
