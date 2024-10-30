import React from 'react';
import { NAV_ELEMENTS } from '../../utils/constants';
import { Link } from 'react-router-dom';
import { useStore } from '../../../../store/store';
import { useShallow } from 'zustand/react/shallow';

function SidebarLinks() {
  const { isCollapsed } = useStore(
    useShallow((state) => ({
      isCollapsed: state.isCollapsed,
    }))
  );

  return (
    <nav className="mt-10">
      {NAV_ELEMENTS.map((navElement) => (
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
  );
}

export default SidebarLinks;
