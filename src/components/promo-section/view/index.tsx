import React from 'react';

import { PageSection } from '@/components/page-section';
import { PromoSlider } from './slider';

export const PromoContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div
      className="
        absolute z-10 left-[var(--padding-desktop)] right-[var(--padding-desktop)]
        flex py-[40px] leading-[1] font-bold border-[2px] border-primary-light
      "
      style={{bottom: 'calc(var(--padding-desktop) + var(--page-header-height) - 1px)'}}
    >
      {children}
    </div>
  );
};

export const PromoSection: React.FC = () => {
  return (
    <PageSection
      theme="dark"
      className="relative"
    >
      <PromoContainer>
        <h1 className="w-[42%] pl-[26px] text-2xl tracking-[-0.02em]">
          Строительство<br />частных<br />домов
        </h1>
        <div className="w-[58%] pt-[1.2vw] pl-[16.5%] pr-[26px] text-[2.5vw]">
          Дома,<br />в которых<br />уютно
        </div>
      </PromoContainer>

      <PromoSlider />
    </PageSection>
  );
};