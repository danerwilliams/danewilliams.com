import { FC, useState } from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PlusIcon, FaceIcon } from '@radix-ui/react-icons';
import { useRouter } from 'next/router';
import { ThemeToggle } from './theme-toggle';

interface FooterProps {}

export const Footer: FC<Readonly<FooterProps>> = () => {
  const { pathname } = useRouter();
  const currentPage = pathname.split('/')[1];

  return (
    <div className="flex flex-col w-full">
      <div className="hidden md:block">
        <div className="h-[40px] mb-4" />
      </div>

      <div className="md:hidden">
        <div className="h-[46.5px] mb-4" />
      </div>
    </div>
  );
};

interface DesktopNavBarProps {
  currentPage: string;
}

const DesktopNavBar: FC<Readonly<DesktopNavBarProps>> = ({ currentPage }) => {
  return (
    <div className="flex font-heading items-center justify-between mt-4">
      <Link href="/">
        <a>
          <FaceIcon className="w-6 h-6 ml-6" />
        </a>
      </Link>

      <div className="flex flex-col">
        <NavigationMenu.Root>
          <NavigationMenu.List className="flex gap-28"></NavigationMenu.List>
        </NavigationMenu.Root>
      </div>
      <div className="flex items-center mr-6">
        <ThemeToggle height={6} width={6} />
      </div>
    </div>
  );
};
