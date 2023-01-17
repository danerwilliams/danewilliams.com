import { FC, useCallback, useEffect, useState } from 'react';

const locations = [
  { emoji: '🏄‍♂️', city: 'Orange County, CA' },
  { emoji: '🌲', city: 'Seattle, WA' },
  { emoji: '🍺', city: 'South Bend, IN' },
  { emoji: '🌈', city: 'Bay Area, CA' },
  { emoji: '🌮', city: 'San Diego, CA' },
];

interface PreviousCitiesProps {}

export const PreviousCities: FC<Readonly<PreviousCitiesProps>> = () => {
  const [currentCityIndex, setCurrentCityIndex] = useState(0);

  const rotateCity = useCallback(() => {
    var idx = Math.floor(Math.random() * (locations.length - 1));
    if (idx >= currentCityIndex) idx++;
    setCurrentCityIndex(idx);
  }, [currentCityIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      rotateCity();
    }, 8000);

    return () => clearInterval(interval);
  }, [rotateCity, currentCityIndex]);

  return (
    <span
      className="inline-flex justify-left w-44"
      onClick={() => {
        rotateCity();
      }}
    >
      <span className="flex rounded-md duration-200 select-none hover:cursor-pointer hover:bg-lightmode-component-hover hover:dark:bg-darkmode-component-hover">
        {locations.map((location, index) => {
          return (
            <span
              className={`${
                index === currentCityIndex
                  ? 'mx-1 text-lightmode-text-high-contrast dark:text-darkmode-text-high-contrast'
                  : 'mx-1 absolute invisible'
              }`}
              key={location.city}
            >
              <span
                className={`${
                  index === currentCityIndex
                    ? 'mr-2 duration-200'
                    : 'mr-2 absolute invisible opacity-0 -translate-y-3 duration-200'
                }`}
              >
                {location.emoji}
              </span>
              <span className={`${index === currentCityIndex ? '' : 'hidden'}`}>
                {location.city}
              </span>
            </span>
          );
        })}
      </span>
      .
    </span>
  );
};
