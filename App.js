/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar
} from 'react-native';
import Splash from '~/screens/Splash'
import Disclaimer from '~/screens/Disclaimer';
import OurVision from '~/screens/OurVision'
import Signup from '~/screens/Signup'
import Login from '~/screens/Login';
import Dahboard from '~/screens/Dashboard';
import FormScreen from '~/screens/FormScreen';

const App = () => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={'dark-content'} />
      <FormScreen />
    </SafeAreaView>
  );
};


export default App;
