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

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <SpashScreenRegister/> */}
      <Verification />
      {/* <Home/> */}
    </SafeAreaView>
  );
}

export default App;
