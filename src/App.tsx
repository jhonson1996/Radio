import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { colors } from './Constants';
import { Home } from './Views/Home';
import { radioInit } from './TrackPlayer/TrackPlayerSerivce';

radioInit();

const Drawer = createDrawerNavigator();
const ScreenOptions = {
  drawerStyle: {
    backgroundColor: colors.background
  },
}

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1,backgroundColor: colors.background}}> 
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
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
