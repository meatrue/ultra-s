'use client';

import React, { ButtonHTMLAttributes } from 'react';
import Link from 'next/link';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import clsx from 'clsx';

import { useHeaderContext } from '@/app/context/header-context';
import { Navigation } from '@/components/navigation';
import { BurgerIcon, LogoIcon } from '@/components/ui-kit';
import { navLinks } from './data';
import burgerAnimationData from './burger.json';
import { HeaderTheme } from './types';
import { useHeader } from './hooks/use-header';

const PhonesList: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ul className="
      group flex flex-col justify-center items-end ml-auto
      text-[18px] leading-[1] font-bold
    ">
      {children}
    </ul>
  );
};

interface RequestButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  className?: string;
  theme: HeaderTheme;
}

const RequestButton: React.FC<RequestButton> = ({ children, className, theme }) => {
  return (
    <button className={clsx(
      'px-[2.38em] text-[18px] leading-[1.2] font-bold border-[2px] transition-colors duration-200',
      {'text-primary-dark border-primary-dark': theme === 'menu-opened'},
      {'hover:text-gray hover:bg-primary-dark hover:border-primary-dark': theme === 'menu-opened'},
      {'text-primary-light border-primary-light': theme === 'main'},
      {'hover:text-primary-dark hover:bg-primary-light': theme === 'main'},
      {'text-gray border-gray hover:text-primary-dark hover:bg-gray': theme === 'light'},
      {'text-primary-dark border-primary-dark': theme === 'dark'},
      {'hover:text-primary-light hover:bg-primary-dark': theme === 'dark'},
      className
    )}>
      {children}
    </button>
  );
};

interface MenuButtonProps {
  onClick: () => void;
  isOpen: boolean;
  children: React.ReactNode;
}

const MenuButton: React.FC<MenuButtonProps> = ({ onClick, isOpen, children }) => {
  return (
    <button
      className="relative w-[75px] h-[27px] link-hover-opacity"
      onClick={onClick}
    >
      <BurgerIcon className={clsx(
        'absolute bottom-0 left-0 w-full h-auto text-gray transition-opacity',
        {'opacity-0': isOpen},
        {'opacity-100 delay-300': !isOpen},
      )} />
      {children}
    </button>
  );
};

interface HeaderContainerProps {
  children: React.ReactNode;
  theme: HeaderTheme;
}

const HeaderPanelContainer: React.FC<HeaderContainerProps> = ({ children, theme }) => {
  return (
    <div className={clsx(
      'grow flex items-center gap-[5vw] pr-[6.7vw] pl-[24px] border-[2px] border-r-0 transition-colors duration',
      {'text-primary-dark border-primary-dark': theme === 'menu-opened'},
      {'text-primary-light border-primary-light': theme === 'main'},
      {'text-gray border-gray': theme === 'light'},
      {'text-primary-dark border-primary-dark': theme === 'dark'},
    )}>
      {children}
    </div>
  );
};

const HeaderContainer: React.FC<HeaderContainerProps> = ({ children, theme }) => {
  return (
    <div className={clsx(
      'flex h-page-header transition-colors duration-200',
      {'bg-transparent': theme === 'light'},
      {'bg-gray': theme === 'menu-opened'},
      {'bg-transparent': theme === 'dark'}
    )}>
      {children}
    </div>
  );
};

interface PageHeaderProps {
  className?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ className }) => {
  const { theme: sectionTheme } = useHeaderContext();
  const burgerRef = React.useRef<LottieRefCurrentProps>(null);
  const [isMenuOpen, setMenuOpen] = React.useState<boolean>(false);

  const { headerTheme } = useHeader({
    sectionTheme,
    burgerRef,
    isMenuOpen
  });

  return (
    <>
      <header className={className}>
        <HeaderContainer theme={headerTheme}>
          <HeaderPanelContainer theme={headerTheme}>
            <MenuButton
              isOpen={isMenuOpen}
              onClick={() => {
                setMenuOpen((isOpen) => !isOpen);
              }}
            >
              <Lottie
                lottieRef={burgerRef}
                initialSegment={[6, 38]}
                animationData={burgerAnimationData}
                autoPlay={false}
                loop={false}
                className='absolute bottom-0 left-0'
              />
            </MenuButton>
            
            <Link className="link-hover-opacity" href="/">
              <LogoIcon />
            </Link>

            <PhonesList>
              <li>
                <Link className="link-hover-opacity" href="tel:+73432195195">
                +7 3432-195-195
                </Link>
              </li>
              <li className="hidden group-hover:block mt-[0.9em]">
                <Link className="link-hover-opacity" href="tel:+73432693898">
                +7 3432-693-898
                </Link>
              </li>
            </PhonesList>
          </HeaderPanelContainer>

          <RequestButton theme={headerTheme}>Оставить заявку</RequestButton>
        </HeaderContainer>
      </header>

      <Navigation links={navLinks} isOpen={isMenuOpen} />
    </>      
  );
};
