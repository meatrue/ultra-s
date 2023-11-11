import React from 'react';

interface BurgerIconProps {
  className?: string;
}

export const BurgerIcon: React.FC<BurgerIconProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="75"
      height="18"
      viewBox="0 0 75 18"
      fill="none"
      className={className}
    >
      <path d="M0 1H75M0 9H75M0 17H75" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );
};

{/* <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 72 30" width="72" height="30" preserveAspectRatio="xMidYMid meet" style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px); content-visibility: visible;"><defs><clipPath id="__lottie_element_2"><rect width="72" height="30" x="0" y="0"></rect></clipPath></defs><g clip-path="url(#__lottie_element_2)"><g style="display: block;" transform="matrix(1,0,0,1,718.93798828125,-325)" opacity="1"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="rgb(41,55,67)" stroke-opacity="1" stroke-width="2" d=" M-718.875,353.375 C-718.875,353.375 -682.875,353.375 -682.875,353.375 C-682.875,353.375 -647.125,353.375 -647.125,353.375"></path></g></g><g style="display: block;" transform="matrix(1,0,0,1,718.93798828125,-332.875)" opacity="1"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="rgb(41,55,67)" stroke-opacity="1" stroke-width="2" d=" M-718.875,353.375 C-718.875,353.375 -682.875,353.375 -682.875,353.375 C-682.875,353.375 -647.125,353.375 -647.125,353.375"></path></g></g><g style="display: block;" transform="matrix(1,0,0,1,718.93798828125,-340.75)" opacity="1"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="rgb(41,55,67)" stroke-opacity="1" stroke-width="2" d=" M-718.875,353.375 C-718.875,353.375 -682.875,353.375 -682.875,353.375 C-682.875,353.375 -647.125,353.375 -647.125,353.375"></path></g></g></g></svg> */}