import React from 'react';
import colors from "../../Constants/colors";
import styled from 'styled-components/native';
import { View, Image, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const DrawerMenu = (props: any) => {
  return (
    <TouchableOpacity onPress={props.navigation}>
      <CategoryContainer >
        <View>
          <Icon name={props.iconName} size={30} color={colors.gray} style={{ marginLeft: 6, marginRight: 10 }} />
        </View>
        <View>
          <Text >
            {props.titleName}
          </Text>
        </View>
      </CategoryContainer>
    </TouchableOpacity>
  )
}


const Menu = (props: any) => {
  return (
    <View>
      <ViewContainer>
        <Image source={require('./img/imagen5.png')} />
        <TextImg>La radio de la buena música</TextImg>
      </ViewContainer>
      <View>
        <DrawerMenu iconName='rocket' titleName='Noticias' navigation={() => props.navigation.navigate('Home')} />
        <DrawerMenu iconName='rocket' titleName='Emisora' navigation={() => props.navigation.navigate('Emisora')} />
        <DrawerMenu iconName='rocket' titleName='Sobre Nosotros' />
        <DrawerMenu iconName='rocket' titleName='RadioShow' />
        <DrawerMenu iconName='rocket' titleName='Contacto' />
      </View>
    </View>
  )
}

const Text = styled.Text`
  font-family: ABeeZee-Regular;
  color: ${colors.gray};
  font-size: 15px;
`;

const TextImg = styled.Text`
  font-family: ABeeZee-Regular;
  color: #fff;
  font-size: 10px;
`;

const CategoryContainer = styled.View`
  margin-left: ${Dimensions.get('window').width / 10}px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  padding: 5px;
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