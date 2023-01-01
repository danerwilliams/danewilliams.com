import { FC, useState } from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface NavbarProps {}

const pages = ['about', 'journal', 'projects', 'gallery'];

export const Navbar: FC<Readonly<NavbarProps>> = () => {
  const [hovered, setHovered] = useState<string | undefined>();

  return (
    <NavigationMenu.Root className="flex mt-6 text-lightmode-slate11 dark:text-darkmode-slate11">
      <NavigationMenu.List className="flex gap-32">
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
                  <NavigationMenu.Item className="py-4 px-2">
                    {`${page.charAt(0).toUpperCase()}${page.slice(1)}`}
                  </NavigationMenu.Item>
                </a>
              </Link>
            </motion.div>
          );
        })}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};
