import React, { useState } from 'react';
import { Pressable, Text } from 'react-native';
import TrackPlayer from 'react-native-track-player';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styled from 'styled-components/native';

import { colors } from '../../Constants';


export default (props: any) => {

  const [isPlaying, setisPlaying] = useState(true);

  return (
    <Player>
      <GenericContainer flex={1} alignItems='flex-start'>
        <PlayerButton>
          <Pressable onPress={track => {
            isPlaying
              ? TrackPlayer.pause() && setisPlaying(false)
              : TrackPlayer.play() && setisPlaying(true);
          }} hitSlop={8}>
            <AntDesign name={isPlaying ? "pausecircleo" : "playcircleo"} size={32} color="#ffffff" />
          </Pressable>
        </PlayerButton>
      </GenericContainer>

      <GenericContainer flex={1} alignItems='flex-start'>
        <Text style={{ color: '#fff', fontFamily: 'ABeeZee-Regular', fontSize: 14 }}>Al Aire</Text>
      </GenericContainer>

      <GenericContainer flex={4} alignItems='flex-end'>
        <Text style={{ color: '#fff', fontFamily: 'ABeeZee-Regular', fontSize: 14 }}>La Estacion Latina UK</Text>
      </GenericContainer>
    </Player >
  )
}

const Player = styled.View`
  flex-direction: row;
  flex:1;
  width: 100%;
  background-color: ${colors.navyblue};
  border-radius: 80px;
  padding-horizontal: 30px;
  padding-vertical: 10px;
`;

const GenericContainer = styled.View<{ flex: number, alignItems: string }>`
  flex: ${({ flex }) => flex};
  align-items: ${({ alignItems }) => alignItems};
  justify-content: center;
`

const PlayerButton = styled.View`
  background-color: ${colors.fucshia};
  padding: 7px;
  border-radius: 40px;
`;
