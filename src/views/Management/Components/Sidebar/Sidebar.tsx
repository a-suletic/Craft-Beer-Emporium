import React from 'react';
import { useShallow } from 'zustand/react/shallow';
import { useStore } from '../../../../store/store';
import SidebarHeader from './SidebarHeader';
import SidebarLinks from './SidebarLinks';
import SidebarFooter from './SidebarFooter';

const Sidebar = () => {
  const { isCollapsed } = useStore(
    useShallow((state) => ({
      isCollapsed: state.isCollapsed,
    }))
  );

  return (
    <div
      className={`h-screen bg-orange-400 text-gray-100 flex flex-col ${isCollapsed ? 'w-20' : 'w-64'} transition-all duration-300`}
    >
      <SidebarHeader />
      <div className="flex-1 flex flex-col justify-between overflow-hidden">
        <SidebarLinks />
        <SidebarFooter />
      </div>
    </div>
  );
};

export default Sidebar;
