import React from 'react';
import { BEER_STYLE } from '../../../utils/constants';
import { useStore } from '../../../store/store';
import { useShallow } from 'zustand/react/shallow';

function FilterByStyle() {
  const { filterByStyle, currentStyle } = useStore(
    useShallow((state) => ({
      filterByStyle: state.filterByStyle,
      currentStyle: state.filterStyle,
    }))
  );

  const handleStyleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value);
    filterByStyle(event.target.value);
  };

  return (
    <select
      value={currentStyle}
      onChange={handleStyleChange}
      className="p-2 rounded-full bg-white bg-opacity-50 text-gray-700 w-40 z-10"
    >
      <option value="">All Styles</option>
      {BEER_STYLE.map((style) => (
        <option key={style} value={style}>
          {style}
        </option>
      ))}
    </select>
  );
}

export default FilterByStyle;
