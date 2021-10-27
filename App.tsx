import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text, View} from 'react-native';
import {radioInit} from './TrackPlayer/TrackPlayerSerivce';
import Home from './src/views/Home/index';

radioInit();

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView>
        <View>
          <Home />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
