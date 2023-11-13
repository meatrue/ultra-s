import React from 'react';
import Image from 'next/image';
import Link, { LinkProps } from 'next/link';
import clsx from 'clsx';

import { ArrowIcon } from '@/components/ui-kit';
import { Project } from '../types';

const ProjectTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="
      flex items-center w-[59%] gap-[24px] pr-[48px]
      text-[24px] text-primary-light font-sans tracking-[0.02em]
    ">
      {children}
    </div>
  );
};

const ProjectHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="
      absolute top-0 left-0 z-30 w-full flex items-center
      py-[40px] px-[var(--padding-desktop)]
    ">
      {children}
    </div>
  );
};

const ImageShadow: React.FC = () => {
  return (
    <div className="absolute z-20 top-0 bottom-0 left-0 right-0 image-shadow" />
  );
};

interface ProjectLink extends LinkProps {
  children: React.ReactNode;
}

const ProjectLink: React.FC<ProjectLink> = ({ children, href }) => {
  return (
    <Link
      href={href}
      className="
        group flex items-center gap-[16px]
        text-[18px] leading-[1.2] text-secondary-light font-bold
      "
    >
      {children}
      <ArrowIcon className="
        w-[14px] h-auto group-hover:translate-x-[2px] group-hover:translate-y-[-2px]
        transition-transform duration-300 
      " />
    </Link>
  );
};

interface ProjectSlideProps {
  project: Project;
  isCurrent: boolean;
}

export const ProjectSlide: React.FC<ProjectSlideProps> = ({ project, isCurrent }) => {
  const { title, name, link } = project;

  return (
    <div className='relative w-full h-screen'>
      <ProjectHeader>
        <ProjectTitle>
          <Image
            src={`/img/projects/logos/${name}.svg`}
            alt=""
            width={32}
            height={32}
          />
          {title}
        </ProjectTitle>
        <div className="w-[41%] pr-[148px]">
          <ProjectLink href={link}>
            О проекте
          </ProjectLink>
        </div>
      </ProjectHeader>

      <Image
        className={clsx(
          'absolute z-10 top-0 left-0 w-full h-full object-cover',
          'transition-transform duration-[1600ms] ease-linear will-change-transform',
          isCurrent ? 'scale-110' : 'scale-100',
        )}
        src={`/img/projects/${name}.webp`}
        alt=""
        width="2560"
        height="1420"
        quality={100}
        priority
      />
      <ImageShadow />
    </div>
  );
};