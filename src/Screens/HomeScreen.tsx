import React,{useState} from 'react';
import { View, StatusBar, Image, ScrollView, Pressable } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import styled from 'styled-components/native';

import { colors } from '../Constants';
import { NewsCard } from '../Components'



export const HomeScreen = ({ navigation }: {navigation:any}) => {

  
  const [data, setData] = useState([])
  let news;

  const toggleDrawer = () => {
    navigation.toggleDrawer();
  };

  useFocusEffect(
     React.useCallback(() => {
       StatusBar.setBarStyle('light-content');
       StatusBar.setBackgroundColor(`${colors.fucshia}`)
     }, [])
  );

  fetch('https://laestacionlatinauk.com/wp-json/wp/v2/posts?per_page=10&_embed')
  .then(res => res.json())
  .then(res => {
    setData(res)
  })


  const groupBy = (attribute:any, data:any, row_name:any) => {
    let posts = [];
    var p: any[] = [];
    let post;
    let groupValue;
    
    data.sort((a:any,b:any ) => ( a._embedded["wp:term"][0][0].name <= b._embedded["wp:term"][0][0].name) ? -1 : 1) 
  
    for ( var i = 0 ; i < data.length ; i++ ) {

      var object = data[i];

      if ( object._embedded["wp:term"][0][0].name !== groupValue ) {

        post = {
          [attribute]: object._embedded["wp:term"][0][0].name,
          [row_name]: []
        };

        groupValue = post[attribute];
        posts.push(post);

      }

      post[row_name].push({
        'id': object.id,
        'title': object.title.rendered,
        'image': object.jetpack_featured_media_url
      })

    }
    news = posts
   
  }


  groupBy('categoryName', data, 'news')

  return(
    <ScrollView>
      <StatusBar animated={true} barStyle="light-content" backgroundColor={colors.fucshia}/>
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
      {news.map((category:any, index:any) => (
        <View key={index}>
          <HeaderContainer>
            <CategoryName>{category.categoryName}</CategoryName>
            <Pressable onPress={() => navigation.navigate('Category', {category})} hitSlop={8}> 
              <SeeMore>{"VER TODO >"}</SeeMore>
            </Pressable>
          </HeaderContainer>
          <NewsContainer>
            {category.news.slice(0, 2).map((item:any, index:any) => (
              <Pressable key={index} onPress={() => navigation.navigate('Detail', {category: category.categoryName, item})}>
                <NewsCard item={item}/>
              </Pressable>
            ))}
          </NewsContainer>
        </View>
      ))}

        <View style={{height:100}}>
          {/* ---player--- */}
        </View>
        
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
