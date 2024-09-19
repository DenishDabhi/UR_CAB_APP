import {View, Text, Pressable, TextInput} from 'react-native';
import React, {useMemo} from 'react';
// import MapView, {Marker} from 'react-native-maps';
import MenuIcon from '../../assets/svg/icon-svg';
import INCIcon from '../../assets/svg/icon-svg2';
import ICNCompassIcon from '../../assets/svg/icon-svg3';
import BottomSheet, {BottomSheetTextInput} from '@gorhom/bottom-sheet';
import SearchIcon from './search-icon';
import {homeStyle} from './styles';

const Home = () => {
  const snapPoints = useMemo(() => ['15%', '50%', '70%', '90%'], []);
  return (
    <View style={{flex: 1}}>
      {/* <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={{flex: 1}}>
        <Marker
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324,
          }}
          // image={require('src/home/image_14.png')}
          icon={require('../../assets/images/image_15.png')}
        />
        <Marker
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4124,
          }}
          // image={require('src/home/image_14.png')}
          icon={require('../../assets/images/image_16.png')}
        />
        <Marker
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4024,
          }}
          // image={require('src/home/image_14.png')}
          icon={require('../../assets/images/image_14.png')}
        />
      </MapView> */}
      <Pressable style={homeStyle.menuButton}>
        <MenuIcon height={13} width={15} />
      </Pressable>
      <View style={homeStyle.twoButtonContainer}>
        <Pressable style={homeStyle.buttonNavigate}>
          <INCIcon height={19.4} width={19.4} />
        </Pressable>
        <Pressable style={homeStyle.buttonCompass}>
          <ICNCompassIcon height={17} width={17} />
        </Pressable>
      </View>
      <BottomSheet
        snapPoints={snapPoints}
        index={0}
        backgroundStyle={{backgroundColor: '#F7F7F6'}}
        handleIndicatorStyle={{backgroundColor: '#BEBFC0'}}>
        <View
          style={{
            flex: 1,
          }}>
          <View style={homeStyle.bottomSheetContainer}>
            <View style={homeStyle.inputContainer}>
              <SearchIcon />
              <TextInput placeholder="Where To?" />
            </View>
            <View style={homeStyle.imageContainer}>
              <Text style={homeStyle.imageText}>AA</Text>
            </View>
          </View>
        </View>
      </BottomSheet>
    </View>
  );
};

export default Home;
