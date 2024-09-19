import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import OTPTextInput from 'react-native-otp-textinput';
import {verificationStyle} from './style';
import GoBackNavBar from '../../component/go-back-navbar';
import HeadingAndDesc from '../../component/heading';
import PrimaryButton from '../../component/primary-button';

const Verification = () => {
  const [otp, setOtp] = useState('');

  const handleOtpChange = (otp: any) => {
    setOtp(otp);
  };

  return (
    <View style={verificationStyle.container}>
      <GoBackNavBar />
      <ScrollView>
        <View style={verificationStyle.mainView}>
          <View style={verificationStyle.otpView}>
            <HeadingAndDesc
              heading={'Verify moblie number'}
              desc={'Enter the 4 digit code sent to this ***********34'}
            />
            <OTPTextInput
              handleTextChange={handleOtpChange}
              textInputStyle={verificationStyle.otpInput}
              tintColor="#000"
              defaultValue={otp}
              containerStyle={{width: '100%'}}
            />
          </View>
          <View style={verificationStyle.otpDisplayView}>
            <Text style={verificationStyle.otpDisplay}>
              Didn’t get any mail?
            </Text>
            <Text style={[verificationStyle.otpDisplay, {color: '#EDBD00'}]}>
              Resend code
            </Text>
          </View>
        </View>
      </ScrollView>
      <PrimaryButton title={'Verify'} containerStyle={{width: '100%'}} />
    </View>
  );
};

export default Verification;
