import { FC } from 'react';

interface SectionHeaderProps {
  text: string;
}

export const SectionHeader: FC<Readonly<SectionHeaderProps>> = ({ text }) => (
  <h2 className="text-3xl font-medium text-lightmode-text-high-contrast dark:text-darkmode-text-high-contrast">
    {text}
  </h2>
);
