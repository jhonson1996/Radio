import React from 'react';
import { Alert, Text } from 'react-native'
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '../Constants';
import Menu from '../Components/Menu/Menu';
import { HomeStackNavigator } from './StackNavigation';
import { Schedule } from '../Screens/Schedule';
import { RadioShow } from '../Screens/RadioShow';
import { About } from '../Screens/About';

const Drawer = createDrawerNavigator();
const ScreenOptions = {
  headerShown: true,
  headerStyle: {
    elevation: 0,
    backgroundColor: colors.fucshia,
  },
  headerTitleAlign: "center",
  headerTintColor: 'white',
  headerBackTitle: 'Atrás',
  headerTitleStyle: {
    fontSize: 22,
    fontFamily: 'ABeeZee-Regular'
  },
  drawerStyle: {
    backgroundColor: colors.background
  },
  drawerItemStyle: {
    marginLeft: 40,
    marginRight: 0,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0
  },
  drawerActiveBackgroundColor: colors.navyblue,
  drawerInactiveTintColor: colors.navyblue,
  drawerActiveTintColor: '#fff',
  drawerLabelStyle: { fontFamily: 'ABeeZee-Regular', fontSize: 17 }
}


export default () => (
  <Drawer.Navigator screenOptions={ScreenOptions} drawerContent={(props) => <Menu {...props} />} >
    <Drawer.Screen
      name="Home"
      component={HomeStackNavigator}
      options={{
        headerShown: false,
        drawerLabel: ({ color }) => <Text style={[{ color }, ScreenOptions.drawerLabelStyle]}>{'Noticias'}</Text>,
        drawerIcon: ({ color, size }) => (
          <Icon
            name="home" size={26} color={color}
            style={{ marginLeft: 5 }}
          />
        )
      }}
    />
    <Drawer.Screen
      name="Programación"
      component={Schedule}
      options={{
        drawerLabel: ({ color }) => <Text style={[{ color }, ScreenOptions.drawerLabelStyle]}>{'Programación'}</Text>,
        drawerIcon: ({ color }) => (
          <Icon
            name="radio" size={26} color={color}
            style={{ marginLeft: 5 }}
          />
        )
      }}
    />
    <Drawer.Screen
      name="Sobre Nosotros"
      component={About}
      options={{
        drawerLabel: ({ color }) => <Text style={[{ color }, ScreenOptions.drawerLabelStyle]}>{'Sobre Nosotros'}</Text>,
        drawerIcon: ({ color }) => (
          <Icon
            name="emisora" size={26} color={color}
            style={{ marginLeft: 5 }}
          />
        )
      }}
    />
    <Drawer.Screen
      name="RadioShow"
      component={RadioShow}
      options={{
        drawerLabel: ({ color }) => <Text style={[{ color }, ScreenOptions.drawerLabelStyle]}>{'RadioShow'}</Text>,
        drawerIcon: ({ color }) => (
          <Icon
            name="video" size={26} color={color}
            style={{ marginLeft: 5 }}
          />
        )
      }}
    />
    <Drawer.Screen
      name="Contacto"
      component={() => <></>}
      options={{
        drawerLabel: ({ color }) => <Text style={[{ color }, ScreenOptions.drawerLabelStyle]}>{'Contacto'}</Text>,
        drawerIcon: ({ color }) => (
          <Icon
            name="info" size={26} color={color}
            style={{ marginLeft: 5 }}
          />
        )
      }}
    />
  </Drawer.Navigator>
);
