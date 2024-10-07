import React, { useState } from "react";
import { Pressable, Text, TextInput, TextInputProps, View } from "react-native";
import inputStyle from "./style";
interface InputProps extends TextInputProps {
  lable?: any;
  iconLeft?: any;
  icon?: any;
  onIconLeftPress?: any;
  styleContainer?: any;
  style?: any;
  onIconPress?: any;
  iconLeftStyle?: any;
  inputStyle?: any;
}
const InputComponent: React.FC<InputProps> = (props) => {
  const [showpass, setShowpass] = useState(false);
  return (
    <View style={{ gap: 6 }}>
      {props.lable && <Text style={inputStyle.lableStyle}>{props.lable}</Text>}
      <View
        style={[
          inputStyle.inputContainer,
          props.icon && { padding: 15 },
          { ...props.styleContainer },
        ]}
      >
        {props.iconLeft && (
          <Pressable
            onPress={props.onIconLeftPress}
            style={[{ paddingLeft: 2.5 }, props.iconLeftStyle]}
          >
            {props.iconLeft}
          </Pressable>
        )}
        <TextInput
          secureTextEntry={showpass ? true : false}
          placeholderTextColor={"#000000"}
          style={[
            inputStyle.inputField,
            { ...props.style },
            props.icon && { paddingRight: 5 },
          ]}
          {...props}
        />
        <Pressable
          style={{ flexDirection: "row", alignItems: "center", gap: 2 }}
          onPress={() => setShowpass(!showpass)}
        >
          {props.icon && (
            <Pressable onPress={props.onIconPress}>{props.icon}</Pressable>
          )}
          {props.icon && (
            <Text style={inputStyle.hedeShow}>{`${
              showpass ? "Show" : "Hide"
            }`}</Text>
          )}
        </Pressable>
      </View>
    </View>
  );
};

export default InputComponent;