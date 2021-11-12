import React, { useState, useEffect } from 'react';
import { View, StatusBar, Image, ScrollView, Pressable } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import styled from 'styled-components/native';
import { colors } from '../Constants';
import { Carrousel } from '../Components' 
import { NewsCard } from '../Components'

export const HomeScreen = ({ navigation }: { navigation: any }) => {

  const [data, setData] = useState([])

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('light-content');
      StatusBar.setBackgroundColor(`${colors.fucshia}`)
    }, [])
  );

  useEffect(() => {
    fetch('https://laestacionlatinauk.com/wp-json/wp/v2/posts?per_page=100&_embed')
      .then(res => res.json())
      .then(res => {
        setData(res)
      })
  }, []);

  const groupBy = (data: any) => {
    return data.reduce((posts: any, post: any) => {
      const value = post['_embedded']["wp:term"][0][0]['name'];
      posts[value] = (posts[value] || []).concat(
        {
          'id': post.id,
          'categoryId': post.categories[0],
          'title': post.title.rendered,
          'image': post.jetpack_featured_media_url,
          'content': post.content.rendered,
          'categoryName': post['_embedded']["wp:term"][0][0]['name']
        }
      );
      return posts;
    }, {});
  }

  const news = Object.entries(groupBy(data)).map(([categoryName, news]) => ({ categoryName, 'categoryId': news[0].categoryId, news }));
  return (
    <ScrollView>
      <StatusBar animated={true} barStyle="light-content" backgroundColor={colors.fucshia} />
      <Carrousel News={news.slice(0,2)} />
      <Container>
        {news.slice(2, 100).map((category: any, index: any) => (
          (category.news.length > 1) ?
            <View key={index}>
              <HeaderContainer>
                <CategoryName>{category.categoryName}</CategoryName>
                <Pressable onPress={() => navigation.navigate('Category', { category: category.categoryName, id: category.categoryId })} hitSlop={8}>
                  <SeeMore>{"VER TODO >"}</SeeMore>
                </Pressable>
              </HeaderContainer>
              <NewsContainer>
                {category.news.slice(0, 2).map((item: any, index: any) => (
                  <Pressable key={index} onPress={() => navigation.navigate('Detail', { category: category.categoryName, item })}>
                    <NewsCard item={item} />
                  </Pressable>
                ))}
              </NewsContainer>
            </View>
            : <></>
        ))}
      </Container>
    </ScrollView>
  )
}

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
