import React from 'react';
import {Path, Svg} from 'react-native-svg';

const PluseIcon = ({height, width, color}: {height?: number; width?: number; color?: string}) => {
  return (
    <Svg
      width={width ? width : 48}
      height={height ? height : 48}
      viewBox="0 0 48 48"
      fill="none">
      <Path
        d="M10 24H38"
        stroke={color ?? 'white'}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M24 10V38"
        stroke={color ?? 'white'}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default PluseIcon;
