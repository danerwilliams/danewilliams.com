import { FC } from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

interface NavbarProps {}

export const Navbar: FC<Readonly<NavbarProps>> = () => {
  return (
    <NavigationMenu.Root className="flex text-lightmode-slate11 dark:text-darkmode-slate11">
      <NavigationMenu.List className="flex gap-32">
        <NavigationMenu.Item>
          <NavigationMenu.Link
            className="NavigationMenuLink"
            href="https://github.com/radix-ui"
          >
            About
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link
            className="NavigationMenuLink"
            href="https://github.com/radix-ui"
          >
            Journal
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link
            className="NavigationMenuLink"
            href="https://github.com/radix-ui"
          >
            Projects
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link
            className="NavigationMenuLink"
            href="https://github.com/radix-ui"
          >
            Gallery
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>

      <div className="ViewportPosition">
        <NavigationMenu.Viewport className="NavigationMenuViewport" />
      </div>
    </NavigationMenu.Root>
  );
};
