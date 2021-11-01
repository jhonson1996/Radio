import React from 'react';
import { Dimensions, Text, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styled from 'styled-components/native';
import { colors } from '../../Constants';
import TrackPlayer from 'react-native-track-player';

import { useState } from 'react';

export default (props: any) => {

  const [play, setPlay] = useState(true);
  

  const onPlayPausePress = () => {
    
    if (play === true) {
      TrackPlayer.pause();
      setPlay(false);
    }

    if (play === false) {
      TrackPlayer.play();
      setPlay(true);
    }
  }


  return(
    <Player>
      <ViewButton>
      
        <Text onPress={onPlayPausePress}>
          <ButtonPlay>
            <AntDesign name={play ? 'pausecircleo': 'playcircleo'} size={50} color="#ffffff" />
          </ButtonPlay>
        </Text>
      </ViewButton>

      <View style={{flex: 1, justifyContent: 'center', marginLeft: 10}}>
        <Textt >Al Aire</Textt>
      </View>

      <View style={{flex: 4, justifyContent: 'center', alignItems: 'center'}}>
        <Textt >La Estacion Latina UK</Textt>
      </View>
    </Player>
  )
}


const Player = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: ${Dimensions.get('window').height/8}px;
  background-color: ${colors.navyblue};
  border-radius: 50px;
  padding-left: 20px;
  justify-content: space-between;
`;



const Textt = styled.Text`
  color: white;
  font-family: ABeeZee-Regular;
  font-size: 10;
`;

const ViewButton = styled.View`
  flex: 1.1;
  justify-content: center;
  align-items: center;
`;


const ButtonPlay = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${Dimensions.get('window').height/11}px;
  height: ${Dimensions.get('window').height/11}px;
  background-color: ${colors.fucshia};
  border-radius: 40px;
`;





