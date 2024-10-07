import { View, Text } from "react-native";
import React, { forwardRef } from "react";
import SelectDropdown from "react-native-select-dropdown";
import ChevronDownIcon from "../../assets/svg/chervon-icon";
import { selectBoxStyle } from "./style";

//This is the select box component, which is used wherever a form has a select box.
const CommonSelectBox = forwardRef(
  (
    {
      data,
      defaultValue,
      title,
      onSelect,
      icon,
      dropdownHeight,
      dropdownWidth,
      selectBoxButtonStyle,
      disabled,
      textContainer,
      textStyle,
    }:any,ref : any
  ) => {
    return (
      <SelectDropdown
        data={data || []}
        onSelect={(selectedItem, index) => {
          if (onSelect) {
            onSelect(selectedItem, index);
          }
        }}
        ref={ref}
        renderButton={(selectedItem) => (
          <View style={[selectBoxStyle.selectBox, { ...selectBoxButtonStyle }]}>
            <View
              style={[
                selectBoxStyle.selectBoxTextContainer,
                { ...textContainer },
              ]}
            >
              {icon}
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={[
                  selectBoxStyle.selectBoxText,
                  {
                    color: selectedItem
                      ? 'black'
                      : '#303030',
                      opacity: selectedItem ? 1 : 0.5
                  },
                  { ...textStyle },
                ]}
              >
                {selectedItem || title}
              </Text>
            </View>
            <ChevronDownIcon height={24} width={24}/>
          </View>
        )}
        defaultValue={defaultValue}
        dropdownStyle={{
          borderRadius: 5,
          height: dropdownHeight ?? 250,
          padding: 5,
          backgroundColor: 'white',
          width: dropdownWidth ?? 250,
        }}
        disabled={disabled}
        renderItem={(item, _, isSelected) => (
          <View
            style={[
              selectBoxStyle.itemList,
              {
                backgroundColor: isSelected
                  ? "lightgray"
                  : 'white',
              },
            ]}
          >
            <Text style={selectBoxStyle.itemListText}>{item}</Text>
          </View>
        )}
      />
    );
  }
);

export default CommonSelectBox;
