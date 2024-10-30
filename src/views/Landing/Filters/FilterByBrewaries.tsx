import React from 'react';
import { useStore } from '../../../store/store';
import { useShallow } from 'zustand/react/shallow';
import { BREWARIES } from '../../../utils/constants';

function FilterByBrewaries() {
  const { filterByBrand, currentBrand } = useStore(
    useShallow((state) => ({
      filterByBrand: state.filterByBrand,
      currentBrand: state.filterBrand,
    }))
  );

  const handleBreweriesChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    filterByBrand(event.target.value);
  };

  return (
    <select
      value={currentBrand}
      onChange={handleBreweriesChange}
      className="p-2 rounded-full bg-white bg-opacity-50 text-gray-700 w-40 z-10"
    >
      <option value="">All Breweries</option>
      {BREWARIES.map((brewer) => (
        <option key={brewer} value={brewer}>
          {brewer}
        </option>
      ))}
    </select>
  );
}

export default FilterByBrewaries;
