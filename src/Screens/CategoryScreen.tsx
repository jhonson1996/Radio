import React from 'react';
import { ScrollView, Text, StatusBar } from 'react-native';
import { colors } from '../Constants';

export const NewsCategoryScreen = ({navigation, route}: {navigation: any, route: any}) => {

  const { category } = route.params

  return (
    <ScrollView>
      <StatusBar animated={true} barStyle="dark-content" backgroundColor={'white'}/>
      <Text style={{color: colors.navyblue}}>{JSON.stringify(category)}</Text>
    </ScrollView>
  );
}
