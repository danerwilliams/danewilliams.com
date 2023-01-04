import { FC, useEffect, useState } from 'react';
import * as Switch from '@radix-ui/react-switch';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';

interface ThemeToggleProps {
  height: number;
  width: number;
}

export const ThemeToggle: FC<Readonly<ThemeToggleProps>> = ({
  height,
  width,
}) => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { resolvedTheme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState<boolean>(
    resolvedTheme === 'dark' ? true : false,
  );

  const handleOnCheckedChange = (): void => {
    if (resolvedTheme === 'dark') {
      setTheme('light');
      setIsDark(false);
    } else {
      setTheme('dark');
      setIsDark(true);
    }
  };

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const iconClassName = `h-${height} w-${width} hover:dark:text-darkmode-text-high-contrast hover:text-lightmode-text-high-contrast transition duration-300`;

  return (
    <>
      <Switch.Root checked={isDark} onCheckedChange={handleOnCheckedChange}>
        <Switch.Thumb>
          {isDark ? (
            <SunIcon className={iconClassName} />
          ) : (
            <MoonIcon className={iconClassName} />
          )}
        </Switch.Thumb>
      </Switch.Root>
    </>
  );
};
