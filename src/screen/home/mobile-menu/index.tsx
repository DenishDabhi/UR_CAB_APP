/* eslint-disable prettier/prettier */
import {Image, Pressable, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {mobileMenuStyle} from './style';
import CloseIcon from '../../../assets/svg/close-icon';
import StarIcon from '../../../assets/svg/star-icon';
import LogoutIcon from '../../../assets/svg/logout-icon';

const MobileMenus = ({navigation, state, descriptors, menus} :any) => {
  const focusedRoute = state.routes[state.index];

  return (
    <DrawerContentScrollView style={mobileMenuStyle.container}>
      <View style={mobileMenuStyle.mainView}>
        <Pressable
          style={mobileMenuStyle.iconView}
          onPress={() => navigation.closeDrawer()}>
          <CloseIcon color={'white'} height={25} width={25} />
        </Pressable>
        <View style={mobileMenuStyle.imageView}>
          <View style={{height: 100, width: 100}}>
            <Image
              source={require('../../../assets/images/profileImg.png')}
              style={mobileMenuStyle.image}
            />
          </View>
          <View style={{alignItems: 'center', gap: 10}}>
            <Text style={mobileMenuStyle.profileName}>Mammat bin jamat</Text>
            <View style={mobileMenuStyle.starIcon}>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </View>
          </View>
        </View>
      </View>
      <View style={mobileMenuStyle.mainListView}>
        {menus.map((item:any, index:any) => {
          const isFocused = focusedRoute.name === item.name;
          const customStyles = {
            backgroundColor: isFocused ? '#07009C1A' : '#FFFFFF',
            color: isFocused ? '#cbbddb' : 'black',
          };
          const activeMenu = {
            color: isFocused
              ? mobileMenuStyle.ifFocused
              : mobileMenuStyle.ifNotFocused,
          };

          return (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate(item.name)}
              style={[customStyles, mobileMenuStyle.menuItem]}>
              <View>{item.icon}</View>
              <Text style={[ isFocused ? mobileMenuStyle.ifFocused : mobileMenuStyle.ifNotFocused ]}>
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        })}

      </View>
      <TouchableOpacity style={[mobileMenuStyle.menuItem2]}>
          <LogoutIcon/>
          <Text style={[mobileMenuStyle.ifNotFocused]}>Logout</Text>
        </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

export default MobileMenus;
