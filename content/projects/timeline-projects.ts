import { TimelineProps } from '../../components/timeline';
import { TimelineProjectProps } from '../../components/timeline-project';

export const TimelineProjects: Omit<
  TimelineProjectProps,
  'isRight' | 'isFirst' | 'isLast'
>[] = [
  {
    name: 'danewilliams.dev',
    url: 'https://github.com/danerwilliams/danewilliams.dev',
    organization: 'personal',
    description: 'This website.',
    secondaryDescription:
      'Built with Next, Radix, and Tailwind. Designed in Figma.',
  },
  {
    name: 'Customer Slack Bot',
    organization: 'workos',
    description:
      'Refactored existing Slack code and built new Slack instrumentation to push various alerts to hundreds of customers in shared Slack channels.',
    secondaryDescription:
      "Wrote all of the code. Co-architected and PM'd the project with a mentoring engineer.",
  },
];
