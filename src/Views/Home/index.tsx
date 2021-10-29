import React from 'react';
import {
  View,
  StatusBar,
  Image,
  Dimensions,
  ScrollView
} from 'react-native';
import styled from 'styled-components/native';
import { colors } from '../../Constants';

export const Home = () => (
  <ScrollView>
    <StatusBar
      barStyle="light-content"
      backgroundColor={colors.fucshia}
    />
    {/* Carrousel */}
      <Image
        style={{width: '100%', height: 220}}
        source={{
          uri: 'https://i1.wp.com/laestacionlatinauk.com/wp-content/uploads/2021/10/thumbnail_DSC_6339.jpg',
        }}
        resizeMode={'cover'}
      />
    {/* Carrousel */}

    <Container>

      <TitleContainer>
        <CategoryName>Entretenimiento</CategoryName>
        <SeeMore>{"VER TODO >"}</SeeMore>
      </TitleContainer>
      <NewsRow>
        <NewsCard/>
        <NewsCard/>
      </NewsRow>

      <TitleContainer>
        <CategoryName>Internacional</CategoryName>
        <SeeMore>{"VER TODO >"}</SeeMore>
      </TitleContainer>
      <NewsRow>
        <NewsCard/>
        <NewsCard/>
      </NewsRow>

      <View style={{height:100}}>
        {/* ---player--- */}
      </View>
      
    </Container>
  </ScrollView>
);

const Container = styled.View`
  margin-top: -25px;
  padding-top: 10px;
  background: ${colors.background};
  borderTopLeftRadius: 27px;
  borderTopRightRadius: 27px;
`;

const Carrousel = styled.View`
`;

const TitleContainer = styled.View`
  flex-direction: row;
  padding-top: 10px;
  justify-content: space-between;
  align-items: baseline;
  margin-horizontal: 24px;
`;

const CategoryName = styled.Text`
  color: ${colors.navyblue};
  font-size: 22px;
  font-weight: 400;
  font-family: ABeeZee-Italic;
`;

const SeeMore = styled.Text`
  font-size: 13px;
  color: ${colors.gray};
  font-weight: 400;
  font-family: ABeeZee-Italic;
`;

const NewsRow = styled.View`
  justify-content: space-around;
  flex-direction: row;
  margin-horizontal: 8px;
  margin-top: 18px;
  margin-bottom: 12px;
`;

const NewsCard = styled.View`
  width: ${Dimensions.get('window').width/2.35}px;
  height: 150px;
  background-color: white;
  border-radius: 25px;
  elevation: 20;
  margin-bottom: 10px;
`;