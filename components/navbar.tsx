import { FC, useState } from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PlusIcon, FaceIcon } from '@radix-ui/react-icons';
import { useRouter } from 'next/router';
import { ThemeToggle } from './theme-toggle';
import { DaneIcon } from './icons/dane-icon';

const pages = ['about', 'journal', 'projects', 'gallery'];

interface NavbarProps {}

export const Navbar: FC<Readonly<NavbarProps>> = () => {
  const { pathname } = useRouter();
  const currentPage = pathname.split('/')[1];

  return (
    <div className="flex flex-col w-full">
      <div className="hidden md:block">
        <DesktopNavBar currentPage={currentPage} />
      </div>

      <div className="md:hidden">
        <MobileNavDrawer currentPage={currentPage} />
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
        <DaneIcon className="w-6 h-6 ml-6 text-lightmode-text hover:text-lightmode-text-high-contrast dark:text-darkmode-text dark:hover:text-darkmode-text-high-contrast transition duration-200" />
      </Link>

      <div className="flex flex-col">
        <NavigationMenu.Root>
          <NavigationMenu.List className="flex gap-40 max-lg:gap-24">
            {pages.map((page) => (
              <Link href={`/${page}`} key={page}>
                <NavigationMenu.Item
                  className={`p-2 hover:text-lightmode-text-high-contrast 
                    hover:dark:text-darkmode-text-high-contrast transition duration-200 ${
                      currentPage === page
                        ? 'text-lightmode-text-high-contrast dark:text-darkmode-text-high-contrast'
                        : 'text-lightmode-text dark:text-darkmode-text'
                    }`}
                >
                  {`${page.charAt(0).toUpperCase()}${page.slice(1)}`}
                </NavigationMenu.Item>
              </Link>
            ))}
          </NavigationMenu.List>
        </NavigationMenu.Root>
      </div>
      <div className="flex items-center mr-6">
        <ThemeToggle height={6} width={6} />
      </div>
    </div>
  );
};

interface MobileNavDrawerProps {
  currentPage: string;
}

const MobileNavDrawer: FC<Readonly<MobileNavDrawerProps>> = ({
  currentPage,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && <div className="absolute w-screen h-screen backdrop-blur" />}
      <div className="flex items-center justify-between mt-4 ">
        <div>
          <Link href="/">
            <DaneIcon className="w-8 h-8 ml-6" />
          </Link>
        </div>
        <div className="relative z-1">
          <DropdownMenu.Root onOpenChange={setIsOpen}>
            <DropdownMenu.Trigger asChild>
              <button className="mr-4">
                <motion.div animate={{ rotate: isOpen ? -45 : 0 }}>
                  <PlusIcon className="h-10 w-10 stroke-2 !z-[100]" />
                </motion.div>
              </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Content className="text-right text-4xl mr-6 mt-6">
              {pages.map((page) => (
                <Link href={`/${page}`} key={page} onClick={() => setIsOpen}>
                  <DropdownMenu.Item
                    className={`mt-4 ${
                      currentPage === page
                        ? 'text-lightmode-text-high-contrast dark:text-darkmode-text-high-contrast'
                        : 'text-lightmode-text dark:text-darkmode-text'
                    }`}
                  >
                    {`${page.charAt(0).toUpperCase()}${page.slice(1)}`}
                  </DropdownMenu.Item>
                </Link>
              ))}
              <DropdownMenu.Item className="mt-4 flex items-center justify-end">
                <ThemeToggle height={10} width={10} />
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </div>
      </div>
    </>
  );
};
