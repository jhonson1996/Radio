import React from 'react';
import { ScrollView, Text, StatusBar } from 'react-native';
import styled from 'styled-components/native';
import { colors } from '../Constants';

export const NewsDetailScreen = ({navigation, route}: {navigation: any, route: any}) => {

  const { item } = route.params
  console.log(item.image)
  return (
    <ScrollView>
      <StatusBar animated={true} barStyle="dark-content" backgroundColor={'white'}/>
      <Image source={{uri: item.image}}/>
      <Text style={{color: colors.navyblue}}>{JSON.stringify(item)}</Text>
    </ScrollView>
  );
}

const Image = styled.Image`
  width: 100%;
  height: 200px;
`