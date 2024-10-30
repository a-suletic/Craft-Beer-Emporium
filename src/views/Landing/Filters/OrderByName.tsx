import React from 'react';
import { useStore } from '../../../store/store';
import { useShallow } from 'zustand/react/shallow';
import { ORDER_BY } from '../../../utils/constants';

function OrderByName() {
  const { sortOrder, currentOrder } = useStore(
    useShallow((state) => ({
      sortOrder: state.sortOrder,
      currentOrder: state.filterOrder,
    }))
  );

  const handleOrderBy = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let orderBy = 'asc';
    if (e.target.value === 'Z to A') {
      orderBy = 'desc';
    }
    sortOrder(orderBy);
  };

  return (
    <select
      value={currentOrder === 'asc' ? 'A to Z' : 'Z to A'}
      onChange={handleOrderBy}
      className="p-2 rounded-full bg-white bg-opacity-50 text-gray-700 w-40 z-10"
    >
      <option value="">Order By</option>
      {ORDER_BY.map((order) => (
        <option key={order} value={order}>
          {order}
        </option>
      ))}
    </select>
  );
}

export default OrderByName;
