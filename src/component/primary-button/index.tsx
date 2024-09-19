import { Text, Pressable, PressableProps } from "react-native";
import React from "react";
import { primaryButtonStyle } from "./style";
interface PrimaryButtonPrps extends PressableProps {
  title?: string;
  containerStyle?: object;
  style?: object;
}
const PrimaryButton: React.FC<PrimaryButtonPrps> = (props) => {
  return (
    <Pressable
      style={[primaryButtonStyle.container, { ...props.containerStyle }]}
      {...props}
    >
      <Text style={[primaryButtonStyle.buttonText, { ...props.style }]}>
        {props.title}
      </Text>
    </Pressable>
  );
};

export default PrimaryButton;