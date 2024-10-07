import React from "react";
import { ClipPath, Defs, G, Path, Rect, Svg } from "react-native-svg";

const PasswordIcon = ({ height, width, color }: any) => {
  return (
    <Svg
      width={width ?? 16}
      height={height ?? 16}
      viewBox="0 0 16 16"
      fill="none"
    >
      <G clipPath="url(#clip0_600_297)">
        <Path
          d="M8.00002 9.33317C8.7364 9.33317 9.33335 8.73622 9.33335 7.99984C9.33335 7.26346 8.7364 6.6665 8.00002 6.6665C7.26364 6.6665 6.66669 7.26346 6.66669 7.99984C6.66669 8.73622 7.26364 9.33317 8.00002 9.33317Z"
          stroke="#848484"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M14.6666 8.00016C12.8886 11.1115 10.6666 12.6668 7.99998 12.6668C5.33331 12.6668 3.11131 11.1115 1.33331 8.00016C3.11131 4.88883 5.33331 3.3335 7.99998 3.3335C10.6666 3.3335 12.8886 4.88883 14.6666 8.00016Z"
          stroke="#848484"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_600_297">
          <Rect width="16" height="16" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default PasswordIcon;