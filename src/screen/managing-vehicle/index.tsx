/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {Pressable, ScrollView, Text, View} from 'react-native';
// import Navbar from '../../common-components/navbar';
import vehicalStyle from './style';
import {useNavigation} from '@react-navigation/native';
import PluseIcon from '../../assets/svg/pluse-icon';
import VehicleList from '../../component/vehicle-list';
import GoBackNavBar from '../../component/go-back-navbar';

function ManagingVehicle() {
  const nav = useNavigation<any>();
  const vehicleListData = [
    {
      id: 1,
      image: require('../../assets/images/vehicleImg.png'),
      name: 'Taxi/car 1',
      pfq: 'PFQ 5321',
    },
    {
      id: 2,
      image: require('../../assets/images/vehicleImg.png'),
      name: 'Taxi/car 1',
      pfq: 'PFQ 5321',
    },
  ];
  return (
    <>
      <ScrollView style={vehicalStyle.scroll}>
        <View style={{marginLeft: 20}}>
        <GoBackNavBar title={'Vehicle'} />
        </View>
        <View style={{marginTop:27}}>
        {vehicleListData.length > 0 ? (
          vehicleListData?.map(item => (
            <View key={item.id} style={vehicalStyle.mainView}>
              <VehicleList image={item.image} name={item.name} pfq={item.pfq} />
            </View>
          ))
        ) : (
          <View style={vehicalStyle.noRecordView}>
            <Text style={vehicalStyle.readyView}>Ready to drive</Text>
            <Text style={vehicalStyle.noVehical}>
              No vehicle added please add a vehicle
            </Text>
          </View>
        )}
        </View>
      </ScrollView>
      <View style={vehicalStyle.addButtonView}>
        <Pressable
          style={vehicalStyle.button}
          onPress={() => {
            nav.openDrawer();
          }}>
          <PluseIcon />
        </Pressable>
      </View>
    </>
  );
}

export default ManagingVehicle;
