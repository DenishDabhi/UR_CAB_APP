/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

export const mobileMenuStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  mainView: {
    height: 258,
    backgroundColor: '#f5c527',
    justifyContent: 'center',
    marginTop:-4
  },
  iconView: {
    position: 'absolute',
    right: 19,
    top: 17,
  },
  imageView: {
    padding: 20,
    width: '60%',
    alignItems: 'center',
    gap: 21,
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
    borderRadius: 100,
  },
  profileName: {
    fontSize: 15,
    color: 'white',
    fontFamily: 'lato',
  },
  starIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7.87,
  },
  stars: {
    fontSize: 18,
    color: 'white',
    fontFamily: 'lato',
  },
  mainListView: {
    marginTop: 42,
    paddingLeft: 38,
    gap:21
  },
  menuItem: {
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 15,
    width: 215,
    gap: 19,
    paddingHorizontal:19,
    paddingVertical:10
  },
  menuItem2: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 15,
    width: 215,
    gap: 19,
    marginLeft: 38,
    paddingHorizontal:19,
    paddingVertical:10
  },

  ifNotFocused: {
    fontFamily: 'Lato',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 20,
    color:'#272727'
  },
  ifFocused:{
    fontFamily: 'Lato',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 20,
    color:'#07009C'
  }
});
