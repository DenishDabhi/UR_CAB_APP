import {View, Text} from 'react-native';
import React from 'react';
import {headingAndDescStyle} from './style';

const HeadingAndDesc = (props: { heading: any, desc:any }) => {
  return (
    <View style={headingAndDescStyle.mainView}>
      <Text style={headingAndDescStyle.heading}>{props.heading}</Text>
      <Text style={headingAndDescStyle.desc}>{props.desc}</Text>
    </View>
  );
};

export default HeadingAndDesc;
