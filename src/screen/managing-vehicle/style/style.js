/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const vehicalStyle = StyleSheet.create({
  scroll: {
    backgroundColor: '#FFF',
    padding: 10,
  },
  noRecordView: {
    marginTop: '80%',
    alignItems: 'center',
  },
  readyView: {
    color: 'black',
    fontSize: 18,
    // fontFamily:'lato'
  },
  noVehical: {
    fontSize: 14,
    // fontFamily: 'lato',
  },
  addButtonView: {position: 'absolute', bottom: 30, right: 30},
  button: {
    height: 60,
    width: 60,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
});

export default vehicalStyle;
