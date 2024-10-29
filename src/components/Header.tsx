import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import LogoImage from '../images/logo.jpg';
import { Link } from 'react-router-dom';
import { useStore } from '../store/store';
import { useShallow } from 'zustand/react/shallow';

const Header = () => {
  const { total, reset } = useStore(
    useShallow((state) => ({
      total: state.total,
      reset: state.reset,
    }))
  );

  return (
    <div>
      <header className="fixed top-0 w-full flex justify-between items-center py-4 px-8 z-20">
        <div className="text-white text-lg font-bold">
          <Link to="/">
            <img src={LogoImage} alt="LOGO" width={70} height={70} />
          </Link>
        </div>
        <nav>
          <a
            href="/management"
            className="text-white text-lg font-semibold hover:text-gray-300 transition-colors"
          >
            <Link to="management">Management Page</Link>
          </a>
        </nav>
        <div onClick={() => reset()} className="relative cursor-pointer">
          <FiShoppingCart className="text-white text-2xl " />
          {total > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {total}
            </span>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
