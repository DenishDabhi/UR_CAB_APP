import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {verificationDescriptionStyle} from './style';
import GoBackNavBar from '../../component/go-back-navbar';
import PrimaryButton from '../../component/primary-button';

const VerificationDescription = () => {
  return (
    <View style={verificationDescriptionStyle.container}>
      <GoBackNavBar title={'Legal consent'} />
      <ScrollView>
        <View style={verificationDescriptionStyle.mainView}>
          <Text style={verificationDescriptionStyle.otpDisplay}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed
            auctor arcu. Nulla facilisis, nulla in placerat mattis, mi nunc
            sollicitudin mauris, vel pretium arcu elit ut ligula. Aenean vel
            massa at arcu eleifend rhoncus. Integer lorem neque, mollis non
            tristique quis, egestas pharetra elit. In egestas sapien at nisi
            lobortis interdum. Morbi nec vehicula libero. Duis pellentesque
            purus dolor, ut faucibus quam congue eu. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Phasellus tristique varius tellus, et pulvinar lorem
            finibus vitae. Proin eu hendrerit risus, id sagittis mi. Nulla
            finibus rutrum tortor ut sagittis.
          </Text>
          <View>
            <Text style={verificationDescriptionStyle.otpDisplay}>
              Maecenas nunc enim, maximus a felis et, cursus porttitor odio. In
              dictum neque eget nulla semper semper. Integer in risus et nulla
              lobortis facilisis. Praesent volutpat id enim gravida eleifend.
              Vivamus non nisl euismod, rhoncus sapien at, mollis lacus. Sed vel
              magna ut eros
            </Text>
          </View>
        </View>
      </ScrollView>
      <PrimaryButton title={'Verify'} containerStyle={{width: '100%'}} />
    </View>
  );
};

export default VerificationDescription;
