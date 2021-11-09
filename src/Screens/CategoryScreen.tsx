import React, { useEffect, useState } from 'react';
import { ScrollView, StatusBar, Pressable, FlatList, View, ActivityIndicator, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { NewsCard } from '../Components'
import { colors } from '../Constants';

export const NewsCategoryScreen = ({ navigation, route }: { navigation: any, route: any }) => {

  const { id } = route.params

  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {

    getData()
  }, [page]);

  const getData = async () => {
    fetch(`https://laestacionlatinauk.com/wp-json/wp/v2/posts?categories=${id}&_embed&per_page=10&page=${page}`)
      .then(res => res.json())
      .then(res => {
        setNews([...news, ...res])
        setIsFetching(false)
        news.length ==0?setIsLoading(true):setIsLoading(false)
      })
  }

  const News = news.map((item: any) => {
    return {
      'id': item.id,
      'image': item.jetpack_featured_media_url,
      'title': item.title.rendered,
      'content': item.content.rendered,
      'categoryName': item['_embedded']["wp:term"][0][0]['name']
    };
  })

  const renderItem = ({ item }: any) => {
    return (
      <Pressable onPress={() =>
        navigation.navigate('Detail', { category: item.categoryName, item })}
      >
        <NewsCard item={item} />
      </Pressable>
    )
  }

  const onRefresh = () => {
    setIsFetching(true)
    setPage(1)
    getData()
  };

  const fetchMoreNews = () => {
    setPage(page + 1)
  }

  const renderFooter = () => {
    return (
      !isLoading ?
        <View>
          <ActivityIndicator size='large' color={colors.fucshia} />
        </View> : null
    )
  }

  return (
    <>
      <StatusBar animated={true} barStyle="dark-content" backgroundColor={'white'} />
      <FlatList
        style={styles.container}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        numColumns={2}
        data={News}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        onRefresh={onRefresh}
        refreshing={isFetching}
        onEndReachedThreshold={0.5}
        onEndReached={fetchMoreNews}
        ListFooterComponent={renderFooter}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

const NewsContainer = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-horizontal: 10px;
  margin-top: 20px;
  margin-bottom: 12px;
`;

const Loader = styled.View`
  margin-top: 10px;
  align-items: center;
`;