/* eslint-disable prettier/prettier */
import {Image, Pressable, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {IconButton} from 'react-native-paper';
import {mobileMenuStyle} from './style';
import Close from '../../../icons/close';

const MobileMenus = ({navigation, state, descriptors, menus}) => {
  const focusedRoute = state.routes[state.index];

  return (
    <DrawerContentScrollView style={mobileMenuStyle.container}>
      <View style={mobileMenuStyle.mainView}>
        <Pressable
          style={mobileMenuStyle.iconView}
          onPress={() => navigation.closeDrawer()}>
          <Close color={'white'} height={25} width={25} />
        </Pressable>
        <View style={mobileMenuStyle.imageView}>
          <View style={{height: 70, width: 70}}>
            <Image
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
              }}
              style={mobileMenuStyle.image}
            />
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={mobileMenuStyle.profileName}>Mammat bin jamat</Text>
            <Text style={mobileMenuStyle.stars}>★ ★ ★ ★ ★</Text>
          </View>
        </View>
      </View>
      <View style={mobileMenuStyle.mainListView}>
        {menus.map((item, index) => {
          const isFocused = focusedRoute.name === item.name;
          const customStyles = {
            backgroundColor: isFocused ? '#cbbddb' : '#FFF',
            color: isFocused ? '#cbbddb' : 'black',
          };
          const activeMenu = {
            color: isFocused ? 'blue' : 'black',
          };

          return (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate(item.name)}
              style={[customStyles, mobileMenuStyle.menuItem]}>
              <IconButton
                icon={item.icon}
                size={20}
                style={[customStyles]}
                iconColor={isFocused ? 'blue' : 'black'}
              />
              <Text style={[mobileMenuStyle.menuTitle, activeMenu]}>
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </DrawerContentScrollView>
  );
};

export default MobileMenus;
