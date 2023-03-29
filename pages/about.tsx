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
          title,
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
              <NewLine />I{"'"}m Dane Williams, a full stack software engineer
              based out of
              <span className="ml-2 text-lightmode-text-high-contrast dark:text-darkmode-text-high-contrast">
                🍕 New York City
              </span>
              .
              <NewLine />
              In the past I lived in <PreviousCities />
              <NewLine />
              Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Sit amet dictum sit
              amet justo. Magna fermentum iaculis eu non diam phasellus
              vestibulum lorem. Turpis massa sed elementum tempus egestas sed
              sed risus. Nunc sed blandit libero volutpat sed cras ornare arcu.
              Dolor sit amet consectetur adipiscing elit duis. Rhoncus dolor
              purus non enim praesent elementum. Elementum curabitur vitae nunc
              sed velit. In mollis nunc sed id semper risus. Urna cursus eget
              nunc scelerisque. Quisque sagittis purus sit amet volutpat
              consequat mauris nunc congue. Rhoncus mattis rhoncus urna neque
              viverra justo. Sed vulputate mi sit amet mauris commodo. At
              consectetur lorem donec massa sapien faucibus. Non curabitur
              gravida arcu ac. Mauris ultrices eros in cursus turpis. Lacus
              vestibulum sed
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
      title: 'About | Dane Williams',
      description:
        'Dane Williams is a software engineer in New York City. Dane graduated from Notre Dame Computer Science and has worked at WorkOS, Qualtrics and more.',
    },
  };
}

export default About;
