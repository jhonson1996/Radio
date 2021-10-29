import React from 'react';
import { View, StatusBar, Image, ScrollView } from 'react-native';
import styled from 'styled-components/native';

import { colors } from '../../Constants';
import { NewsCard } from '../../Components'
import news from '../../news.json';


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
    {news.map((category) => (
      <>
        <HeaderContainer>
          <CategoryName>{category.categoryName}</CategoryName>
          <SeeMore>{"VER TODO >"}</SeeMore>
        </HeaderContainer>
        <NewsContainer>
          {category.news.slice(0, 2).map((item) => (
            <NewsCard item={item}/>
          ))}
        </NewsContainer>
      </>
    ))}

      <View style={{height:100}}>
        {/* ---player--- */}
      </View>
      
    </Container>
  </ScrollView>
);

const Container = styled.View`
  margin-top: -25px;
  padding-top: 25px;
  background: ${colors.background};
  borderTopLeftRadius: 27px;
  borderTopRightRadius: 27px;
`;

const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  margin-horizontal: 24px;
`;

const CategoryName = styled.Text`
  color: ${colors.navyblue};
  font-size: 21px;
  font-weight: 400;
  font-family: ABeeZee-Italic;
`;

const SeeMore = styled.Text`
  font-size: 13px;
  color: ${colors.gray};
  font-weight: 400;
  font-family: ABeeZee-Italic;
`;

const NewsContainer = styled.View`
  justify-content: space-around;
  flex-direction: row;
  margin-horizontal: 10px;
  margin-top: 10px;
  margin-bottom: 12px;
`;
