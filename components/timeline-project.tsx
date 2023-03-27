import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import { FC } from 'react';
import { DaneIcon } from './icons/dane-icon';
import { NdMonogramIcon } from './icons/nd-monogram-icon';
import { QualtricsIcon } from './icons/qualtrics-icon';
import { WorkosIconTrimmed } from './icons/workos-icon-trimmed';

export interface TimelineProjectProps {
  name: string;
  url?: string;
  description: string;
  date: Date;
  organization: 'personal' | 'workos' | 'qualtrics' | 'nd';
  secondaryDescription?: string;
  isRight: boolean;
  isFirst: boolean;
  isLast: boolean;
  newYear?: number;
}

export const TimelineProject: FC<Readonly<TimelineProjectProps>> = ({
  name,
  url,
  description,
  secondaryDescription,
  organization,
  isRight,
  isFirst,
  isLast,
}) => {
  return (
    <>
      {isFirst && (
        <div
          className={`relative flex w-[calc(50%+2px)] h-8 border-r-4 border-lightmode-border dark:border-darkmode-border`}
        >
          <div className={`absolute right-[-22px] top-[-14px] `}>
            <ChevronUpIcon className="h-10 w-10 text-lightmode-border dark:text-darkmode-border" />
          </div>
        </div>
      )}
      <div
        className={`flex w-[calc(50%+2px)] ${
          isRight ? 'self-end flex-row-reverse' : ''
        }`}
      >
        <div
          className={`flex w-72 ${
            isFirst ? '' : '-mt-20'
          } border rounded-lg border-lightmode-border dark:border-darkmode-border bg-lightmode-component dark:bg-darkmode-component hover:bg-lightmode-component-hover hover:dark:bg-darkmode-component-hover duration-200`}
        >
          <a href={url} target="_blank" rel="noreferrer">
            <div className="flex grow flex-col items-left m-2">
              <h2 className="text-xl mb-1 text-lightmode-text-high-contrast dark:text-darkmode-text-high-contrast">
                {name}
              </h2>
              <p className="text-left font-light">{description}</p>
              {secondaryDescription && (
                <p className="text-left mt-2 font-light">
                  {secondaryDescription}
                </p>
              )}
            </div>
          </a>
        </div>
        <div
          className={`relative flex grow border-b-2 ${
            isRight ? 'border-l-4 mr-2' : 'border-r-4 ml-2'
          } border-lightmode-border dark:border-darkmode-border`}
        >
          <div
            className={`p-2 absolute -bottom-[22px] ${
              isRight ? '-left-[22px]' : '-right-[22px]'
            } bg-lightmode-background dark:bg-darkmode-background`}
          >
            {(() => {
              switch (organization) {
                case 'workos':
                  return <WorkosIconTrimmed className="h-6 w-6" />;
                case 'nd':
                  return <NdMonogramIcon className="h-6 w-6" />;
                case 'qualtrics':
                  return <QualtricsIcon className="h-6 w-6" />;
                case 'personal':
                default:
                  return <DaneIcon className="h-6 w-6" />;
              }
            })()}
          </div>
        </div>
      </div>
      {isLast && (
        <div
          className={`relative flex mt-5 w-[calc(50%+2px)] h-8 border-r-4 border-lightmode-border dark:border-darkmode-border`}
        >
          <div className={`absolute right-[-22px] bottom-[-14px] `}>
            <ChevronDownIcon className="h-10 w-10 text-lightmode-border dark:text-darkmode-border" />
          </div>
        </div>
      )}
    </>
  );
};
