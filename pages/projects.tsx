import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import {
  HighlightedProject,
  HighlightedProjectProps,
} from '../components/highlighted-project';
import { Page } from '../components/page';
import { PageHeader } from '../components/page-header';
import { SectionHeader } from '../components/section-header';
import { Timeline } from '../components/timeline';
import { TimelineProjectProps } from '../components/timeline-project';
import { TimelineProjects } from '../content/projects';
import { getRoundedNumber } from '../lib/get-rounded-number';
import { getGithubStars } from '../lib/get-github-stars';
import { getGithubContributorsCount } from '../lib/get-github-contributors-count';

interface ProjectsProps {
  timelineProjects: (Omit<
    TimelineProjectProps,
    'isRight' | 'isFirst' | 'isLast' | 'newYear'
  > & { date: string })[];
  highlightedProjects: HighlightedProjectProps[];
  title: string;
  description: string;
}

const Projects: NextPage<ProjectsProps> = ({
  timelineProjects,
  highlightedProjects,
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
          url: 'https://danewilliams.com/projects',
          images: [
            {
              url: 'https://danewilliams.com/static/images/social/projects.jpeg',
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
            {highlightedProjects.map((project) => (
              <div className="flex w-full" key={project.name}>
                <HighlightedProject {...project} />
              </div>
            ))}
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
  const newGradPositionsStars = await getGithubStars({
    owner: 'SimplifyJobs',
    repo: 'New-Grad-Positions',
  });

  const draculaTmuxStars = await getGithubStars({
    owner: 'dracula',
    repo: 'tmux',
  });

  const draculaTmuxContributorsCount = await getGithubContributorsCount({
    owner: 'dracula',
    repo: 'tmux',
  });

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
      highlightedProjects: [
        {
          name: 'New Grad Positions',
          url: 'https://github.com/SimplifyJobs/New-Grad-Positions',
          description:
            'A collection of computer science jobs for new college graduates',
          stats: [
            {
              icon: 'star',
              label: `${getRoundedNumber(newGradPositionsStars)} Stars`,
            },
            {
              icon: 'eye',
              label: '10k+ Visits/Day',
            },
          ],
        },
        {
          name: 'Dracula Tmux',
          url: 'https://github.com/dracula/tmux',
          description: 'Official Dracula Theme extension for Tmux',
          stats: [
            {
              icon: 'star',
              label: `${getRoundedNumber(draculaTmuxStars)} Stars`,
            },
            {
              icon: 'person',
              label: `${getRoundedNumber(
                draculaTmuxContributorsCount,
              )} Contributors`,
            },
          ],
        },
      ],
    },
  };
}

export default Projects;
