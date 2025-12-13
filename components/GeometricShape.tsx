import React from 'react';
import { ShapeType } from '../types';

interface GeometricShapeProps {
  shape: ShapeType;
  className?: string;
  isFilled?: boolean;
}

export const GeometricShape: React.FC<GeometricShapeProps> = ({ shape, className = '', isFilled = false }) => {
  const baseClasses = `transition-all duration-300 ${className}`;
  const fillClass = isFilled ? 'bg-ttia-black text-white' : 'border border-ttia-black text-ttia-black hover:bg-ttia-black hover:text-white';
  
  // Base sizes reduced (e.g., w-6/h-6 is 24px, w-8/h-8 is 32px)
  // This serves as the base "1x" scale. App.tsx scales these further.
  switch (shape) {
    case 'square':
      return <div className={`w-6 h-6 ${fillClass} ${baseClasses}`} />;
    
    case 'circle':
      return <div className={`w-6 h-6 rounded-full ${fillClass} ${baseClasses}`} />;
    
    case 'rect-h':
      return <div className={`w-10 h-5 ${fillClass} ${baseClasses}`} />;

    case 'rect-v':
      return <div className={`w-5 h-10 ${fillClass} ${baseClasses}`} />;
      
    case 'triangle':
      return (
        <svg viewBox="0 0 100 100" className={`w-8 h-8 ${baseClasses} overflow-visible`}>
          <path 
            d="M50 10 L90 90 L10 90 Z" 
            className={isFilled ? 'fill-ttia-black' : 'fill-none stroke-ttia-black stroke-1 hover:fill-ttia-black transition-all duration-300'}
          />
        </svg>
      );

    case 'hex':
      return (
         <svg viewBox="0 0 100 100" className={`w-8 h-8 ${baseClasses} overflow-visible`}>
           <path 
             d="M25 10 L75 10 L95 50 L75 90 L25 90 L5 50 Z" 
             className={isFilled ? 'fill-ttia-black' : 'fill-none stroke-ttia-black stroke-1 hover:fill-ttia-black transition-all duration-300'}
           />
         </svg>
      );

    case 'arch':
      return (
         <div className={`w-6 h-6 rounded-t-full ${fillClass} ${baseClasses}`} />
      );

    case 'cross':
      return (
        <div className={`relative w-4 h-4 flex items-center justify-center ${baseClasses}`}>
           <div className={`absolute w-full h-[1.5px] ${isFilled ? 'bg-ttia-black' : 'bg-ttia-black'}`}></div>
           <div className={`absolute h-full w-[1.5px] ${isFilled ? 'bg-ttia-black' : 'bg-ttia-black'}`}></div>
        </div>
      );

    default:
      return <div className={`w-4 h-4 ${fillClass} ${baseClasses}`} />;
  }
};
