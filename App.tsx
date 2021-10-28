import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, View} from 'react-native';
import {radioInit} from './TrackPlayer/TrackPlayerSerivce';
import Home from './src/views/Home/index';

radioInit();

const App = () => {
  return (
    <SafeAreaView style={{flex: 1,backgroundColor: '#f8f8f8'}}> 
      <ScrollView>
        <Home />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
