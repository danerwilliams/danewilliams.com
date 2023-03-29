import { FC, ReactNode } from 'react';
import { AttIcon } from './icons/att-icon';
import { QualtricsIcon } from './icons/qualtrics-icon';
import { SymetraIcon } from './icons/symetra-icon';
import { WorkosIcon } from './icons/workos-icon';

export interface ResumeItemProps {
  company: string;
  logo: 'workos' | 'qualtrics' | 'att' | 'symetra';
  title: string;
  link: string;
  location: string;
  startDate: string;
  endDate?: string | undefined;
}

export const ResumeItem: FC<Readonly<ResumeItemProps>> = ({
  company,
  logo,
  title,
  link,
  location,
  startDate,
  endDate,
}) => (
  <div className="flex grow items-center mt-4">
    <div className="flex items-center h-14 w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 text-lightmode-logo dark:text-darkmode-logo">
      {(() => {
        switch (logo) {
          case 'workos':
            return <WorkosIcon />;
          case 'qualtrics':
            return <QualtricsIcon />;
          case 'att':
            return <AttIcon />;
          case 'symetra':
            return <SymetraIcon />;
          default:
            return null;
        }
      })()}
    </div>
    <div className="ml-4 md:ml-8 text-sm md:text-base lg:text-lg ">
      <div className="text-lightmode-text-high-contrast dark:text-darkmode-text-high-contrast">
        <a
          className="underline underline-offset-4 decoration-2 font-medium"
          href={link}
          target="_blank"
          rel="noreferrer"
          aria-label={`Go to the external page for ${company}`}
        >
          {company}
        </a>
        {` • ${title}`}
      </div>
      <div className="mt-1">{`${location} • ${new Date(
        startDate,
      ).toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        timeZone: 'UTC',
      })} - ${
        endDate
          ? new Date(endDate).toLocaleString('en-US', {
              year: 'numeric',
              month: 'long',
              timeZone: 'UTC',
            })
          : 'Present'
      }`}</div>
    </div>
  </div>
);
