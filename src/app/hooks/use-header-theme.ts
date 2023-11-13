import React from 'react';

import { HeaderTheme } from '@/components/page-header/types';

type UseHeaderThemeParams = {
  sectionRefs: React.RefObject<HTMLDivElement>[],
  themesBySection: HeaderTheme[]
};

type UseHeaderThemeResult = {
  activeTheme: HeaderTheme;
};

type UseHeaderTheme = (params: UseHeaderThemeParams) => UseHeaderThemeResult;

export const useHeaderTheme: UseHeaderTheme = ({ sectionRefs, themesBySection }) => {
  const [activeTheme, setActiveTheme] = React.useState<HeaderTheme>(themesBySection[0]);  
  const observer = React.useRef<IntersectionObserver | null>(null);

  React.useEffect(() => {
    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = parseInt(entry.target.id, 10);
          setActiveTheme(themesBySection[sectionId - 1]);
        } 
      });
    };

    observer.current = new IntersectionObserver(callback);

    sectionRefs.forEach((ref) => {
      ref.current && observer?.current?.observe(ref.current);
    });

    return () => observer?.current?.disconnect();
  }, []);

  return { activeTheme };
};
