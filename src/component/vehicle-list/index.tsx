/* eslint-disable react-native/no-inline-styles */ /* eslint-disable prettier/prettier */
import {Image, Switch, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {vehicleListStyle} from './style/index';

const VehicleList = ({image, name, pfq}: any) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const SwithFunc = () => {
    setIsEnabled(!isEnabled);
  };
  return (
    <View style={vehicleListStyle.container}>
      <View style={vehicleListStyle.mainView}>
        <View style={vehicleListStyle.imageView}>
          <Image source={image} style={vehicleListStyle.image} />
        </View>
        <View style={{gap: 5}}>
          <View style={{gap: 5}}>
            <Text style={vehicleListStyle.texiView}>{name}</Text>
            <Text style={vehicleListStyle.pfqText}>{pfq}</Text>
          </View>
          <View style={vehicleListStyle.documentView}>
            <TouchableOpacity activeOpacity={0.5}>
              <Text style={vehicleListStyle.documentText}>Add Document</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5}>
              <Text style={vehicleListStyle.deleteText}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={vehicleListStyle.switchView}>
        <Text style={vehicleListStyle.switchText}>{`${
          isEnabled ? 'Enabled' : 'Disabled'
        }`}</Text>
        <Switch
          style={{transform: [{scaleX: 1.2}, {scaleY: 1.2}]}}
          trackColor={{false: '#F2F2F2', true: '#F2F2F2'}}
          thumbColor={isEnabled ? '#263238' : '#263238'}
          onValueChange={() => {
            SwithFunc();
          }}
          value={isEnabled}
        />
      </View>
    </View>
  );
};

export default VehicleList;
