import {StyleSheet} from 'react-native';

export const verificationStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    gap: 20,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  mainView: {
    // flex: 1,
    gap: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  otpView: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    paddingTop: 50,
  },
  otpInput: {
    width: 70,
    height: 70,
    borderWidth: 1.47,
    borderBottomWidth:1.47,
    borderRadius: 8,
    textAlign: 'center',
    borderColor: '#DFDFDF',
  },
  otpDisplayView: {
    flexDirection: 'row',
    width: '100%',
  },
  otpDisplay: {
    fontFamily: 'Lato',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 20,
    color: '#A0A4A8',
    marginLeft: 10,
  },
});
