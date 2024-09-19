import { View, Text } from "react-native";
import React from "react";
import { Path, Svg } from "react-native-svg";

const MenuIcon = ({ height, width, color }: any) => {
  return (
    <Svg
      width={width ?? "16"}
      height={height ?? "14"}
      viewBox="0 0 16 14"
      fill="none"
    >
      <Path
        d="M0.609314 0.442871H15.6093V2.10954H0.609314V0.442871ZM5.60931 6.27621H15.6093V7.94287H5.60931V6.27621ZM0.609314 12.1095H15.6093V13.7762H0.609314V12.1095Z"
        fill={color ?? "#6D6D6D"}
      />
    </Svg>
  );
};

export default MenuIcon;
