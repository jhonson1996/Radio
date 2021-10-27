import React from 'react';
import {
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableWithoutFeedback,
  FlatList,
  ScrollView,
  Image,
} from 'react-native';

/* import Menu from '../../../assets/images/figmaradio/home/Burguermenu.png'; */

import styled from 'styled-components/native';

const Home = () => (
  <View>
    <Header>
      <StatusBar barStyle="light-content" />

      <Image
        source={require('../../../assets/images/figmaRadio/home/Burguermenu.png')}
        style={{margin: -50}}
      />
      <View>
        <McText>LA ESTACION LATINA UK</McText>
      </View>
    </Header>
    <OutstandingNews>
      <Image
        source={require('../../../assets/images/figmaRadio/home/Carrusel.png')}
      />
    </OutstandingNews>
    <Categories>
      
    </Categories>
  </View>
);

const Header = styled.SafeAreaView`
  flex: 1;
  background-color: #ff0056;
  width: 375px;
  height: 47px;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
`;

const McText = styled.Text`
  color: #fff;
  font-family: Alegreya Sans SC;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 32px;
  margin-left: -20px;
`;

const OutstandingNews = styled.SafeAreaView`
  width: 375px;
  height: 202px;
`;

const Categories = styled.SafeAreaView`
  margin-top: -25px;
  width: 360px;
  height: 549px;
  background: #f8f8f8;
  border-radius: 27px;
`;

const McImage = styled.Image``;

export default Home;
