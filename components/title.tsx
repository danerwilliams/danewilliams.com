import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from '@radix-ui/react-icons';
import { FC } from 'react';

interface TitleProps {}

export const Title: FC<Readonly<TitleProps>> = () => {
  const logoClassName =
    'h-8 w-8 text-lightmode-logo dark:text-darkmode-text-logo hover:text-lightmode-logo-hover hover:dark:text-darkmode-logo-hover transition duration-200';

  return (
    <div className="flex flex-col grow gap-10 items-center text-center mb-24 max-sm:mb-12">
      <h1
        className={`font-semibold bg-[length:200%] animate-gradient bg-clip-text text-transparent text-7xl max-thin:text-6xl bg-gradient-to-r from-gradient-lightmode-from via-gradient-lightmode-to to-gradient-lightmode-from dark:from-gradient-darkmode-from dark:via-gradient-darkmode-to dark:to-gradient-darkmode-from`}
      >
        Dane Williams
      </h1>
      <div className={`flex flex-col gap-2 text-xl max-thin:text-base`}>
        <p className="text-lightmode-text-high-contrast dark:text-darkmode-text-high-contrast">
          Software Engineer at{' '}
          <a
            className="underline underline-offset-4 decoration-2 font-medium"
            href="https://workos.com"
            target="_blank"
            rel="noreferrer"
          >
            WorkOS
          </a>
        </p>
        <p>lorem ipsum dolor sit amet consectatur apidiscing</p>
      </div>
      <div className="flex gap-12 max-thin:gap-8">
        <a
          href="https://linkedin.com/in/danerwilliams"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInLogoIcon className={logoClassName} />
        </a>
        <a
          href="https://twitter.com/danerwilliams"
          target="_blank"
          rel="noreferrer"
        >
          <TwitterLogoIcon className={logoClassName} />
        </a>
        <a
          href="https://github.com/danerwilliams"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubLogoIcon className={logoClassName} />
        </a>
        <a href="mailto:hey@dane.to" target="_blank" rel="noreferrer">
          <EnvelopeClosedIcon className={logoClassName} />
        </a>
      </div>
    </div>
  );
};
