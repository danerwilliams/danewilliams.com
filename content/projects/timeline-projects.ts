import { TimelineProjectProps } from '../../components/timeline-project';

export const TimelineProjects: (Omit<
  TimelineProjectProps,
  'isRight' | 'isFirst' | 'isLast' | 'newYear'
> & { date: string })[] = [
  {
    name: 'Clay in ChatGPT',
    url: 'https://www.linkedin.com/posts/grow-with-clay_big-news-clay-is-now-available-directly-activity-7407182915740147712-IPWr',
    date: new Date('2025-12-17').toISOString(),
    organization: 'clay',
    description: "Clay's first tool for sales reps.",
    secondaryDescription:
      'Wrote a lot of code in a few weeks with some amazing people.',
  },
  {
    name: 'Cobblestone',
    url: 'https://getcobblestone.com',
    date: new Date('2025-05-01').toISOString(),
    organization: 'cobblestone',
    description:
      'An end to end tenant screening platform with $4M in funding from Y Combinator, a16z, Tishman Speyer (owner of Rockefeller center), and more.',
    secondaryDescription: 'Shut down in May 2025.',
  },
  {
    name: 'User Management / AuthKit',
    url: 'https://workos.com/blog/introducing-authkit-and-user-management',
    date: new Date('2023-11-28').toISOString(),
    organization: 'workos',
    description:
      'The best fully managed authentication service for b2b apps in the world.',
    secondaryDescription: 'A huge team effort :-D',
  },
  {
    name: 'Charcoal',
    url: 'https://github.com/danerwilliams/charcoal',
    date: new Date('2023-10-10').toISOString(),
    organization: 'personal',
    description: 'A CLI for stacking pull requests, integrated with Github.',
    secondaryDescription: 'Forked from Graphite.',
  },
  {
    name: 'Admin Portal Email Invitations',
    url: 'https://workos.com/changelog/invite-admins-to-admin-portal-via-email',
    date: new Date('2023-07-20').toISOString(),
    organization: 'workos',
    description:
      'Allows for inviting 3rd party IT administrators to manage organizations in WorkOS.',
  },
  {
    name: 'Streamlined Admin Portal Setup Links',
    url: 'https://workos.com/changelog/streamlined-admin-portal-setup-links',
    date: new Date('2023-05-22').toISOString(),
    organization: 'workos',
    description:
      'Added support for setting up multiple features from a single link.',
  },
  {
    name: 'danewilliams.com',
    url: 'https://github.com/danerwilliams/danewilliams.com',
    date: new Date('2023-04-01').toISOString(),
    organization: 'personal',
    description: 'This website.',
    secondaryDescription:
      'Built with Next, Radix, and Tailwind. Designed in Figma.',
  },
  {
    name: 'Admin Portal Navigation',
    url: 'https://workos.com/changelog/improved-navigation-in-admin-portal',
    date: new Date('2023-02-27').toISOString(),
    organization: 'workos',
    description:
      'Architected and developed a series of improvements to the WorkOS Admin Portal navigation.',
    secondaryDescription:
      'Simplified flows for customers and unblocked other Admin Portal feature work.',
  },
  {
    name: 'Self Serve Slack',
    url: 'https://workos.com/changelog/self-serve-creation-of-your-shared-slack-channel',
    date: new Date('2023-01-13').toISOString(),
    organization: 'workos',
    description:
      'Built the backend services to allow customers to create shared Slack channels with WorkOS customer support within the Dashboard.',
  },
  {
    name: 'Admin Portal Branding',
    url: 'https://workos.com/changelog/customize-admin-portal-branding-from-the-dashboard',
    date: new Date('2022-12-05').toISOString(),
    organization: 'workos',
    description:
      'Designed and built a feature that allows customers to add custom branding to the Admin Portal from the WorkOS Dashboard.',
    secondaryDescription:
      'Presented feature in the WorkOS quarterly customer event.',
  },
  {
    name: 'Admin Portal Feedback',
    url: 'https://workos.com/changelog/improved-experience-in-admin-portal',
    date: new Date('2022-11-10').toISOString(),
    organization: 'workos',
    description:
      'Added the ability to provide feedback from the Admin Portal to the WorkOS team.',
    secondaryDescription: 'Instrumented Segment to collect data.',
  },
  {
    name: 'SAML Signing Certificate Docs',
    url: 'https://workos.com/docs/sso/signing-certificates',
    date: new Date('2022-09-01').toISOString(),
    organization: 'workos',
    description:
      'Wrote public documentation about SAML signing certificates for WorkOS customers.',
  },
  {
    name: 'Dashboard SCIM',
    date: new Date('2022-06-01').toISOString(),
    organization: 'workos',
    description:
      'Dog fooded the WorkOS Directory Sync product in our Dashboard to provide SCIM / HRIS support to WorkOS customers.',
  },
  {
    name: 'Customer Slack Bot',
    organization: 'workos',
    date: new Date('2022-03-01').toISOString(),
    description:
      'Refactored existing Slack code and built new Slack instrumentation.',
    secondaryDescription:
      'Service is now used to push various alerts to hundreds of customers in shared Slack channels.',
  },
  {
    name: 'Hierarchical Sankey',
    organization: 'nd',
    date: new Date('2021-12-01').toISOString(),
    url: 'https://link.springer.com/chapter/10.1007/978-3-030-90436-4_31',
    description:
      'Built interactive sankey diagrams using D3.js in collaboration with other Notre Dame students.',
    secondaryDescription:
      'Published “A Study of Hierarchical Sankey Diagrams: Design and Evaluation” to ISVC 2021 academic research conference.',
  },
  {
    name: 'Operational Data Integration',
    organization: 'qualtrics',
    date: new Date('2021-08-01').toISOString(),
    description:
      'Built a feature for the Frontline Feedback product that automatically syncs data from external platforms such as Salesforce into Qualtrics.',
  },
  {
    name: 'playruski.com',
    organization: 'nd',
    url: 'https://github.com/coderquad/ruski',
    date: new Date('2021-05-01').toISOString(),
    description:
      'Full stack web app built in Angular/ Node / GraphQL with other students for tracking results and ranking athletes in a popular sport at Notre Dame.',
    secondaryDescription:
      'Handled all of the infrastructure and back end development.',
  },
  {
    name: 'pstb.in',
    organization: 'personal',
    url: 'https://github.com/danerwilliams/pstb.in',
    date: new Date('2020-12-01').toISOString(),
    description:
      'Pastebin and url shortener built with serverless AWS. Utilizes AWS Lambda, API Gateway, S3, and the Chalice framework.',
    secondaryDescription: 'Actively deployed to pstb.in.',
  },
  {
    name: 'B Minor Compiler',
    organization: 'nd',
    date: new Date('2020-11-01').toISOString(),
    description:
      'A 4 stage compiler consisting of a scanner, parser, pretty printer, and type checker for the B Minor programming language written with C, Flex, and Bison.',
  },
  {
    name: 'Pork Chop',
    organization: 'personal',
    url: 'https://github.com/danerwilliams/pork-chop',
    date: new Date('2020-05-01').toISOString(),
    description:
      'GroupMe chat bot written in Python and trained on 100s of thousands of messages from an iMessage group chat.',
  },
  {
    name: 'danewilliams.me',
    organization: 'personal',
    url: 'https://github.com/danerwilliams/danewilliams.me',
    date: new Date('2020-04-01').toISOString(),
    description:
      'My original personal website built using Hugo along with customizations using vanilla Javascript and CSS.',
  },
];
