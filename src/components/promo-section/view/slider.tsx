'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { SwiperOptions } from 'swiper/types';
import { Navigation, Autoplay } from 'swiper/modules';
import clsx from 'clsx';

import { NavArrowLeft } from '@/components/ui-kit';
import { ProjectSlide } from './project-slide';
import { projects } from '../data';

import 'swiper/css';
import 'swiper/css/navigation';

const NavigationContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return ( 
    <div className="
      absolute z-30 top-[43px] right-[var(--padding-desktop)]
      flex gap-[86px] text-secondary-light
    ">
      {children}
    </div>
  );
};

interface SliderNavButtonProps {
  role: 'prev' | 'next';
}

const forwardNavButton = React.forwardRef<HTMLButtonElement, SliderNavButtonProps>;

const SliderNavButton = forwardNavButton(
  ({ role }, ref) => {
    const arrowClassNames = {
      prev: ['', '-ml-[10px] duration-150', '-ml-[10px] duration-300'],
      next: ['', '-mr-[10px] duration-150', '-mr-[10px] duration-300'],
    };

    return (
      <button
        ref={ref}
        className={clsx(
          'group flex',
          { 'flex-row-reverse': role === 'next' }
        )}
      >
        {[...new Array(3)].map((_, index) => (
          <NavArrowLeft
            key={index}
            className={clsx(
              { 'rotate-[180deg]': role === 'next' },
              { 'scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-transform': index > 0 },
              arrowClassNames[role][index],
            )}
          />
        ))}
      </button>
    );
  }
);

export const PromoSlider: React.FC = () => {
  const prevRef = React.useRef<HTMLButtonElement>(null);
  const nextRef = React.useRef<HTMLButtonElement>(null);

  const [prevIndex, setPrevIndex] = React.useState<number | null>(null);
  const [nextIndex, setNextIndex] = React.useState<number | null>(null);

  const swiperParams: SwiperOptions = {
    modules: [Navigation, Autoplay],
    navigation: {
      prevEl: prevRef.current,
      nextEl: nextRef.current,
    },
    autoplay: {
      delay: 5000,
    },
    slidesPerView: 1,
    speed: 1600,
    loop: true,
    allowTouchMove: true,
    centeredSlides: true,
  };

  const [swiper, setSwiper] = React.useState<SwiperCore | null>(null);
  
  swiper?.on('slideChange', function (swiper) {
    const slidesCount = swiper.slides.length;

    let prevSlideIndex = swiper.realIndex - 1;
    prevSlideIndex < 0 && (prevSlideIndex = slidesCount - 1);

    let nextSlideIndex = swiper.realIndex + 1;
    nextSlideIndex === slidesCount && (nextSlideIndex = 0);

    setPrevIndex(prevSlideIndex);
    setNextIndex(nextSlideIndex);
  });

  return (
    <div> 
      <Swiper
        onSwiper={setSwiper}     
        {...swiperParams}
        className='cursor-grab ease-in'
      >
        {projects.map((project, index) => (
          <SwiperSlide key={project.id}>
            <ProjectSlide
              project={project}
              isCurrent={index === swiper?.realIndex}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <NavigationContainer>
        <SliderNavButton role='prev' ref={prevRef} />
        <SliderNavButton role='next' ref={nextRef} />
      </NavigationContainer>
    </div>
  );
};