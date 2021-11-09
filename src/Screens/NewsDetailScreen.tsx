import React from 'react';
import { ScrollView, Text, StatusBar, useWindowDimensions } from 'react-native';
import styled from 'styled-components/native';
import { colors } from '../Constants';
import RenderHTML from 'react-native-render-html';

export const NewsDetailScreen = ({ navigation, route }: { navigation: any, route: any }) => {

  const { item } = route.params
  const { width } = useWindowDimensions();
  

  return (
    <ScrollView>
      <StatusBar animated={true} barStyle="dark-content" backgroundColor={'white'} />
      <ViewContainer>
        <Image source={{ uri: item.image }} />
        <TextTitle style={{ color: colors.navyblue }}>
          {item.title}
        </TextTitle>
        <RenderHTML
          contentWidth={width}
          source={{ html: item.content.replace(item.content.match(new RegExp("<img[^>]*?>", "g")), "",) }}
        />
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
  font-size: 18px;
  display: flex;
  font-family: ABeeZee-Regular;
  align-items: center;
  text-align: justify;
  font-weight: 800;
  margin-bottom: 23px;
  font-style: normal;
  font-weight: normal;
`;

