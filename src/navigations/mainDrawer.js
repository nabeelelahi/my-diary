import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Dahboard from '~/screens/Dashboard';
import FormScreen from '~/screens/FormScreen';
import SubTabs from '~/screens/SubTabs';
import ViewScreen from '~/screens/ViewScreen';
import DrawerComp from '~/components/shared/Drawer'

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerComp {...props} />} >
      <Drawer.Screen
        name="Dahboard"
        options={{ headerShown: false }}
        component={Dahboard}
      />
      <Drawer.Screen
        name="FormScreen"
        options={{ headerShown: false }}
        component={FormScreen}
      />
      <Drawer.Screen
        name="SubTabs"
        options={{ headerShown: false }}
        component={SubTabs}
      />
      <Drawer.Screen
        name="ViewScreen"
        options={{ headerShown: false }}
        component={ViewScreen}
      />
    </Drawer.Navigator>
  );
}