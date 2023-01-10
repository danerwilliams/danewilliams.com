import type { NextPage } from 'next';
import Image from 'next/image';
import { Page } from '../components/page';
import { PageHeader } from '../components/page-header';

const titleQuestion = 'Who am I?';

const About: NextPage = () => {
  return (
    <Page>
      <PageHeader question={titleQuestion} />
      <div className="inline">
        <div className="float-right">
          <Image
            height="100"
            width="100"
            alt="Dane Williams Headshot"
            src="/images/headshot.jpg"
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet
          dictum sit amet justo. Magna fermentum iaculis eu non diam phasellus
          vestibulum lorem. Turpis massa sed elementum tempus egestas sed sed
          risus. Nunc sed blandit libero volutpat sed cras ornare arcu. Dolor
          sit amet consectetur adipiscing elit duis. Rhoncus dolor purus non
          enim praesent elementum. Elementum curabitur vitae nunc sed velit. In
          mollis nunc sed id semper risus. Urna cursus eget nunc scelerisque.
          Quisque sagittis purus sit amet volutpat consequat mauris nunc congue.
          Rhoncus mattis rhoncus urna neque viverra justo. Sed vulputate mi sit
          amet mauris commodo. At consectetur lorem donec massa sapien faucibus.
          Non curabitur gravida arcu ac. Mauris ultrices eros in cursus turpis.
          Lacus vestibulum sed
        </p>
      </div>
    </Page>
  );
};

export default About;
