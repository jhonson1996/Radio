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
        <McText color="#ffff">LA ESTACION LATINA UK</McText>
      </View>
    </Header>
    <OutstandingNews>
      <Image
        source={require('../../../assets/images/figmaRadio/home/Carrusel.png')}
      />
    </OutstandingNews>
    {/* -------------------------------------------------###------------------------------------------------- */}
    <Categories>
      <McText size="18" marginTop="23">
        Entretenimiento
      </McText>
      <NewsContainer>
        <News>
          <Image
            source={require('../../../assets/images/figmaRadio/home/Rectangle 534 (1).png')}
          />
        </News>

        <News>
          <Image
            source={require('../../../assets/images/figmaRadio/home/Rectangle 534 (1).png')}
          />
        </News>
      </NewsContainer>
      {/* ----------------------------------------------------------- */}
      <View>
        <McText size="18" marginTop="23">
          Internacinal
        </McText>
      </View>
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
  color: ${props => props.color || '#000000'};
  font-family: Alegreya Sans SC;
  font-style: normal;
  font-weight: 500;
  font-size: ${props => props.size || 16}px;
  line-height: 32px;
  margin-left: ${props => props.size || 16}px;
  font-family: ABeeZee;
  margin-top: ${props => props.marginTop || 0}px;
`;

const OutstandingNews = styled.SafeAreaView`
  width: 375px;
  height: 202px;
`;

const Categories = styled.SafeAreaView`
  display: flex;
  flex-direcction: row;
  margin-top: -25px;
  width: 360px;
  height: 549px;
  background: #f8f8f8;
  border-radius: 27px;
`;

const News = styled.SafeAreaView`
  width: 163px;
  height: 150px;
  background-color: red;
  left: 16px;
`;

const NewsContainer = styled.SafeAreaView`
  display: flex;
  flex-direction: row;
  row-gap: 5px;
  background-color: blue;
`;

const McImage = styled.Image``;

export default Home;
