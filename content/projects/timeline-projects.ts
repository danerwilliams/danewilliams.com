import { TimelineProps } from '../../components/timeline';
import { TimelineProjectProps } from '../../components/timeline-project';

export const TimelineProjects: Omit<
  TimelineProjectProps,
  'isRight' | 'isFirst' | 'isLast' | 'newYear'
>[] = [
  {
    name: 'danewilliams.dev',
    url: 'https://github.com/danerwilliams/danewilliams.dev',
    date: new Date('2023-04-01'),
    organization: 'personal',
    description: 'This website.',
    secondaryDescription:
      'Built with Next, Radix, and Tailwind. Designed in Figma.',
  },
  {
    name: 'Admin Portal Navigation',
    url: 'https://workos.com/changelog/improved-navigation-in-admin-portal',
    date: new Date('2023-02-27'),
    organization: 'workos',
    description:
      'Architected and developed a series of improvements to the WorkOS Admin Portal navigation.',
    secondaryDescription: 'Collaborated with another engineer and a designer.',
  },
  {
    name: 'Self Serve Slack',
    url: 'https://workos.com/changelog/self-serve-creation-of-your-shared-slack-channel',
    date: new Date('2023-01-13'),
    organization: 'workos',
    description:
      'Built the backend services to allow customers to create shared Slack channels with WorkOS customer support within the dashboard.',
    secondaryDescription: 'Collaborated with a frontend engineer and designer.',
  },
  {
    name: 'Admin Portal Branding',
    url: 'https://workos.com/changelog/customize-admin-portal-branding-from-the-dashboard',
    date: new Date('2022-12-05'),
    organization: 'workos',
    description:
      'Designed and built a feature that allows customers to add custom branding to the Admin Portal from the WorkOS dashboard.',
    secondaryDescription:
      'Collaborated with another engineer to deliver the project end to end.',
  },
  {
    name: 'Admin Portal Feedback',
    url: 'https://workos.com/changelog/improved-experience-in-admin-portal',
    date: new Date('2022-11-10'),
    organization: 'workos',
    description:
      'Added the ability to provide feedback from the Admin Portal to the WorkOS team.',
    secondaryDescription:
      "PM'd, architected, and built the project end to end.",
  },
  {
    name: 'Customer Slack Bot',
    organization: 'workos',
    date: new Date('2022-03-01'),
    description:
      'Refactored existing Slack code and built new Slack instrumentation to push various alerts to hundreds of customers in shared Slack channels.',
    secondaryDescription:
      "Wrote all of the code. Co-architected and PM'd the project with a mentoring engineer.",
  },
  {
    name: 'Hierarchical Sankey',
    organization: 'nd',
    date: new Date('2021-12-01'),
    url: 'https://link.springer.com/chapter/10.1007/978-3-030-90436-4_31',
    description:
      'Built interactive sankey diagrams using D3.js in collaboration with other Notre Dame students.',
    secondaryDescription:
      'Published “A Study of Hierarchical Sankey Diagrams: Design and Evaluation” to ISVC 2021 academic research conference.',
  },
];
