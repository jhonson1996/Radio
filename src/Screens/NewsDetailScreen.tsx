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
      <ViewContainer>
      <Image source={{uri: item.image}}/>
      <TextTitle style={{color: colors.navyblue}}>{item.title}</TextTitle>
      <TextDetails style={{color: colors.navyblue}}>{item.content}</TextDetails>
      </ViewContainer>
    </ScrollView>
  );
}


const Image = styled.Image`
  width: 100%;
  height: 200px;
  margin-bottom: 18px;
`

const ViewContainer = styled.View`
  margin: 20px;
`;

const TextDetails = styled.Text`
  font-size: 13px;
  display: flex;
  align-items: center;
  text-align: justify;
`;

const TextTitle = styled.Text`
  font-size: 13px;
  display: flex;
  align-items: center;
  text-align: justify;
  font-weight: 700;
  margin-bottom: 23px;
`;

