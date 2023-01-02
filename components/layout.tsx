import { FC, ReactNode } from 'react';
import { Navbar } from './navbar';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<Readonly<LayoutProps>> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen items-center bg-lightmode-slate1 dark:bg-darkmode-slate1">
      <Navbar />
      <main className="grow">{children}</main>
    </div>
  );
};
