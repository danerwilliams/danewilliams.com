import { EyeOpenIcon, PersonIcon, StarIcon } from '@radix-ui/react-icons';
import type { NextPage } from 'next';
import { HighlightedProject } from '../components/highlighted-project';
import { Page } from '../components/page';
import { PageHeader } from '../components/page-header';
import { SectionHeader } from '../components/section-header';

const Projects: NextPage = () => {
  return (
    <Page>
      <PageHeader question="What have I built?" />
      <div className="mt-8">
        <p>
          Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet
          justo.
        </p>
        <div className="flex flex-row max-[576px]:flex-col gap-6 mt-8">
          <div className="flex w-full">
            <HighlightedProject
              name="New Grad Positions"
              url="https://github.com/coderQuad/New-Grad-Positions-2023"
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
                { icon: <StarIcon />, label: '400+ Stars' },
                { icon: <PersonIcon />, label: '20+ Contributors' },
              ]}
            />
          </div>
        </div>
        <div className="mt-8">
          <SectionHeader text="Timeline" />
          <div className="mt-8"></div>
        </div>
      </div>
    </Page>
  );
};

export default Projects;
