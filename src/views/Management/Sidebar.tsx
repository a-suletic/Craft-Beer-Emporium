import React from 'react';
import { useState } from 'react';
import {
  AiOutlineClose,
  AiOutlineDashboard,
  AiOutlineMenu,
  AiOutlineSetting,
  AiOutlineUser,
  AiFillHome,
} from 'react-icons/ai';
import { Link } from 'react-router-dom';

const navElements = [
  {
    title: 'Dashboard',
    href: '/management',
    icon: <AiOutlineDashboard className="w-6 h-6 mr-2" />,
  },
  {
    title: 'Profile',
    href: '/',
    icon: <AiOutlineUser className="w-6 h-6 mr-2" />,
  },
  {
    title: 'Settings',
    href: '/',
    icon: <AiOutlineSetting className="w-6 h-6 mr-2" />,
  },
];

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const colapse = () => {
    setIsCollapsed(!isCollapsed);
    console.log('click');
    console.log(isCollapsed);
  };

  return (
    <div
      className={`h-screen bg-orange-400 text-gray-100 flex flex-col ${isCollapsed ? 'w-20' : 'w-64'} transition-all duration-300`}
    >
      <div className="flex items-center justify-between h-20 bg-gray-800 border-b border-gray-700 p-4">
        {!isCollapsed && (
          <h1 className="text-3xl font-bold text-white">
            <Link to="/">Craft Beer</Link>
          </h1>
        )}
        <button
          onClick={colapse}
          className="text-gray-100 focus:outline-none cursor-pointer z-40"
        >
          {isCollapsed ? (
            <AiOutlineMenu size={24} />
          ) : (
            <AiOutlineClose size={24} />
          )}
        </button>
      </div>
      <div className="flex-1 flex flex-col justify-between overflow-hidden">
        <nav className="mt-10">
          {navElements.map((navElement) => (
            <Link to={navElement.href} key={navElement.title}>
              <div
                className={`flex items-center py-2.5 px-4 rounded transition duration-300 hover:bg-gray-700 hover:text-blue-400 ${isCollapsed ? 'justify-center' : ''}`}
              >
                {navElement.icon}
                <span
                  className={`ml-2 transition-opacity duration-300 delay-200 ${isCollapsed ? 'opacity-0' : 'opacity-100'}`}
                >
                  {!isCollapsed && navElement.title}
                </span>
              </div>
            </Link>
          ))}
        </nav>
        <div className="mb-10 transition-opacity duration-300 delay-300">
          <Link
            to="/"
            className="flex items-center py-2.5 px-4 w-full text-left rounder transition duration-300 hover:bg-gray-700 hover:text-white"
          >
            <AiFillHome className="w-6 h-6 mr-2" />
            <span
              className={`transition-opacity duration-300 delay-200 ${isCollapsed ? 'opacity-0' : 'opacity-100'}`}
            >
              {!isCollapsed && 'Main App'}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
