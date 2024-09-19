import {StyleSheet} from 'react-native';

export const headingAndDescStyle = StyleSheet.create({
  mainView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    gap: 10,
  },
  heading: {
    width: '90%',
    fontFamily: 'Lato-Black',
    fontWeight: '900',
    fontSize: 20,
    lineHeight: 24,
    textAlign: 'center',
    color: '#272727',
  },
  desc: {
    width: '90%',
    fontFamily: 'Lato-Regular',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 25,
    textAlign: 'center',
    color: '#848484',
  },
});
