import React from 'react';
import { useStore } from '../../../store/store';
import { useShallow } from 'zustand/react/shallow';

function FilterByPrice() {
  const { filterByPrice, currentPrice } = useStore(
    useShallow((state) => ({
      filterByPrice: state.filterByPrice,
      currentPrice: state.filterPrice,
    }))
  );

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    filterByPrice(e.target.value);
  };

  return (
    <div className="flex items-center z-10">
      <label htmlFor="price" className="text-white mr-2">
        Max Price: ${currentPrice}
      </label>
      <input
        id="price"
        type="range"
        min="10"
        max="100"
        step="1"
        value={currentPrice}
        onChange={handlePriceChange}
        className="w-40"
      />
    </div>
  );
}

export default FilterByPrice;
