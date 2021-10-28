import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, View} from 'react-native';
import {radioInit} from './TrackPlayer/TrackPlayerSerivce';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './src/views/Home/index';

radioInit();

const Drawer = createDrawerNavigator();
const ScreenOptions = {
  drawerStyle: {
    backgroundColor: '#f8f8f8',
    width: 240,
  },
}

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1,backgroundColor: '#f8f8f8'}}> 
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
                  backgroundColor: '#ff0056',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontSize: 20,
                }
              }
            }
          />
        </Drawer.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
