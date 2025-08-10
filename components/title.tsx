import { FC } from 'react';
import { XIcon } from './icons/x-icon';
import { MailIcon } from './icons/mail-icon';
import { LinkedInIcon } from './icons/linkedin-icon';
import { GitHubIcon } from './icons/github-icon';

interface TitleProps {
  title: string;
}

export const Title: FC<Readonly<TitleProps>> = ({ title }) => {
  const logoClassNameBase =
    'h-10 w-10 text-lightmode-text hover:text-lightmode-text-high-contrast dark:text-darkmode-text dark:hover:text-darkmode-text-high-contrast transition duration-200';

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
            href="https://clay.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Go to the external page for Clay"
          >
            Clay
          </a>
        </p>
      </div>
      <div className="flex gap-12 items-center max-thin:gap-8">
        <a
          href="https://linkedin.com/in/danerwilliams"
          target="_blank"
          rel="noreferrer"
          aria-label="Go to Dane's LinkedIn profile"
        >
          <LinkedInIcon className={logoClassNameBase} />
        </a>
        <a
          href="https://x.com/danerwilliams"
          target="_blank"
          rel="noreferrer"
          aria-label="Go to Dane's X profile"
        >
          <XIcon className={logoClassNameBase} />
        </a>
        <a
          href="https://github.com/danerwilliams"
          target="_blank"
          rel="noreferrer"
          aria-label="Go to Dane's GitHub profile"
        >
          <GitHubIcon className={logoClassNameBase} />
        </a>
        <a
          href="mailto:hey@dane.to"
          target="_blank"
          rel="noreferrer"
          aria-label="Send an email to Dane"
        >
          <MailIcon className={logoClassNameBase} />
        </a>
      </div>
    </div>
  );
};
