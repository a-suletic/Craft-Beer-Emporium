import React from 'react';
import LogoImage from '../images/logo.png';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-[#261917] via-[#56392a] to-[#4b2e2b] text-white p-4 z-50 shadow-lg">
      <div className="flex items-center justify-between px-2">
        <Link to="/" className="text-2xl font-bold ml-2">
          <img src={LogoImage} alt="LOGO" width={50} height={50} />
        </Link>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
