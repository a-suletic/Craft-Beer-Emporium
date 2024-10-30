import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useStore } from '../../../../store/store';
import { useShallow } from 'zustand/react/shallow';

function SidebarFooter() {
  const { isCollapsed } = useStore(
    useShallow((state) => ({
      isCollapsed: state.isCollapsed,
    }))
  );
  return (
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
  );
}

export default SidebarFooter;
