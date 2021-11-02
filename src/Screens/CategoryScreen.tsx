import React from 'react';
import { ScrollView, Text, StatusBar, View, Pressable } from 'react-native';
import { colors } from '../Constants';
import news from '../news.json';
import styled from 'styled-components/native';
import { NewsCard } from '../Components'


export const NewsCategoryScreen = ({navigation, route}: {navigation: any, route: any}) => {

  const { category } = route.params

  return (
    <ScrollView>
      <StatusBar animated={true} barStyle="dark-content" backgroundColor={'white'}/>
      
      <NewsContainer>
      {category.news.map((item:any, index:any)=>(
        <NewsCard item={item} key={index}/>
      ))}
      
      </NewsContainer>
    </ScrollView>


  );
}


const NewsContainer = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-horizontal: 10px;
  margin-top: 20px;
  margin-bottom: 12px;
`;