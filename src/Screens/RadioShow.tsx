import React, { useEffect, useState } from 'react';
import { FlatList, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../Constants';
import styled from 'styled-components/native';


const MAX_RESULT = 15;
const PLAYLIST_ID = "PLqT8cJpJNZ7oIWjxqr8fzd0tTAwax24yI";
const API_KEY = "AIzaSyBhPWlkWIXdNTKcdZVg7ipSdhK1KCKo1bs";
const CHANNEL_ID = "UCONp2n-eo4F6nkK_uN9bE_A";


export const RadioShow = () => {

    const navigation = useNavigation();
    const [data, setData] = useState([]);
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        fetch(`https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=${CHANNEL_ID}&maxResults=25&key=${API_KEY}`)
            .then(res => res.json())
            .then(res => {
                setData(res['items'])
            })
    }


    const onRefresh = () => {
        setData([])
        getData();
    };

    return (
        <SafeAreaView >
            <FlatList
                data={data}
                keyExtractor={(item, index) => index.toString()}
                onRefresh={onRefresh}
                refreshing={isFetching}
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

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff'
    },
    demacate: {
        borderBottomColor: 'blue',
        borderBottomWidth: 2,
        borderRadius: 10
    },
    item: {
        padding: 10,
        fontSize: 12,
        height: 44,
    },
});