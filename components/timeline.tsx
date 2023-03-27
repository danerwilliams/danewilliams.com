import { FC } from 'react';
import { TimelineProject, TimelineProjectProps } from './timeline-project';

export interface TimelineProps {
  projects: Omit<
    TimelineProjectProps,
    'isRight' | 'isFirst' | 'isLast' | 'newYear'
  >[];
}

export const Timeline: FC<Readonly<TimelineProps>> = ({ projects }) => {
  return (
    <>
      {projects.map((project, index) => (
        <div key={project.name} className="flex flex-col w-full">
          <TimelineProject
            {...project}
            isRight={!!(index % 2)}
            isFirst={index === 0}
            isLast={index === projects.length - 1}
            newYear={
              index === 0
                ? undefined
                : project.date.getFullYear() !==
                  projects[index - 1]?.date.getFullYear()
                ? projects[index - 1].date.getFullYear()
                : undefined
            }
          />
        </div>
      ))}
    </>
  );
};
