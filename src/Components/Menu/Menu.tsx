import React from 'react';
import {
  View,
  Image,
  Dimensions
} from 'react-native/';
import { DrawerItemList } from '@react-navigation/drawer';
import styled from 'styled-components/native';
import colors from "../../Constants/colors";

const Menu = (props: any) => {
  return (
    <View>
      <ViewContainer>
        <Image source={require('./img/imagen5.png')} />
        <TextImg>La radio de la buena música</TextImg>
      </ViewContainer>
      <View style={{ paddingTop: 25 }}>
        <DrawerItemList
          {...props}
        />
      </View>
    </View>
  )
}

const TextImg = styled.Text`
  font-family: ABeeZee-Regular;
  color: #fff;
  font-size: 11px;
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