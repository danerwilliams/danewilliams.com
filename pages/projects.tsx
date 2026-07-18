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
import { getGithubForks } from '../lib/get-github-forks';
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
          <div className="grid grid-cols-2 max-[576px]:grid-cols-1 gap-6 mt-8">
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

  const charcoalStars = await getGithubStars({
    owner: 'danerwilliams',
    repo: 'charcoal',
  });

  const charcoalForks = await getGithubForks({
    owner: 'danerwilliams',
    repo: 'charcoal',
  });

  const agentPluginsStars = await getGithubStars({
    owner: 'clay-run',
    repo: 'agent-plugins',
  });

  const agentPluginsForks = await getGithubForks({
    owner: 'clay-run',
    repo: 'agent-plugins',
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
          name: 'Clay Agent Plugins',
          url: 'https://github.com/clay-run/agent-plugins',
          description: "Clay's official plugins for coding agents",
          stats: [
            {
              icon: 'star',
              label: `${getRoundedNumber(agentPluginsStars)} Stars`,
            },
            {
              icon: 'fork',
              label: `${getRoundedNumber(agentPluginsForks)} Forks`,
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
          name: 'Charcoal',
          url: 'https://github.com/danerwilliams/charcoal',
          description: 'A CLI for stacking pull requests, forked from Graphite',
          stats: [
            {
              icon: 'star',
              label: `${getRoundedNumber(charcoalStars)} Stars`,
            },
            {
              icon: 'fork',
              label: `${getRoundedNumber(charcoalForks)} Forks`,
            },
          ],
        },
      ],
    },
    revalidate: 43200, // 12 hour TTL
  };
}

export default Projects;
