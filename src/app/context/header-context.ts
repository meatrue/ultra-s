import React from 'react';

import { HeaderTheme } from '@/components/page-header/types';

type HeaderContextValue = {
  theme: HeaderTheme,
};

export const HeaderContext = React.createContext<HeaderContextValue>({theme: 'main'});

export const useHeaderContext = () => {
  const context = React.useContext(HeaderContext);
  if (!context) {
    throw new Error('Контекст не найден');
  }
  return context;
};
