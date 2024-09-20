import React from 'react';
import { Path, Svg} from 'react-native-svg';

const StarIcon = ({height, width, color}: any) => {
  return (
    <Svg
      width={width ?? 19}
      height={height ?? 19}
      viewBox="0 0 19 19"
      fill="none"
      >
      <Path
        d="M3.60494 18.9L5.15545 11.9102L0 7.21084L6.791 6.5925L9.45063 0L12.1103 6.59119L18.9 7.20952L13.7445 11.9089L15.2963 18.8987L9.45063 15.1887L3.60494 18.9Z"
        fill={color ?? 'white'}
      />
    </Svg>
  );
};

export default StarIcon;
