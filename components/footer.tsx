import { FC } from 'react';

interface FooterProps {}

export const Footer: FC<Readonly<FooterProps>> = () => {
  return (
    <div className="text-lightmode-slate11 dark:text-darkmode-slate11">
      say <a href="mailto:hey@dane.to">hey@dane.to</a> or dm{' '}
      <a href="https://twitter.com/danerwilliams">@danerwilliams</a> to reach
      out
    </div>
  );
};
