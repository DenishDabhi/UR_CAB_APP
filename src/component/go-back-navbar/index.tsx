import React from 'react';
import {Pressable, Text, View} from 'react-native';
import LeftArrowIcon from '../../assets/svg/left-arrow';
import goBackNavStyle from './style';

const GoBackNavBar = (props:{title?:any}) => {
  return (
    <View style={goBackNavStyle.container}>
      <Pressable style={goBackNavStyle.backIcon}>
        <LeftArrowIcon />
      </Pressable>
      <Text style={goBackNavStyle.titleText}>{props.title}</Text>
    </View>
  );
};

export default GoBackNavBar;
