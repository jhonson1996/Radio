import React from 'react';
import colors from "../../Constants/colors";
import { DrawerItemList } from '@react-navigation/drawer';
import styled from 'styled-components/native';
import { View, Image, TouchableOpacity, Dimensions } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

const DrawerMenu = (props) => {
  return(
    <TouchableOpacity onPress={props.navigation}>
      <CategoryContainer >
        <View>
          <AntDesign name={props.iconName} size={30} color='#ffffff' style={{marginLeft: 6,marginRight: 10}}/>
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
            <DrawerMenu iconName='newspaper-o' titleName='Noticias' navigation={()=> props.navigation.navigate('Home')}/>
            <DrawerMenu iconName='home' titleName='Emisora' navigation={()=> props.navigation.navigate('Emisora')}/>
            <DrawerMenu iconName='home' titleName='Sobre Nosotros'/>
            <DrawerMenu iconName='home' titleName='RadioShow'/>
            <DrawerMenu iconName='home' titleName='Contacto'/>
            </View>
        </View>
    )
}

const Text = styled.Text`
  font-family: ABeeZee-Regular;
  color: #ffffff;
  font-size: 15px;
`;

const TextImg = styled.Text`
  font-family: ABeeZee-Regular;
  color: #fff;
  font-size: 10px;
`;

const CategoryContainer = styled.View`
  background-color: #012342;
  margin-left: ${Dimensions.get('window').width / 10}px;
  margin-bottom: ${Dimensions.get('window').width / 15}px;
  margin-top: 25px;
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