import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '~/screens/Splash'
import Dashboard from '~/screens/Dashboard'
import FormScreen from '~/screens/FormScreen'
import Signup from '~/screens/Signup';
import Login from '~/screens/Login';
import Disclaimer from '~/screens/Disclaimer';
import OurVision from '~/screens/OurVision';
// import MainDrawer from '~/navigations/mainDrawer'

const Stack = createStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
      <Stack.Screen name="Disclaimer" component={Disclaimer} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
      <Stack.Screen name="OurVision" component={OurVision} options={{ headerShown: false }} />
      <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
      <Stack.Screen name="FormScreen" component={FormScreen} options={{ headerShown: false }} />
      {/* <Stack.Screen name="Drawer" component={MainDrawer} options={{ headerShown: false }} /> */}
    </Stack.Navigator>
  );
}