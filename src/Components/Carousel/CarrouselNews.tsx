import React, { useState } from 'react';
import {
  View,
  Dimensions,
  Pressable,
  Image,
  ActivityIndicator,
  StyleSheet
} from 'react-native';
import Carousel from 'react-native-looped-carousel';
import { colors } from '../../Constants';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
const { width, height } = Dimensions.get('window');

export const Carrousel = ({ News }: any) => {

  const [state, setState] = useState({
    Width: width,
    Height: height
  })

  const navigation = useNavigation();

  const styles = StyleSheet.create({
    bulletStyled: {
      marginLeft: 0,
      backgroundColor: '#ffffff',
    },
    chosenBulletStyle: {
      color: '#FF0056',
      backgroundColor: '#FF0056'
    },
    bulletsContainerStyle: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      marginLeft: 9,
      margin: 30
    },
    carrousel: {
      width: state.Width,
      height: state.Height / 3
    },
    louder:{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      width: state.Width 
    }
  })

  const Loader = () => {
    return (
      <LoaderV style={styles.louder}>
        <ActivityIndicator size='large' color={colors.fucshia} />
      </LoaderV>
    )
  }

  return (
    <View style={{ flex: 1 }} >
      {News.length <= 0 ?
        <Loader /> :
        <Carousel
          delay={4000}
          style={styles.carrousel}
          autoplay
          bullets={true}
          bulletStyle={styles.bulletStyled}
          chosenBulletStyle={styles.chosenBulletStyle}
          bulletsContainerStyle={styles.bulletsContainerStyle}
        >
          {News.slice(0, 2).map((item: any, index: any) => (

            item.news.slice(0, 2).map((item: any, index: any) => (
              <View style={styles.carrousel}>
                <Pressable key={index} onPress={() => navigation.navigate('Detail',{category: item.categoryName, item})}> 
                  <Image source={{ uri: item.image }} style={styles.carrousel} />
                  <ContainerTitle>
                    <TextN>{item.title}</TextN>
                  </ContainerTitle>
               </Pressable>
              </View>
            ))
          ))}
        </Carousel>}
    </View>
  );
}

const LoaderV = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: ${width};
    height: 220px;
  `;

const ContainerTitle = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background: rgba(0, 0, 0, 0.35);
  width: ${width};
  height: 100%;
  margin-top: -120px;
`;

const TextN = styled.Text`
  text-shadow: 0px 4px 10px rgba(0, 0, 0, 0.45);
  padding: 10px;
  color: #fff;
  line-height: 19px;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-family: ABeeZee;
  font-weight: normal;
  font-style: italic;
  width: ${width};
`;