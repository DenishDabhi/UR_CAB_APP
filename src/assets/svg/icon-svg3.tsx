import { View, Text } from "react-native";
import React from "react";
import { Path, Svg } from "react-native-svg";

const ICNCompassIcon = ({ height, width, color }: any) => {
  return (
    <Svg
      width={width ?? "20"}
      height={height ?? "19"}
      viewBox="0 0 20 19"
      fill="none"
    >
      <Path
        d="M18.452 0.986328L1.50404 9.86382H9.57449L9.57449 17.9343L18.452 0.986328Z"
        stroke={color ?? "#6C6C6C"}
        strokeWidth="1.712"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default ICNCompassIcon;
