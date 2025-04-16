// src/components/ui/SectionHeading.tsx
import { FC, ReactNode } from 'react';

interface SectionHeadingProps {
  children: ReactNode;
  className?: string;
}

const SectionHeading: FC<SectionHeadingProps> = ({ children, className = '' }) => {
  return (
    <div className={`mb-12 ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold font-heading text-center">
        {children}
      </h2>
      <div className="flex justify-center mt-4">
        <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></div>
      </div>
    </div>
  );
};

export default SectionHeading;