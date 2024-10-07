/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {Pressable, ScrollView, Text, View} from 'react-native';
// import Navbar from '../../common-components/navbar';
import vehicalStyle from './style/style';

function ManagingVehicle() {
  return (
    <>
      <ScrollView style={vehicalStyle.scroll}>
        {/* here add go back componnet */}
        {/* add vehical list also if vehical list is empty show this ready to drive*/}
        {/* <Navbar showSignInButtons={true} /> */}
        <View style={vehicalStyle.noRecordView}>
          <Text style={vehicalStyle.readyView}>Ready to drive</Text>
          <Text style={vehicalStyle.noVehical}>
            No vehical added please add a vehical
          </Text>
        </View>
      </ScrollView>
      <View style={vehicalStyle.addButtonView}>
        <Pressable style={vehicalStyle.button}>
          <Text>+</Text>
        </Pressable>
      </View>
    </>
  );
}

export default ManagingVehicle;
