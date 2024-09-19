import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import {spashRegisterStyle} from './style';
import HeadingAndDesc from '../../component/heading';
import PrimaryButton from '../../component/primary-button';

const SpashScreenRegister = () => {
  return (
    <ScrollView style={spashRegisterStyle.scrollView}>
      <View style={spashRegisterStyle.container}>
        <View style={spashRegisterStyle.imageView}>
          <Image
            source={require('../../assets/images/spash-screen-image.png')}
            style={spashRegisterStyle.image}
          />
        </View>
        <View style={{gap: 30}}>
          <HeadingAndDesc
            heading={'Travel with safety'}
            desc={'Get your cab and convenience for 24x 7'}
          />
          <View style={spashRegisterStyle.buttonView}>
            <PrimaryButton title={'Register'}/>
            <PrimaryButton
              title={'Log in'}
              containerStyle={{backgroundColor: '#07009C1C'}}
              style={{color: '#07009C'}}
            />
            <Text style={spashRegisterStyle.descText}>Proceed as a guest</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SpashScreenRegister;
