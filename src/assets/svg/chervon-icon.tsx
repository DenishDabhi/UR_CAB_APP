import React from 'react';
import {G, Path, Svg} from 'react-native-svg';

const ChevronDownIcon = ({height, width, color}: any) => {
  return (
    <Svg
      width={width ?? 24}
      height={height ?? 24}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M6 9L12 15L18 9"
        stroke={color ?? 'black'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default ChevronDownIcon;
