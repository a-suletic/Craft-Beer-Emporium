import React from 'react';
import { FiHome, FiSettings, FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useStore } from '../../store/store';
import { useShallow } from 'zustand/react/shallow';
import { MANAGEMENT_PAGE } from '../../utils/constants';

function Navigation() {
  const { total, reset } = useStore(
    useShallow((state) => ({
      total: state.total,
      reset: state.reset,
    }))
  );

  return (
    <div className="flex items-center space-x-4 mr-2">
      <Link to="/">
        <FiHome
          size={24}
          className="hover:text-orange-400 transition duration-200"
        />
      </Link>
      <Link to={MANAGEMENT_PAGE}>
        <FiSettings
          size={24}
          className="hover:text-orange-400 transition duration-200"
        />
      </Link>
      <div onClick={() => reset()}>
        <FiShoppingCart
          size={24}
          className="hover:text-orange-400 transition duration-200 cursor-pointer"
        />
        {total > 0 && (
          <span className="absolute top-2 right-7 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            {total}
          </span>
        )}
      </div>
    </div>
  );
}

export default Navigation;
