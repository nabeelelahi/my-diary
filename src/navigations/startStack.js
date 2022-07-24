import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '~/screens/Splash'
import Signup from '~/screens/Signup';
import Login from '~/screens/Login';
import Disclaimer from '~/screens/Disclaimer';
import OurVision from '~/screens/OurVision';
import PrivacyPolicy from '~/screens/PrivacyPolicy';
import TermsAndConditions from '~/screens/TermsAndConditions';
import Home from './mainDrawer'

const Stack = createStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
      <Stack.Screen name="Disclaimer" component={Disclaimer} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
      <Stack.Screen name="OurVision" component={OurVision} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="TermsAndConditions" options={{ headerShown: false }} component={TermsAndConditions} />
      <Stack.Screen name="PrivacyPolicy" options={{ headerShown: false }} component={PrivacyPolicy} />
      {/* <Stack.Screen name="Drawer" component={MainDrawer} options={{ headerShown: false }} /> */}
    </Stack.Navigator>
  );
}