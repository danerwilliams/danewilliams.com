import { FC } from 'react';
import { AttIcon } from './icons/att-icon';
import { QualtricsIcon } from './icons/qualtrics-icon';
import { SymetraIcon } from './icons/symetra-icon';
import { WorkosIcon } from './icons/workos-icon';
import { CobblestoneIcon } from './icons/cobblestone-icon';
import { ClayIcon } from './icons/clay-icon';
import { A16zIcon } from './icons/a16z-icon';

export interface ResumeItemProps {
  company: string;
  logo:
    | 'workos'
    | 'qualtrics'
    | 'att'
    | 'symetra'
    | 'cobblestone'
    | 'clay'
    | 'a16z';
  title?: string;
  link: string;
  location?: string;
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
}) => {
  const logoSizeClass =
    logo === 'a16z'
      ? 'h-14 w-24 md:h-16 md:w-28 lg:h-20 lg:w-36'
      : 'h-14 w-14 md:h-16 md:w-16 lg:h-20 lg:w-20';
  const formattedStartDate = new Date(startDate).toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    timeZone: 'UTC',
  });
  const formattedEndDate = endDate
    ? new Date(endDate).toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        timeZone: 'UTC',
      })
    : 'Present';
  const summaryParts = [
    location,
    `${formattedStartDate} - ${formattedEndDate}`,
  ].filter(Boolean);

  return (
    <div className="flex grow items-center mt-4">
      <div className={`flex items-center ${logoSizeClass} text-lightmode-logo dark:text-darkmode-logo`}>
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
            case 'cobblestone':
              return <CobblestoneIcon />;
            case 'clay':
              return <ClayIcon />;
            case 'a16z':
              return <A16zIcon />;
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
          {title ? ` • ${title}` : ''}
        </div>
        <div className="mt-1">{summaryParts.join(' • ')}</div>
      </div>
    </div>
  );
};
