import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { colors } from '../Constants';
import { HomeStackNavigator } from './StackNavigation';
import Menu from '../Components/Menu/Menu';
import { NewsCategoryScreen } from "../Screens/CategoryScreen"


const Drawer = createDrawerNavigator();
const ScreenOptions = {
  headerShown: false,
  drawerStyle: {
    backgroundColor: colors.background
  }
}

export default () => (
  <Drawer.Navigator screenOptions={ScreenOptions} drawerContent={(props) => <Menu {...props} />}>
    <Drawer.Screen
      name="Home"
      component={HomeStackNavigator}
      options={
        {
          drawerLabel: 'Noticias',
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
    <Drawer.Screen
      name="Emisora"
      component={HomeStackNavigator}
    />
    <Drawer.Screen
      name="Sobre Nosotros"
      component={NewsCategoryScreen}
    />
    <Drawer.Screen
      name="RadioShow"
      component={HomeStackNavigator}
    />
    <Drawer.Screen
      name="Contacto"
      component={HomeStackNavigator}
    />
  </Drawer.Navigator>
);
