import React from 'react';
import { useStore } from '../../../../store/store';
import { useShallow } from 'zustand/react/shallow';
import { Link } from 'react-router-dom';
import LogoImage from '../../../../images/logo.png';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

function SidebarHeader() {
  const { isCollapsed, setIsCollapsed } = useStore(
    useShallow((state) => ({
      isCollapsed: state.isCollapsed,
      setIsCollapsed: state.setIsCollapsed,
    }))
  );

  const colapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="flex items-center justify-between h-20 bg-gray-700 border-b border-gray-700 p-4">
      {!isCollapsed && (
        <Link to="/" className="text-2xl font-bold ml-2">
          <img src={LogoImage} alt="LOGO" width={50} height={50} />
        </Link>
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
  );
}

export default SidebarHeader;
