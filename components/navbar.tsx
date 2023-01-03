import { FC, useState } from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PlusIcon, SunIcon, FaceIcon } from '@radix-ui/react-icons';

interface NavbarProps {}

const pages = ['about', 'journal', 'projects', 'gallery'];

export const Navbar: FC<Readonly<NavbarProps>> = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="hidden md:block">
        <DesktopNavBar />
      </div>

      <div className="md:hidden">
        <MobileNavDrawer />
      </div>
    </div>
  );
};

const DesktopNavBar = () => {
  const [hovered, setHovered] = useState<string | undefined>();

  return (
    <div className="flex items-center justify-between mt-4">
      <Link href="/">
        <a>
          <FaceIcon className="w-6 h-6 ml-6" />
        </a>
      </Link>

      <div className="flex flex-col">
        <NavigationMenu.Root>
          <NavigationMenu.List className="flex gap-28">
            {pages.map((page) => {
              const isHovered = hovered === page;

              return (
                <motion.div
                  onHoverStart={() => setHovered(page)}
                  onHoverEnd={() => setHovered(undefined)}
                  animate={{ y: isHovered ? -4 : 0 }}
                  key={page}
                >
                  <Link href={`/${page}`}>
                    <a>
                      <NavigationMenu.Item className="py-2 px-2">
                        {`${page.charAt(0).toUpperCase()}${page.slice(1)}`}
                      </NavigationMenu.Item>
                    </a>
                  </Link>
                </motion.div>
              );
            })}
          </NavigationMenu.List>
        </NavigationMenu.Root>
      </div>
      <SunIcon className="h-6 w-6 mr-6" />
    </div>
  );
};

const MobileNavDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && <div className="absolute w-screen h-screen backdrop-blur" />}
      <div className="flex items-center justify-between mt-4 ">
        <div>
          <Link href="/">
            <a>
              <FaceIcon className="w-8 h-8 ml-6" />
            </a>
          </Link>
        </div>
        <div className="relative z-1">
          <DropdownMenu.Root onOpenChange={setIsOpen}>
            <DropdownMenu.Trigger asChild>
              <button className="mr-4">
                <motion.div animate={{ rotate: isOpen ? 45 : 0 }}>
                  <PlusIcon className="h-10 w-10 stroke-2 !z-[100]" />
                </motion.div>
              </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Content className="text-right text-3xl mr-6 mt-6">
              {pages.map((page) => (
                <Link href={`/${page}`} key={page}>
                  <a onClick={() => setIsOpen}>
                    <DropdownMenu.Item className="mt-4">
                      {`${page.charAt(0).toUpperCase()}${page.slice(1)}`}
                    </DropdownMenu.Item>
                  </a>
                </Link>
              ))}
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </div>
      </div>
    </>
  );
};
