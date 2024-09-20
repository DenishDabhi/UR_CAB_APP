import React from 'react';
import {Path, Svg} from 'react-native-svg';

const EarningIcon = ({
  height,
  width,
  color,
}: {
  height?: number;
  width?: number;
  color?: string;
}) => {
  return (
    <Svg width={width ?? 24} height={height ?? 24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M11 15H13C13.5304 15 14.0391 14.7893 14.4142 14.4142C14.7893 14.0391 15 13.5304 15 13C15 12.4696 14.7893 11.9609 14.4142 11.5858C14.0391 11.2107 13.5304 11 13 11H10C9.4 11 8.9 11.2 8.6 11.6L3 17"
        stroke={color ?? "#07009C"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7 20.9998L8.6 19.5998C8.9 19.1998 9.4 18.9998 10 18.9998H14C15.1 18.9998 16.1 18.5998 16.8 17.7998L21.4 13.3998C21.7859 13.0351 22.0111 12.5321 22.0261 12.0014C22.0411 11.4706 21.8447 10.9557 21.48 10.5698C21.1153 10.1839 20.6123 9.95867 20.0816 9.94367C19.5508 9.92867 19.0359 10.1251 18.65 10.4898L14.45 14.3898"
        stroke={color ?? "#07009C"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 16L8 22"
        stroke={color ?? "#07009C"}
        strokeWidth="2"
        strokeLinecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M16.0001 11.9001C17.6017 11.9001 18.9001 10.6017 18.9001 9.0001C18.9001 7.39847 17.6017 6.1001 16.0001 6.1001C14.3985 6.1001 13.1001 7.39847 13.1001 9.0001C13.1001 10.6017 14.3985 11.9001 16.0001 11.9001Z"
        stroke={color ?? "#07009C"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6 8C7.65685 8 9 6.65685 9 5C9 3.34315 7.65685 2 6 2C4.34315 2 3 3.34315 3 5C3 6.65685 4.34315 8 6 8Z"
        stroke={color ?? "#07009C"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default EarningIcon;
