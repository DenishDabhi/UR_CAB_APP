import {StyleSheet} from 'react-native';

const goBackNavStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    // paddingLeft:30,
  },
  backIcon: {
    height: 50,
    width: 50,
    borderRadius: 100,
    backgroundColor: '#F7F7F7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontFamily: 'Lato',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 30,
  },
});

export default goBackNavStyle;
