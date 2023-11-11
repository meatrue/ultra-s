'use client';

import React from 'react';

import { PageHeader } from '@/components/page-header';
import { PageSection } from '@/components/page-section';
import { PromoSection } from '@/components/promo-section/view';
import { HeaderTheme } from '@/components/page-header/types';
import { HeaderContext } from './context/header-context';

const headerThemesBySection: HeaderTheme[] = ['main', 'dark', 'light'];

export default function Home() { 
  const [activeTheme, setActiveTheme] = React.useState<HeaderTheme>(headerThemesBySection[0]);  
  const sectionRefs = {
    section1: React.useRef<HTMLDivElement>(null),
    section2: React.useRef<HTMLDivElement>(null),
    section3: React.useRef<HTMLDivElement>(null),
  };
  const observer = React.useRef<IntersectionObserver | null>(null);

  React.useEffect(() => {
    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = parseInt(entry.target.id, 10);
          setActiveTheme(headerThemesBySection[sectionId - 1]);
        } 
      });
    };

    observer.current = new IntersectionObserver(callback);

    Object.values(sectionRefs).forEach((ref) => {
      ref.current && observer?.current?.observe(ref.current);
    });

    return () => observer?.current?.disconnect();
  }, []);

  return (
    <div>
      <HeaderContext.Provider value={{ theme: activeTheme }}>
        <PageHeader className="
          fixed z-[100] bottom-[var(--padding-desktop)]
          right-[var(--padding-desktop)] left-[var(--padding-desktop)]
        "/>
      </HeaderContext.Provider>

      <main>
        <div id="1" ref={sectionRefs.section1} className='relative bottom-[-66px] h-[1px]' />
        <PromoSection />
        <div id="2" ref={sectionRefs.section2} className='relative bottom-[-66px] h-[1px]' />
        <PageSection theme="light" />
        <div id="3" ref={sectionRefs.section3} className='relative bottom-[-66px] h-[1px]' />
        <PageSection theme="dark" /> 
      </main>
    </div>
  );
}
