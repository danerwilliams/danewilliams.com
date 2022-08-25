import { FC, ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<Readonly<LayoutProps>> = ({ children }) => {
  return (
    <div className="bg-lightmode-slate1 dark:bg-darkmode-slate1">
      {/* TODO: Create Header */}
      <div className="flex flex-col min-h-screen">
        <main>{children}</main>
      </div>
      {/* TODO: Create Footer */}
    </div>
  );
};
