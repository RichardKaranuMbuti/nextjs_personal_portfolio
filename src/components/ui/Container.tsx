import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

const Container: React.FC<ContainerProps> = ({ 
  children, 
  className = '',
  as: Component = 'div' 
}) => {
  return (
    <Component 
      className={`max-w-[var(--container-max-width)] mx-auto px-4 md:px-6 lg:px-8 ${className}`}
    >
      {children}
    </Component>
  );
};

export default Container;