import { FC } from 'react';
import {
  TimelineProject,
  TimelineProjectCard,
  TimelineProjectProps,
} from './timeline-project';

export interface TimelineProps {
  projects: (Omit<
    TimelineProjectProps,
    'isRight' | 'isFirst' | 'isLast' | 'newYear'
  > & { date: string })[];
}

export const Timeline: FC<Readonly<TimelineProps>> = ({ projects }) => {
  return (
    <>
      {/* Desktop Timeline */}
      <div className="hidden md:block">
        {projects.map((project, index) => (
          <div key={project.name} className="flex flex-col w-full">
            <TimelineProject
              {...project}
              isRight={!!(index % 2)}
              isFirst={index === 0}
              isLast={index === projects.length - 1}
              newYear={
                index === projects.length - 1
                  ? undefined
                  : new Date(project.date).getFullYear() !==
                      new Date(projects[index + 1]?.date).getFullYear()
                    ? new Date(projects[index].date).getFullYear()
                    : undefined
              }
            />
          </div>
        ))}
      </div>

      {/* Mobile Timeline */}
      <div className="md:hidden">
        {projects.map((project, index) => (
          <div key={project.name} className="mt-4">
            {(index === 0 ||
              new Date(project.date).getFullYear() !==
                new Date(projects[index - 1].date).getFullYear()) && (
              <h3 className="mb-2 mt-8 font-medium text-xl">
                {new Date(project.date).getFullYear()}
              </h3>
            )}
            <TimelineProjectCard {...project} />
          </div>
        ))}
      </div>
    </>
  );
};
