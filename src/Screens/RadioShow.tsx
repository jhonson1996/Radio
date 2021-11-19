import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../Constants';
import styled from 'styled-components/native';

const API_KEY = "AIzaSyCmEIjIsBk6qigDSHJcc5CplTU4gPzQJ8s";
const CHANNEL_ID = "UCONp2n-eo4F6nkK_uN9bE_A";

export const RadioShow = () => {

  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [token, setToken] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = (url = `https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=${CHANNEL_ID}&maxResults=20&key=${API_KEY}`) => {
    fetch(url)
      .then(res => res.json())
      .then(res => {
        if (res.items.length > 0 && res !== undefined) {
          setData([...data, ...res.items])
          setToken(res.nextPageToken)
        } else {
          setIsLoading(false)
        }
        setIsFetching(false)
      })
  }

  const renderFooter = () => {
    return (
      <View style={{ marginTop: 10, alignItems: 'center' }}>
        <ActivityIndicator size='large' color={colors.fucshia} />
      </View>
    )
  }

  const fetchMoreVideos = () => {
    let url = `https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=${CHANNEL_ID}&pageToken=${token}&maxResults=20&key=${API_KEY}`
    getData(url);
  }

  return (
    <SafeAreaView >
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        onEndReachedThreshold={0.5}
        onEndReached={fetchMoreVideos}
        ListFooterComponent={renderFooter}
        renderItem={
          ({ item }) =>
            <TouchableOpacity

              onPress={() => navigation.navigate('Video', { item })}
            >
              <Container>
                <Card>
                  <Image source={{ uri: item.snippet.thumbnails.medium.url }} />
                  <Title>{item.snippet.title}</Title>
                </Card>
              </Container>
            </TouchableOpacity>
        }
      />
      <ScrollView>
      </ScrollView>
    </SafeAreaView>
  )

}

const Image = styled.Image`
  width: 100%;
  height: 150px;
  borderTopLeftRadius: 20px;
  borderTopRightRadius: 20px;
  borderBottomRightRadius: 20px;
  borderBottomLeftRadius: 20px;
  resize-mode: cover;
  margin-bottom: 10px;
`
const Card = styled.View`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    height: auto;
    width: 100%;
    border-radius: 5px;
    padding: 20px;
    background-color: white;
    elevation: 10;
    borderTopLeftRadius: 20px;
    borderTopRightRadius: 20px;
    borderBottomRightRadius: 20px;
    borderBottomLeftRadius: 20px;
    resize-mode: cover;
`;

const Title = styled.Text`
    padding: 0px;
    font-weight: bold;
    font-size: 16px;
    color: #000000;
    font-family: ABeeZee;
    font-weight: normal;
    font-style: italic;
    color: ${colors.gray};
`;

const Container = styled.View`
    margin: 20px 20px 0 20px;
`;

