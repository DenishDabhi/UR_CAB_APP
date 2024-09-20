import React from 'react';
import {ClipPath, Defs, G, Path, Rect, Svg} from 'react-native-svg';

const CloseIcon = ({height, width, color}: any) => {
  return (
    <Svg width={height ?? 24} height={width ?? 24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M18 6L6 18"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6 6L18 18"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default CloseIcon;
