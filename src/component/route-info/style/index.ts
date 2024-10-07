import {StyleSheet} from 'react-native';

export const routeInfoStyle = StyleSheet.create({
  container: {
    padding: 20,
    gap: 10,
    width: '100%',
  },
  mainView: {
    width: '100%',
    gap: 20,
    flexDirection: 'row',
  },
  titleView: {
    gap: 10,
    width: '90%',
  },
  titleText: {
    fontFamily: 'Lato-Bold',
    fontWeight: '700',
    fontSize: 14,
    // lineHeight: 25,
    color: '#344054',
    width: '100%',
  },
  descText: {
    fontFamily: 'Lato',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 25,
    color: '#6C6C6C',
    width: '100%',
  },
  horizontal: {
    borderBottomColor: '#EEEEEE',
    borderBottomWidth: 1,
    width: '100%',
  },
});
