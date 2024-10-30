import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  className = '',
}) => {
  const baseStyles = 'font-semibold rounded-xl transition duration-200';

  const variantStyles = {
    primary: 'bg-orange-400 text-white hover:bg-orange-500',
    secondary: 'bg-gray-300 text-gray-700 hover:bg-gray-400',
    danger: 'bg-red-500 text-white hover:bg-red-600',
  };

  const sizeStyles = {
    small: 'py-2 px-4 text-sm',
    medium: 'py-3 px-8 lg:px-10 text-base',
    large: 'py-4 px-10 lg:px-16 text-lg',
  };

  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : '';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
