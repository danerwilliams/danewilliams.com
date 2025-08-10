import { GrainGradient } from '@paper-design/shaders-react';

interface GrainGradientShaderProps {
  lightModeColors?: [string, string];
  darkModeColors?: [string, string];
  isDarkMode?: boolean;
  width?: string | number;
  height?: string | number;
  speed?: number;
  scale?: number;
  rotation?: number;
  offsetX?: number;
  offsetY?: number;
  softness?: number;
  intensity?: number;
  noise?: number;
  shape?:
    | 'wave'
    | 'dots'
    | 'truchet'
    | 'corners'
    | 'ripple'
    | 'blob'
    | 'sphere';
  style?: React.CSSProperties;
}

export default function GrainGradientShader({
  lightModeColors = ['#0090ff', '#6e56cf'], // blue9 to violet9
  darkModeColors = ['#0090ff', '#12a594'], // blue9 to teal9
  isDarkMode = false,
  width = '100%',
  height = '100%',
  speed = 0.3,
  scale = 1,
  rotation = 0,
  offsetX = 0,
  offsetY = 0,
  softness = 0.7,
  intensity = 0.15,
  noise = 0.5,
  shape = 'wave',
  style = {},
  ...props
}: GrainGradientShaderProps) {
  const colors = isDarkMode ? darkModeColors : lightModeColors;

  return (
    <GrainGradient
      colors={colors}
      colorBack="#000A0F"
      speed={speed}
      scale={scale}
      rotation={rotation}
      offsetX={offsetX}
      offsetY={offsetY}
      softness={softness}
      intensity={intensity}
      noise={noise}
      shape={shape}
      {...props}
      style={{
        width,
        height,
        backgroundColor: '#00000000',
        ...style,
      }}
    />
  );
}
