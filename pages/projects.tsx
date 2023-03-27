import { EyeOpenIcon, PersonIcon, StarIcon } from '@radix-ui/react-icons';
import type { NextPage } from 'next';
import { HighlightedProject } from '../components/highlighted-project';
import { Page } from '../components/page';
import { PageHeader } from '../components/page-header';
import { SectionHeader } from '../components/section-header';
import { Timeline } from '../components/timeline';
import { TimelineProjectProps } from '../components/timeline-project';
import { TimelineProjects } from '../content/projects';

interface ProjectsProps {
  timelineProjects: (Omit<
    TimelineProjectProps,
    'isRight' | 'isFirst' | 'isLast' | 'newYear'
  > & { date: string })[];
}

const Projects: NextPage<ProjectsProps> = ({ timelineProjects }) => {
  return (
    <Page>
      <PageHeader question="What have I built?" />
      <div className="mt-8">
        <p>
          Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet
          justo.
        </p>
        <div className="flex flex-row max-[576px]:flex-col gap-6 mt-8">
          <div className="flex w-full">
            <HighlightedProject
              name="New Grad Positions"
              url="https://github.com/coderQuad/New-Grad-Positions-2023"
              description="A collection of computer science jobs for new college graduates"
              stats={[
                { icon: <StarIcon />, label: '5k+ Stars' },
                { icon: <EyeOpenIcon />, label: '10k+ Visits/Day' },
              ]}
            />
          </div>
          <div className="flex w-full">
            <HighlightedProject
              name="Dracula Tmux"
              url="https://github.com/dracula/tmux"
              description="Official Dracula Theme extension for Tmux"
              stats={[
                { icon: <StarIcon />, label: '400+ Stars' },
                { icon: <PersonIcon />, label: '20+ Contributors' },
              ]}
            />
          </div>
        </div>
        <div className="mt-8">
          <SectionHeader text="Timeline" />
          <div className="mt-8">
            <Timeline projects={timelineProjects} />
          </div>
        </div>
      </div>
    </Page>
  );
};

export async function getStaticProps() {
  return {
    props: {
      timelineProjects: TimelineProjects.sort(
        (a, b) =>
          new Date(a.date).getMilliseconds() -
          new Date(b.date).getMilliseconds(),
      ),
    },
  };
}

export default Projects;
