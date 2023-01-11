import { FC } from 'react';

interface WorkosIconProps {
  className?: string;
}

export const WorkosIcon: FC<Readonly<WorkosIconProps>> = ({ className }) => (
  <svg
    className={className}
    width="100%"
    height="100%"
    viewBox="0 0 313 288"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M37 144C37 148.56 38.2 153.12 40.52 157.04L82.5999 229.92C86.9199 237.36 93.4799 243.44 101.64 246.16C117.72 251.52 134.36 244.64 142.28 230.88L152.44 213.28L112.36 144L154.68 70.64L164.84 53.04C167.88 47.76 171.96 43.44 176.76 40H172.36H111.48C100.04 40 89.4799 46.08 83.7999 56L40.52 130.96C38.2 134.88 37 139.44 37 144Z"
      fill="currentColor"
      fill-rule="evenodd"
      clip-rule="evenodd"
    />
    <path
      d="M277 143.999C277 139.439 275.8 134.879 273.48 130.959L230.84 57.1192C222.92 43.4392 206.28 36.5592 190.2 41.8392C182.04 44.5592 175.48 50.6392 171.16 58.0792L161.56 74.6392L201.64 143.999L159.32 217.359L149.16 234.959C146.12 240.159 142.04 244.559 137.24 247.999H141.64H202.52C213.96 247.999 224.52 241.919 230.2 231.999L273.48 157.039C275.8 153.119 277 148.559 277 143.999Z"
      fill="currentColor"
      fill-rule="evenodd"
      clip-rule="evenodd"
    />
  </svg>
);
