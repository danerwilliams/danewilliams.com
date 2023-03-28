import { FC, ReactNode } from 'react';

interface Stat {
  icon: ReactNode;
  label: string;
}

export interface HighlightedProjectProps {
  name: string;
  url: string;
  description: string;
  stats: [Stat, Stat];
}

export const HighlightedProject: FC<Readonly<HighlightedProjectProps>> = ({
  name,
  url,
  description,
  stats,
}) => {
  return (
    <a
      href={url}
      target="_blank"
      className="flex grow"
      rel="noreferrer"
      aria-label={`Go to the external page for the ${name} project`}
    >
      <div className="flex grow h-40 border rounded-xl border-lightmode-border dark:border-darkmode-border bg-lightmode-component dark:bg-darkmode-component hover:bg-lightmode-component-hover hover:dark:bg-darkmode-component-hover duration-200">
        <div className="flex grow flex-col items-center justify-between m-3">
          <h2 className="text-2xl font-medium text-lightmode-text-high-contrast dark:text-darkmode-text-high-contrast">
            {name}
          </h2>
          <p className="text-center">{description}</p>
          <div className="flex w-full justify-around">
            {stats.map((stat) => (
              <div
                className="flex items-center gap-1 font-light lg:text-base text-sm"
                key={stat.label}
              >
                {stat.icon}
                {stat.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};
