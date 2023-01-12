import { FC, useState } from 'react';

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

  const rotateCity = () => {
    var idx = Math.floor(Math.random() * (locations.length - 1));
    if (idx >= currentCityIndex) idx++;
    console.log({ idx });
    setCurrentCityIndex(idx);
  };

  return (
    <span
      className="inline-flex justify-center w-40"
      onClick={() => {
        rotateCity();
      }}
    >
      {locations.map((location, index) => {
        return (
          <span
            className={`${index === currentCityIndex ? '' : 'hidden'}`}
            key={location.city}
          >
            <span>{location.city}</span>
            <span className="ml-2">{location.emoji}</span>
          </span>
        );
      })}
    </span>
  );
};
