import React from 'react';
import colors from "../../Constants/colors";
import styled from 'styled-components/native';
import {
  View,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native/';
import Icon from '../CustomIcon/CustomIcon'
import { DrawerItem, DrawerItemList, } from '@react-navigation/drawer';

const Menu = (props: any) => {
  return (
    <View>
      <ViewContainer>
        <Image source={require('./img/imagen5.png')} />
        <TextImg>La radio de la buena música</TextImg>
      </ViewContainer>
      <View>
        <DrawerItemList
          {...props}
          activeBackgroundColo={colors.navyblue}
          labelStyle={{ color: '#fff' }}
        />
      </View>
    </View>
  )
}

const Text = styled.Text`
  font-family: Alata;
  font-style: normal;
  font-weight: normal;
  color: #000000;
  font-size: 15px;
  padding-left: 5px;
`;

const TextImg = styled.Text`
  font-family: ABeeZee-Regular;
  color: #fff;
  font-size: 11px;
  
`;

const CategoryContainer = styled.View`
  margin-top: 25px;
  margin-left: ${Dimensions.get('window').width / 10}px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  padding: 5px;
  /* background-color: ${colors.navyblue}; */
`;

const ViewContainer = styled.View`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: ${Dimensions.get('window').height / 5}px;
background-color: ${colors.fucshia};

`;

export default Menu;