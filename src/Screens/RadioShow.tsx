import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import styled from 'styled-components/native';

import { useNavigation } from '@react-navigation/native';
import { colors, constants } from '../Constants';
import moment from 'moment';
import 'moment/locale/es'
import Icon from 'react-native-vector-icons/AntDesign';
import { GOOGLE_API_KEY } from '@env';


export const RadioShow = () => {

  const { YOUTUBE_API, YOUTUBE_ID_CHANNEL } = constants;
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [token, setToken] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = (url = `${YOUTUBE_API}?order=date&part=snippet&channelId=${YOUTUBE_ID_CHANNEL}&maxResults=20&key=${GOOGLE_API_KEY}`) => {
    setIsLoading(true)
    fetch(url)
      .then(res => res.json())
      .then(res => {
        if (res.items.length > 0 && res !== undefined) {
          if (res.nextPageToken) {
            setToken(res.nextPageToken)
          } else {
            setToken('')
          }
          setData([...data, ...res.items])
        } else {
          setIsLoading(false)
        }
      })
  }

  const renderFooter = () => {
    return (
      isLoading ?
        <View style={{ marginTop: 15, alignItems: 'center' }}>
          <ActivityIndicator size='large' color={colors.fucshia} />
        </View> : null
    )
  }

  const fetchMoreVideos = () => {
    let url = `${YOUTUBE_API}?order=date&part=snippet&channelId=${YOUTUBE_ID_CHANNEL}&pageToken=${token}&maxResults=20&key=${GOOGLE_API_KEY}`
    if (token) {
      getData(url);
    } else {
      setIsLoading(false)
    }
  }

  return (
    <SafeAreaView >
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        onEndReachedThreshold={0.5}
        onEndReached={fetchMoreVideos}
        contentContainerStyle={{ paddingBottom: 25 }}
        ListFooterComponent={renderFooter}
        renderItem={
          ({ item }) => {

            const date = moment(item.snippet.publishedAt)

            return (<TouchableOpacity
              onPress={() => navigation.navigate('Video', { item })}
            >
              <Container>
                <Card>
                  <Title color={colors.navyblue} size='16.5'>{item.snippet.title}</Title>
                  <Image source={{ uri: item.snippet.thumbnails.medium.url }} />
                  <ViewDate>
                    <Icon name="clockcircleo" size={15} color={colors.gray} style={{ marginRight: 5 }} />
                    <Title color={colors.gray} size='12'>{date.locale('es').fromNow()}</Title>
                  </ViewDate>
                </Card>
              </Container>
            </TouchableOpacity>)
          }
        }
      />
    </SafeAreaView>
  )
}

const ViewDate = styled.View`
    display: flex;
    flex-direction: row;
    margin-left: 2px;
    align-items: center;
`;

const Image = styled.Image`
  width: 100%;
  height: 150px;
  borderTopLeftRadius: 20px;
  borderTopRightRadius: 20px;
  borderBottomRightRadius: 20px;
  borderBottomLeftRadius: 20px;
  resize-mode: cover;
  margin-bottom: 10px;
  margin-top: 5px;
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
    align-items: flex-start;
    padding: 0px;
    font-weight: 400;
    font-size: ${props => props.size}px;
    color: #000000;
    font-family: ABeeZee-Regular;
    color: ${props => props.color};
`;

const Container = styled.View`
    margin: 20px 20px 0 20px;
`;

