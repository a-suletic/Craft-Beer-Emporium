import React from 'react';
import {
  AiOutlineDashboard,
  AiOutlineSetting,
  AiOutlineUser,
} from 'react-icons/ai';

interface NavElement {
  title: string;
  href: string;
  icon: JSX.Element;
}

export const NAV_ELEMENTS: NavElement[] = [
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
