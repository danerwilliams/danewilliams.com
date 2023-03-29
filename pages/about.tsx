import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import { NewLine } from '../components/new-line';
import { Page } from '../components/page';
import { PageHeader } from '../components/page-header';
import { PreviousCities } from '../components/previous-cities';
import { ResumeItem, ResumeItemProps } from '../components/resume-item';
import { SectionHeader } from '../components/section-header';

interface AboutProps {
  resumeItems: ResumeItemProps[];
  title: string;
  description: string;
}

const About: NextPage<AboutProps> = ({ resumeItems, title, description }) => {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title: `${title} | Dane Williams`,
          description,
          url: 'https://danewilliams.dev/about',
          images: [
            {
              url: 'https://danewilliams.dev/static/images/social/about.jpeg',
              type: 'image/jpeg',
            },
          ],
        }}
      />
      <Page>
        <PageHeader question="Who am I?" />
        <div className="mt-8">
          <div className="inline">
            <Image
              height={320}
              width={320}
              alt="Dane Williams Headshot"
              src="/static/images/headshot.jpg"
              className="float-right rounded-2xl mb-6 ml-6 w-48 md:w-72 lg:w-80"
            />
            <p>
              Hey 👋
              <NewLine />
              I’m Dane Williams, a full stack product engineer based out of
              <span className="ml-2 text-lightmode-text-high-contrast dark:text-darkmode-text-high-contrast">
                New York City
              </span>
              . 🍕
              <NewLine />
              In the past I lived in <PreviousCities />
              <NewLine />
              During football season you can find me cheering on the Seahawks as
              well as my alma mater,{' '}
              <span className="text-lightmode-text-high-contrast dark:text-darkmode-text-high-contrast">
                Notre Dame
              </span>
              . When I was a student at Notre Dame I lived in Fisher Hall and
              played on the water polo team. Go Irish! ☘️
              <NewLine />I am a{' '}
              <span className="text-lightmode-text-high-contrast dark:text-darkmode-text-high-contrast">
                generalist
              </span>{' '}
              who enjoys working across the entire stack. 👨‍💻
              <NewLine />
              My experience is primarily in JavaScript and TypeScript, although
              I also have worked with Python, C, and more. I enjoy modern web
              technologies such as React, Node, Postgres, GraphQL, etcetera, but
              believe in using whatever tool will aid in delivering an awesome
              experience to customers. 🤙
              <NewLine />
              In addition to my technical skills I take pride in my ability to
              wear many hats. I love talking to customers, PM’ing, designing,
              and documenting in order to ship a project from end to end. 🚀
            </p>
          </div>
        </div>
        <div className="mt-8">
          <SectionHeader text="Career" />
          <div className="mt-6">
            {resumeItems.map((resumeItem) => (
              <ResumeItem {...resumeItem} key={resumeItem.company} />
            ))}
          </div>
        </div>
      </Page>
    </>
  );
};

export async function getStaticProps() {
  const resumeItems: ResumeItemProps[] = [
    {
      company: 'WorkOS',
      logo: 'workos',
      title: 'Software Engineer',
      link: 'https://workos.com',
      location: 'New York, NY',
      startDate: new Date(2022, 0).toISOString(),
    },
    {
      company: 'Qualtrics',
      logo: 'qualtrics',
      title: 'Software Engineer Intern',
      link: 'https://qualtrics.com',
      location: 'Seattle, WA',
      startDate: new Date(2021, 4).toISOString(),
      endDate: new Date(2021, 7).toISOString(),
    },
    {
      company: 'AT&T Labs',
      logo: 'att',
      title: 'Software Engineer Intern',
      link: 'https://about.att.com/sites/labs',
      location: 'San Ramon, CA',
      startDate: new Date(2020, 5).toISOString(),
      endDate: new Date(2020, 7).toISOString(),
    },
    {
      company: 'Symetra',
      logo: 'symetra',
      title: 'Cloud Engineer Intern',
      link: 'https://symetra.com',
      location: 'Bellevue, WA',
      startDate: new Date(2019, 4).toISOString(),
      endDate: new Date(2019, 7).toISOString(),
    },
  ];

  return {
    props: {
      resumeItems,
      description:
        'I’m Dane Williams, a software engineer based out of New York City. I graduated from Notre Dame Computer Science and have worked at WorkOS, Qualtrics and others.',
      title: 'About',
    },
  };
}

export default About;
