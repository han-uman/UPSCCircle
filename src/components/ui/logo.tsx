
import React from 'react';
import { BookOpen, Circle } from 'lucide-react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'full' | 'icon';
  className?: string;
}

const Logo = ({ size = 'md', variant = 'full', className = '' }: LogoProps) => {
  const sizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
  };

  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative">
        <Circle className="text-upsc-purple h-8 w-8" />
        <BookOpen className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-4 w-4" />
      </div>
      {variant === 'full' && (
        <div className={`ml-2 font-bold ${sizeClasses[size]}`}>
          <span className="text-upsc-purple">UPSC</span>
          <span className="text-upsc-purple-light">Circle</span>
        </div>
      )}
    </div>
  );
};

export default Logo;
