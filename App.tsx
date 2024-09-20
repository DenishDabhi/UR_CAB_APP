/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import Verification from './src/authentication/verification';
import Home from './src/screen/home';
import HomeDrawerNavigation from './src/screen/home/homeDrawerNavigation';
import { NavigationContainer } from '@react-navigation/native';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
    <SafeAreaView style={{flex: 1}}>
      {/* <SpashScreenRegister/> */}
      {/* <Verification /> */}
      {/* <Home/> */}
      {/* <HomeDrawerNavigation/> */}
    </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;
