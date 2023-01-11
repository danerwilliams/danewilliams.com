import { FC } from 'react';

interface PageHeaderProps {
  question: string;
}

export const PageHeader: FC<Readonly<PageHeaderProps>> = ({ question }) => (
  <h1 className="text-5xl font-medium text-lightmode-text-high-contrast dark:text-darkmode-text-high-contrast">
    {question}
  </h1>
);
