import {StyleSheet} from 'react-native';

export const verificationDescriptionStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    gap: 20,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  mainView: {
    flex: 1,
    gap: 25,
    alignItems: 'center',
    justifyContent: 'center',
    width:"100%"
  },
  otpDisplay: {
    width:"80%",
    fontFamily: 'Lato',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 25,
    color: '#A0A4A8',
    // marginLeft: 10,
  },
});
