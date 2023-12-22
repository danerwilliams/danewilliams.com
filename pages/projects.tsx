import { EyeOpenIcon, PersonIcon, StarIcon } from '@radix-ui/react-icons';
import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
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
  title: string;
  description: string;
}

const Projects: NextPage<ProjectsProps> = ({
  timelineProjects,
  title,
  description,
}) => {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title: `${title} | Dane Williams`,
          description,
          url: 'https://danewilliams.dev/projects',
          images: [
            {
              url: 'https://danewilliams.dev/static/images/social/projects.jpeg',
              type: 'image/jpeg',
            },
          ],
        }}
      />
      <Page>
        <PageHeader question="What have I built?" />
        <div className="mt-8">
          <p>{description}</p>
          <div className="flex flex-row max-[576px]:flex-col gap-6 mt-8">
            <div className="flex w-full">
              <HighlightedProject
                name="New Grad Positions"
                url="https://github.com/SimplifyJobs/New-Grad-Positions"
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
                  { icon: <StarIcon />, label: '500+ Stars' },
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
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {
      timelineProjects: TimelineProjects.slice().sort(
        (a, b) =>
          new Date(a.date).getMilliseconds() -
          new Date(b.date).getMilliseconds(),
      ),
      title: 'Projects',
      description:
        'I’ve worked on many projects on my own time and for work. Some of these projects are still active and others I no longer work on. This list is not exhaustive.',
    },
  };
}

export default Projects;
