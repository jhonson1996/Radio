import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { colors } from '../Constants';
import { Home } from '../Views/Home';


const Drawer = createDrawerNavigator();
const ScreenOptions = {
  drawerStyle: {
    backgroundColor: colors.background
  },
}

export default () => (
  <Drawer.Navigator screenOptions={ScreenOptions}>
    <Drawer.Screen
      name="Home"
      component={Home}
      options={
        {
          drawerLabel: 'Home',
          title: 'LA ESTACIÓN LATINA UK',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: colors.fucshia,
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontSize: 20,
          }
        }
      }
    />
  </Drawer.Navigator>
);