/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const vehicalStyle = StyleSheet.create({
  scroll: {
    backgroundColor: '#FFF',
    padding: 10,
  },
  mainView:{
    gap:25
  },
  noRecordView: {
    marginTop: '80%',
    alignItems: 'center',
    gap:5
  },
  readyView: {
    color: '#272727',
    fontSize: 20,
    fontFamily:'lato',
    fontWeight:'900',
    lineHeight:24
  },
  noVehical: {
    fontSize: 14,
    // fontFamily: 'lato',
  },
  addButtonView: {position: 'absolute', bottom: 30, right: 30},
  button: {
    height: 75,
    width: 75,
    backgroundColor: '#EDBD00',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
});

export default vehicalStyle;
