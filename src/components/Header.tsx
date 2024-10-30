import React from 'react';
import { FiHome, FiSettings, FiShoppingCart } from 'react-icons/fi';
import LogoImage from '../images/logo.png';
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
    <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-[#261917] via-[#56392a] to-[#4b2e2b] text-white p-4 z-50 shadow-lg">
      <div className="flex items-center justify-between px-2">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold ml-2">
          <img src={LogoImage} alt="LOGO" width={50} height={50} />
        </Link>

        {/* Icons */}
        <div className="flex items-center space-x-4 mr-2">
          <Link to="/">
            <FiHome
              size={24}
              className="hover:text-orange-400 transition duration-200"
            />
          </Link>
          <Link to="/management">
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
      </div>
    </header>
  );
};

export default Header;
