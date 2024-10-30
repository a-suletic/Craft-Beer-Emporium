import React from 'react';
import { useStore } from '../../../store/store';
import { useShallow } from 'zustand/react/shallow';

function FilterByAbv() {
  const { filterByAbv, currentAbv } = useStore(
    useShallow((state) => ({
      filterByAbv: state.filterByAbv,
      currentAbv: state.filterAbv,
    }))
  );

  const handleAbvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    filterByAbv(Number(e.target.value));
  };

  return (
    <div className="flex items-center z-10">
      <label htmlFor="price" className="text-white mr-2">
        Max ABV%: {currentAbv}
      </label>
      <input
        id="price"
        type="range"
        min="3"
        max="13"
        step="0.5"
        value={currentAbv}
        onChange={handleAbvChange}
        className="w-40"
      />
    </div>
  );
}

export default FilterByAbv;
