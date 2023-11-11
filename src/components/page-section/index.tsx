import React from 'react';
import clsx from 'clsx';

type SectionTheme = 'dark' | 'light';

interface PageSectionProps {
  theme: SectionTheme;
  children?: React.ReactNode;
  className?: string;
}

const THEME_CLASS_NAME = {
  dark: 'bg-primary-dark text-primary-light',
  light: 'bg-primary-light text-primary-dark'
};

export const PageSection: React.FC<PageSectionProps> = ({ theme, children, className }) => {
  return (
    <section className={clsx(
      'h-screen',
      THEME_CLASS_NAME[theme],
      className
    )}>
      {children}
    </section>
  );
};
