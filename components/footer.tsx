import { FC } from 'react';

interface FooterProps {}

export const Footer: FC<Readonly<FooterProps>> = () => (
  <div className="flex flex-col w-full">
    <div className="hidden md:block">
      <div className="h-[40px] mb-4" />
    </div>

    <div className="md:hidden">
      <div className="h-[46.5px] mb-4" />
    </div>
  </div>
);
