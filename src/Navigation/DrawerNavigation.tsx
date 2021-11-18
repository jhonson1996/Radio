import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { colors } from '../Constants';
import { HomeStackNavigator } from './StackNavigation';
import {Shedule} from '../Components/';
import Menu from '../Components/Menu/Menu';
import {RadioShow} from '../Components';
import { NewsCategoryScreen } from "../Screens/CategoryScreen"
/* import Icon from '../Components/CustomIcon/CustomIcon' */
import Icon from 'react-native-vector-icons/FontAwesome';

const Drawer = createDrawerNavigator();
const ScreenOptions = {
  headerShown: false,
  drawerStyle: {
    backgroundColor: colors.background
  },
  contentOptions: {
    activeTintColor: '#e91e63',
    activeBackgroundColor : 'purple',
    itemsContainerStyle: {
      marginVertical: 0,
    },
    iconContainerStyle: {
      opacity: 1
    }
  },
  drawerItemStyle: {
    marginLeft: 40,
    marginRight: 0,
    marginTop: 20,
    borderBottomRightRadius:0,
    borderTopLeftRadius:8,
    borderTopRightRadius: 0,
    borderBottomLeftRadius:8
  },
  drawerLabelStyle:{
    color: '#000000',
    fontFamily: 'ABeeZee-Regular'
  },
}

export default () => (
  <Drawer.Navigator screenOptions={ScreenOptions} drawerContent={(props) => <Menu {...props} />} >
    <Drawer.Screen
      name="Home"
      component={HomeStackNavigator}
      options={
        {
          drawerLabel: 'Noticias',
          drawerIcon: ({color, size}) => (
            <Icon
               name="facebook" size={24} color={color}
               style={{marginLeft: 5}}
            />
          ),
          title: 'LA ESTACIÓN LATINA UK',
          drawerActiveBackgroundColor: colors.navyblue,
          
          headerTitleAlign: 'center',
          headerTintColor: 'white',
          headerTitleStyle: {
            fontSize: 20,
            fontFamily: 'ABeeZee-Regular'
          },
          
          drawerInactiveTintColor: '#000000',
          drawerActiveTintColor: '#ffffff',
          
        }
      }
    />
    <Drawer.Screen
      name="Emisora"
      component={RadioShow}
      options={
        {
          drawerLabel: 'Emisora',
          drawerActiveBackgroundColor: colors.navyblue,
          drawerLabelStyle:{
            color: '#000000',
            fontFamily: 'ABeeZee-Regular'
          },
          drawerItemStyle: {
            marginLeft: 40, 
            marginRight: 0, 
            borderTopLeftRadius:8,
            borderBottomRightRadius:0,
            borderTopRightRadius: 0, 
            borderBottomLeftRadius:8
          },
          drawerIcon: ({color, size}) => (
            <Icon
               name="emisora" size={24} color={color}
               style={{marginLeft: 5}}
            />
          ),
          drawerInactiveTintColor: '#000000',
          drawerActiveTintColor: '#fffdfd',
        }
      }
      
    />
    <Drawer.Screen
      name="Sobre Nosotros"
      component={HomeStackNavigator}
      options={
        {
          drawerLabel: 'Sobre Nosotros',
          drawerActiveBackgroundColor: colors.navyblue,
          drawerLabelStyle:{
            color: '#000000',
            fontFamily: 'ABeeZee-Regular'
          },
          drawerItemStyle: {
            marginLeft: 40, 
            marginRight: 0, 
            borderTopLeftRadius:8,
            borderBottomRightRadius:0,
            borderTopRightRadius: 0, 
            borderBottomLeftRadius:8
          },
          drawerIcon: ({color, size}) => (
            <Icon
               name="emisora" size={24} color={color}
               style={{marginLeft: 5}}
            />
          ),
          drawerInactiveTintColor: '#000000',
          drawerActiveTintColor: '#fffdfd',
        }
      }
    />
    <Drawer.Screen
      name="RadioShow"
      component={Shedule}
      options={
        {
          drawerLabel: 'RadioShow',
          drawerActiveBackgroundColor: colors.navyblue,
          drawerLabelStyle:{
            color: '#000000',
            fontFamily: 'ABeeZee-Regular'},
          drawerItemStyle: {
            marginLeft: 40, 
            marginRight: 0, 
            borderTopLeftRadius:8,
            borderBottomRightRadius:0,
            borderTopRightRadius: 0, 
            borderBottomLeftRadius:8
          },
          drawerIcon: ({color, size}) => (
            <Icon
               name="Youtube" size={24} color={color}
               style={{marginLeft: 5}}
            />
          ),
          drawerInactiveTintColor: '#000000',
          drawerActiveTintColor: '#fffdfd',
        }
      }
    />
    <Drawer.Screen
      name="Contacto"
      component={HomeStackNavigator}
      options={
        {
          drawerLabel: 'Contacto',
          drawerLabelStyle: {
            color: '#000000',
            fontFamily: 'ABeeZee-Regular'
          },
          drawerActiveBackgroundColor: colors.navyblue,
          drawerItemStyle: {
            marginLeft: 40, 
            marginRight: 0,
            borderBottomRightRadius:0, 
            borderTopLeftRadius:8, 
            borderTopRightRadius: 0, 
            borderBottomLeftRadius:8
          },
          drawerIcon: ({color, size}) => (
            <Icon
               name="contacto" size={24} color={color}
               style={{marginLeft: 5}}
            />
          ),
          drawerInactiveTintColor: '#000000',
          drawerActiveTintColor: '#fffdfd',
        }
      }
    />
  </Drawer.Navigator>
);
