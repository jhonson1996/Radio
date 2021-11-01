import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { colors } from './Constants';
import DrawerNavigator from './Navigation/DrawerNavigation';
import { radioInit } from './TrackPlayer/TrackPlayerSerivce';

radioInit();

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1,backgroundColor: colors.background}}> 
        <DrawerNavigator/>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
