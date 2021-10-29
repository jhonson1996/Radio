import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export default (props: any) => {
  return(
    <NewsCard>
      <Image source={{uri: props.item.image}}/>
      <TextContainer>
        <Text numberOfLines={4} ellipsizeMode='tail'>{props.item.title}</Text>
      </TextContainer>
    </NewsCard>
  )
}

const NewsCard = styled.View`
  width: ${Dimensions.get('window').width/2.28}px;
  height: ${Dimensions.get('window').height/5}px
  background-color: white;
  border-radius: 25px;
  elevation: 15;
  margin-bottom: 10px;
`;

const Image = styled.Image`
  flex: 1.2;
  width: 100%;
  height: auto;
  borderTopLeftRadius: 27px;
  borderTopRightRadius: 27px;
  resize-mode: cover;
`
const TextContainer = styled.View`
  flex:1;
  justify-content: center;
  margin-horizontal: 14px;
  margin-bottom: 10px;
`
const Text = styled.Text`
  color: gray;
  font-size: 14.5px;
  font-family: ABeeZee-Regular;
  text-align: center;
`