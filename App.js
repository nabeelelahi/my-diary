/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from "native-base";
import Splash from '~/screens/Splash'
import Disclaimer from '~/screens/Disclaimer';
import OurVision from '~/screens/OurVision'
import Signup from '~/screens/Signup'
import Login from '~/screens/Login';
import Dahboard from '~/screens/Dashboard';
import FormScreen from '~/screens/FormScreen';
import MainDrawer from '~/navigations/mainDrawer';
import MainStack from '~/navigations/startStack';

const App = () => {

  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <MainStack />
      </NativeBaseProvider>
    </NavigationContainer>
  );
};


export default App;
