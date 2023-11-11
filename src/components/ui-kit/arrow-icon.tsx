import React from 'react';

interface ArrowIconProps {
  className?: string;
}

export const ArrowIcon: React.FC<ArrowIconProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      className={className}
    >
      <g clipPath="url(#clip0_392_17)">
        <path d="M0 2H12V14" stroke="currentColor" strokeWidth="2" strokeLinejoin="bevel"/>
        <path d="M0 14L12 2" stroke="currentColor" strokeWidth="2" strokeLinejoin="bevel"/>
      </g>
      <defs>
        <clipPath id="clip0_392_17">
          <rect width="14" height="14" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
};
