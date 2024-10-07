import {StyleSheet} from 'react-native';

export const spashRegisterStyle = StyleSheet.create({
  scrollView: {
    backgroundColor: '#fff',
  },
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    // alignItems: 'center',
    // justifyContent: 'center',
    // marginTop: 80,
    paddingVertical: 60,
  },
  imageView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 348,
    width: 428,
  },
  buttonView: {
    width: '100%',
    gap: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  descText: {
    color: '#272727',
    fontSize: 14,
    fontFamily: 'Lato',
    lineHeight: 25,
    // textAlign: 'center',
    fontWeight: '700',
  },
});
