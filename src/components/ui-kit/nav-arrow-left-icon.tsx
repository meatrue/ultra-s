import React from 'react';

interface NavArrowLeftIconProps {
  className?: string;
}

export const NavArrowLeft: React.FC<NavArrowLeftIconProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="30"
      viewBox="0 0 17 30"
      fill="none"
      className={className}
    >
      <g clipPath="url(#clip0_1_704)">
        <path d="M15.8295 29.3102L1.68736 15.1681L16.1406 0.714844" stroke="currentColor" strokeWidth="2"/>
      </g>
      <defs>
        <clipPath id="clip0_1_704">
          <rect width="17" height="30" fill="white" transform="matrix(1 -8.74228e-08 -8.74228e-08 -1 0 30)"/>
        </clipPath>
      </defs>
    </svg>
  );
};
