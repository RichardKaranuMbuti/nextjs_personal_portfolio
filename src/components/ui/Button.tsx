import React, { ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isFullWidth?: boolean;
  children: React.ReactNode;
  href?: string; // Add this line
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  isFullWidth = false,
  className = '',
  children,
  href,
  ...props
}) => {
  const variantClasses = {
    primary: 'bg-primary-500 text-white hover:bg-primary-600 shadow-button',
    secondary: 'bg-secondary-500 text-white hover:bg-secondary-600 shadow-button',
    outline: 'border-2 border-primary-500 text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/10',
    ghost: 'text-primary-600 hover:bg-primary-50 dark:text-primary-400 dark:hover:bg-primary-900/10',
  };

  const sizeClasses = {
    sm: 'text-sm px-3 py-1',
    md: 'px-4 py-2',
    lg: 'text-lg px-6 py-3',
  };

  return (
    <button
      className={`
        inline-flex items-center justify-center rounded-button font-medium transition-all duration-300
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${isFullWidth ? 'w-full' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;