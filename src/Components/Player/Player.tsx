import React from 'react';
import { Dimensions, Text, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styled from 'styled-components/native';
import { colors } from '../../Constants';

export default (props: any) => {
  return(
    <Player>
      <View style={{flex: 1.1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>
          <ButtonPlay>
            <AntDesign name="playcircleo" size={50} color="#ffffff" style={{paddingTop: 4, paddingLeft: 4}}/>
          </ButtonPlay>
        </Text>
      </View>

      <View style={{flex: 1, justifyContent: 'center', marginLeft: 10}}>
        <Text style={{color: '#fff', fontFamily: 'ABeeZee-Regular', fontSize: 10}}>Al Aire</Text>
      </View>

      <View style={{flex: 4, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: '#fff', fontFamily: 'ABeeZee-Regular', fontSize: 10}}>La Estacion Latina UK</Text>
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



const ButtonPlay = styled.View`
  width: ${Dimensions.get('window').height/11}px;
  height: ${Dimensions.get('window').height/11}px;
  background-color: ${colors.fucshia};
  margin-top: 10px;
  margin-left: 55px;
  border-radius: 40px;
`;





