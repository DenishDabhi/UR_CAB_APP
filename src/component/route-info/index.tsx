import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {routeInfoStyle} from './style';

const RouteInfo = (props: {icon: any; head: any; desc: any}) => {
  return (
    <View style={routeInfoStyle.container}>
      <Pressable style={routeInfoStyle.mainView}>
        <Text>{props.icon}</Text>
        <View style={routeInfoStyle.titleView}>
          <Text style={routeInfoStyle.titleText}>{props.head}</Text>
          <Text style={routeInfoStyle.descText}>{props.desc}</Text>
        </View>
      </Pressable>
      <View style={routeInfoStyle.horizontal} />
    </View>
  );
};

export default RouteInfo;
