import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from '@radix-ui/react-icons';
import { FC } from 'react';

interface TitleProps {
  title: string;
}

export const Title: FC<Readonly<TitleProps>> = ({ title }) => {
  const logoClassName =
    'h-8 w-8 text-lightmode-logo dark:text-darkmode-text-logo hover:text-lightmode-logo-hover hover:dark:text-darkmode-logo-hover transition duration-200';

  return (
    <div className="flex flex-col grow gap-10 items-center text-center mb-24 max-sm:mb-12">
      <h1
        className={`font-semibold bg-[length:200%] animate-gradient bg-clip-text text-transparent text-7xl max-thin:text-6xl bg-gradient-to-r from-gradient-lightmode-from via-gradient-lightmode-to to-gradient-lightmode-from dark:from-gradient-darkmode-from dark:via-gradient-darkmode-to dark:to-gradient-darkmode-from`}
      >
        {title}
      </h1>
      <div className={`flex flex-col gap-2 text-xl max-thin:text-base`}>
        <p className="text-lightmode-text-high-contrast dark:text-darkmode-text-high-contrast">
          Engineering at{' '}
          <a
            className="underline underline-offset-4 decoration-2 font-medium"
            href="https://getcobblestone.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Go to the external page for Cobblestone"
          >
            Cobblestone
          </a>
        </p>
      </div>
      <div className="flex gap-12 max-thin:gap-8">
        <a
          href="https://linkedin.com/in/danerwilliams"
          target="_blank"
          rel="noreferrer"
          aria-label="Go to Dane's LinkedIn profile"
        >
          <LinkedInLogoIcon className={logoClassName} />
        </a>
        <a
          href="https://twitter.com/danerwilliams"
          target="_blank"
          rel="noreferrer"
          aria-label="Go to Dane's Twitter profile"
        >
          <TwitterLogoIcon className={logoClassName} />
        </a>
        <a
          href="https://github.com/danerwilliams"
          target="_blank"
          rel="noreferrer"
          aria-label="Go to Dane's GitHub profile"
        >
          <GitHubLogoIcon className={logoClassName} />
        </a>
        <a
          href="mailto:hey@dane.to"
          target="_blank"
          rel="noreferrer"
          aria-label="Send an email to Dane"
        >
          <EnvelopeClosedIcon className={logoClassName} />
        </a>
      </div>
    </div>
  );
};
