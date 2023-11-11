import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';

interface NavLinkProps {
  href: string;
  children: string;
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, className }) => {
  return (
    <Link
      href={href}
      className={clsx(
        'flex justify-center items-center p-[0.625em]',
        'text-2xl leading-[1] text-primary-dark font-bold tracking-[-0.01em]',
        'border-[1px] border-solid border-primary-dark transition-colors',
        className
      )}
    >
      {children}
    </Link>
  );
};

type NavigationLink = {
  title: string;
  link: string;
  className: string;
};

interface NavigationProps {
  isOpen: boolean;
  links: NavigationLink[];
  className?: string;
}

export const Navigation: React.FC<NavigationProps> = ({ isOpen, links, className }) => {
  return (
    <div
      className={clsx(
        'fixed bottom-0 left-0 right-0 z-[90] overflow-hidden',
        'flex flex-col justify-end px-[var(--padding-desktop)] transition-[top] duration-[600ms]',
        isOpen ? 'top-0' : 'top-[100%]'
      )}
      style={{
        paddingBottom: 'calc(100px + var(--padding-desktop) - 2px)'
      }}
    >
      <div>
        <nav className={clsx(
          'flex flex-wrap gap-0 bg-gray border-[1px] border-primary-dark',
          className
        )}>
          {links.map(({ title, link, className }, index) => (
            <NavLink
              key={index}
              href={link}
              className={clsx('grow', className)}
            >
              {title}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
};
