/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

export const mobileMenuStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  mainView: {
    height: 210,
    backgroundColor: '#f5c527',
    justifyContent: 'center',
  },
  iconView: {
    position: 'absolute',
    right: 15,
    top: 15,
  },
  imageView: {
    padding: 20,
    width: '60%',
    alignItems: 'center',
    gap: 15,
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
    borderRadius: 100,
  },
  profileName: {
    fontSize: 14,
    color: 'white',
    // fontFamily:'lato'
  },
  stars: {
    fontSize: 18,
    color: 'white',
    //  fontFamily: 'lato'
  },
  mainListView: {
    marginTop: 30,
    paddingLeft: 20,
  },
  menuItem: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 15,
    width: '75%',
  },
  menuTitle: {
    fontSize: 14,
    color: 'black',
    fontFamily: 'lato',
  },
});
