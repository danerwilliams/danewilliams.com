import { FC, ReactNode } from 'react';

interface PageProps {
  children: ReactNode;
}

export const Page: FC<Readonly<PageProps>> = ({ children }) => (
  <div className="relative mt-6 lg:max-w-[743.5px] md:max-w-[551.5px] max-w-full">
    {children}
  </div>
);
