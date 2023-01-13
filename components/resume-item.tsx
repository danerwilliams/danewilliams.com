import { FC, ReactNode } from 'react';

export interface ResumeItemProps {
  company: string;
  logo: ReactNode;
  title: string;
  link: string;
  location: string;
  startDate: Date;
  endDate?: Date | undefined;
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
      {logo}
    </div>
    <div className="ml-4 md:ml-8 text-sm md:text-base lg:text-lg ">
      <div className="text-lightmode-text-high-contrast dark:text-darkmode-text-high-contrast">
        <a
          className="underline underline-offset-4 decoration-2 font-medium"
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          {company}
        </a>
        {` • ${title}`}
      </div>
      <div className="mt-1">{`${location} • ${startDate.toLocaleString(
        'en-US',
        {
          year: 'numeric',
          month: 'long',
        },
      )} - ${
        endDate
          ? startDate.toLocaleString('en-US', {
              year: 'numeric',
              month: 'long',
            })
          : 'Present'
      }`}</div>
    </div>
  </div>
);
