import React, { useEffect, useState } from 'react';
import { ScrollView, StatusBar, Pressable } from 'react-native';
import styled from 'styled-components/native';
import { NewsCard } from '../Components'


export const NewsCategoryScreen = ({ navigation, route }: { navigation: any, route: any }) => {

  const { id } = route.params
  const [news, setNews] = useState([])

  useEffect(() => {
    fetch(`https://laestacionlatinauk.com/wp-json/wp/v2/posts?categories=${id}&_embed`)
      .then(res => res.json())
      .then(res => {
        setNews(res)
      })
  }, []);

  const News = news.map((item:any)=> {
    return {
      'id': item.id,
      'image': item.jetpack_featured_media_url,
      'title': item.title.rendered,
      'content': item.content.rendered,
      'categoryName': item['_embedded']["wp:term"][0][0]['name']
    };
  })
  

  return (
    <ScrollView>
      <StatusBar animated={true} barStyle="dark-content" backgroundColor={'white'} />
      <NewsContainer>
        {News.map((item: any, index: any) => (
          <Pressable key={index} onPress={() => navigation.navigate('Detail', { category: item.categoryName, item })}>
            <NewsCard item={item} />
          </Pressable>
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