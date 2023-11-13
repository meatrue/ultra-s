'use client';

import React from 'react';

import { PageHeader } from '@/components/page-header';
import { PageSection } from '@/components/page-section';
import { PromoSection } from '@/components/promo-section/view';
import { HeaderTheme } from '@/components/page-header/types';
import { HeaderContext } from './context/header-context';
import { useHeaderTheme } from './hooks';

export default function Home() { 
  const headerThemesBySection: HeaderTheme[] = ['main', 'dark', 'light'];
  const sectionRefs: React.RefObject<HTMLDivElement>[] = [
    React.useRef<HTMLDivElement>(null),
    React.useRef<HTMLDivElement>(null),
    React.useRef<HTMLDivElement>(null),
  ];

  const { activeTheme } = useHeaderTheme({
    sectionRefs,
    themesBySection: headerThemesBySection
  });

  return (
    <div>
      <HeaderContext.Provider value={{ theme: activeTheme }}>
        <PageHeader className="
          fixed z-[100] bottom-[var(--padding-desktop)]
          right-[var(--padding-desktop)] left-[var(--padding-desktop)]
        "/>
      </HeaderContext.Provider>

      <main>
        <div id="1" ref={sectionRefs[0]} className='relative bottom-[-66px] h-[1px]' />
        <PromoSection />
        <div id="2" ref={sectionRefs[1]} className='relative bottom-[-66px] h-[1px]' />
        <PageSection theme="light" />
        <div id="3" ref={sectionRefs[2]} className='relative bottom-[-66px] h-[1px]' />
        <PageSection theme="dark" /> 
      </main>
    </div>
  );
}
