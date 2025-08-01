import { ReactNode } from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  centered?: boolean;
  className?: string;
}

export const SectionHeader = ({ 
  title, 
  subtitle, 
  icon, 
  centered = false, 
  className = "" 
}: SectionHeaderProps) => {
  return (
    <div className={`${centered ? 'text-center' : ''} ${className}`}>
      {icon && (
        <div className={`mb-4 ${centered ? 'flex justify-center' : ''}`}>
          <div className="w-12 h-12 bg-trust-pink rounded-full flex items-center justify-center text-trust-maroon">
            {icon}
          </div>
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-trust-maroon mb-2">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};