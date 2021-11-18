import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import RenderHTML from 'react-native-render-html';
import { colors } from '../Constants';
import {
    View,
    Dimensions,
    Pressable,
    Image,
    ActivityIndicator,
    StyleSheet,
    Text,
    StatusBar,
    ScrollView,
    useWindowDimensions
} from 'react-native';


export const About = () => {

    const [data, setData] = useState([]);
    
    useEffect(() => {
        fetch('https://laestacionlatinauk.com/wp-json/wp/v2/pages/14250')
            .then(res => res.json())
            .then(res => {
                setData(res)
                console.log(res + 'holii');

            })
    }, []);

    const Loader = () => {
        return (
            <LoaderV style={styles.louder}>
                <ActivityIndicator size='large' color={colors.fucshia} />
            </LoaderV>
        )
    }

    return (
        <ScrollView>
            <StatusBar animated={true} barStyle="dark-content" backgroundColor={'white'} />
            {data.length <= 0 ?
                <Loader /> :
                <ViewContainer>
                    <RenderHTML

                        source={{ html: data.content.rendered }}
                        systemFonts={['ABeeZee-Regular']}
                        enableExperimentalGhostLinesPrevention={true}
                    /* tagsStyles={tagsStyles} */
                    />
                </ViewContainer>
            }
        </ScrollView>
    )

}

const ViewContainer = styled.View`
  margin: 20px;
`;

const TextTitle = styled.Text`
  font-size: 20px;
  display: flex;
  font-family: ABeeZee-Regular;
  align-items: center;
  text-align: justify;
  font-weight: 800;
  margin-bottom: 23px;
  font-style: normal;
  font-weight: normal;
`;

const LoaderV = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 220px;
    height: 220px;
  `;

const styles = StyleSheet.create({

    louder: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    }
})