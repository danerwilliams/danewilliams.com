import type { NextPage } from 'next';
import Image from 'next/image';
import { AttIcon } from '../components/icons/att-icon';
import { QualtricsIcon } from '../components/icons/qualtrics-icon';
import { SymetraIcon } from '../components/icons/symetra-icon';
import { WorkosIcon } from '../components/icons/workos-icon';
import { Page } from '../components/page';
import { PageHeader } from '../components/page-header';
import { PreviousCities } from '../components/previous-cities';
import { ResumeItem, ResumeItemProps } from '../components/resume-item';
import { SectionHeader } from '../components/section-header';

const titleQuestion = 'Who am I?';

const resumeItems: ResumeItemProps[] = [
  {
    company: 'WorkOS',
    logo: <WorkosIcon />,
    title: 'Software Engineer',
    link: 'https://workos.com',
    location: 'New York, NY',
    startDate: new Date(2022, 0),
  },
  {
    company: 'Qualtrics',
    logo: <QualtricsIcon />,
    title: 'Software Engineer Intern',
    link: 'https://qualtrics.com',
    location: 'Seattle, WA',
    startDate: new Date(2021, 4),
    endDate: new Date(2021, 7),
  },
  {
    company: 'AT&T Labs',
    logo: <AttIcon />,
    title: 'Software Engineer Intern',
    link: 'https://about.att.com/sites/labs',
    location: 'San Ramon, CA',
    startDate: new Date(2020, 5),
    endDate: new Date(2020, 7),
  },
  {
    company: 'Symetra',
    logo: <SymetraIcon />,
    title: 'Cloud Engineer Intern',
    link: 'https://symetra.com',
    location: 'Bellevue, WA',
    startDate: new Date(2019, 4),
    endDate: new Date(2019, 7),
  },
];

const About: NextPage = () => {
  return (
    <Page>
      <PageHeader question={titleQuestion} />
      <div className="mt-8">
        <div className="inline mt-8">
          <Image
            height={320}
            width={320}
            alt="Dane Williams Headshot"
            src="/images/headshot.jpg"
            className="float-right rounded-2xl mb-6 ml-6 w-48 md:w-72 lg:w-80"
          />
          <p>
            Lorem ipsum <PreviousCities /> dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Sit amet dictum sit amet justo. Magna fermentum
            iaculis eu non diam phasellus vestibulum lorem. Turpis massa sed
            elementum tempus egestas sed sed risus. Nunc sed blandit libero
            volutpat sed cras ornare arcu. Dolor sit amet consectetur adipiscing
            elit duis. Rhoncus dolor purus non enim praesent elementum.
            Elementum curabitur vitae nunc sed velit. In mollis nunc sed id
            semper risus. Urna cursus eget nunc scelerisque. Quisque sagittis
            purus sit amet volutpat consequat mauris nunc congue. Rhoncus mattis
            rhoncus urna neque viverra justo. Sed vulputate mi sit amet mauris
            commodo. At consectetur lorem donec massa sapien faucibus. Non
            curabitur gravida arcu ac. Mauris ultrices eros in cursus turpis.
            Lacus vestibulum sed
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
  );
};

export default About;
