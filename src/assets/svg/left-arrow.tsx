
import React from 'react';
import {Path, Svg} from 'react-native-svg';

const LeftArrowIcon = ({height, width, color}:any) => {
  return (
    <Svg
      width={width ? width : 25}
      height={height ? height : 25}
      viewBox="0 0 25 25"
      fill="none">
      <Path
        d="M12.1093 19.1094L5.10931 12.1094L12.1093 5.10938"
        stroke={color ?? "black"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.1093 12.1094H5.10931"
        stroke={color ?? "black"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default LeftArrowIcon;
