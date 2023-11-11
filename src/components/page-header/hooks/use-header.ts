import React from 'react';
import { LottieRefCurrentProps } from 'lottie-react';

import { HeaderTheme } from '../types';

type UseHeaderParams = {
  sectionTheme: HeaderTheme,
  isMenuOpen: boolean,
  burgerRef: React.RefObject<LottieRefCurrentProps>,
}

type UseHeader = (params: UseHeaderParams) => { headerTheme: HeaderTheme };

export const useHeader: UseHeader = ({
  sectionTheme,
  burgerRef,
  isMenuOpen,
}) => {
  const [headerTheme, setHeaderTheme] = React.useState<HeaderTheme>(sectionTheme);

  React.useEffect(() => {
    if (isMenuOpen) {
      burgerRef.current?.setDirection(1);
      burgerRef.current?.play();
      setHeaderTheme('menu-opened');
      return;
    }

    burgerRef.current?.setDirection(-1);
    burgerRef.current?.play();
    const timerId = setTimeout(() => {
      setHeaderTheme(sectionTheme);
    }, 300);

    return () => clearTimeout(timerId);
  }, [isMenuOpen]);

  React.useEffect(() => {
    if (isMenuOpen) return;

    setHeaderTheme(sectionTheme);
  }, [sectionTheme]);

  return {headerTheme};
};