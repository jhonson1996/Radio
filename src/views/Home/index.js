import React from 'react';
import {
  View,
  StatusBar,
  Image,
} from 'react-native';

import styled from 'styled-components/native';

const Home = () => (
  <View>
    <StatusBar barStyle="light-content" />
    <Header>
      <Image
        source={require('../../../assets/images/figmaRadio/home/Burguermenu.png')}
      />
      <View>
        <McText color="#ffff">LA ESTACION LATINA UK</McText>
      </View>
    </Header>
    <Carrousel>
      <Image
        source={require('../../../assets/images/figmaRadio/home/Carrusel.png')}
        style={{ width: '100%' }}
        resizeMode="stretch"
      />
    </Carrousel>
    {/* -------------------------------------------------###------------------------------------------------- */}
    <NewsContainer>
      <McText size="20" marginTop="20">
        Entretenimiento
      </McText>
      <NewsRow>
        <NewsCard>
          <Image
            source={require('../../../assets/images/figmaRadio/home/Rectangle 534 (1).png')}
          />
        </NewsCard>

        <NewsCard>
          <Image
            source={require('../../../assets/images/figmaRadio/home/Rectangle 534 (1).png')}
          />
        </NewsCard>
      </NewsRow>
      {/* ----------------------------------------------------------- */}
      <McText size="20" marginTop="20">
        Internacional
      </McText>
      <NewsRow>
        <NewsCard>
          <Image
            source={require('../../../assets/images/figmaRadio/home/Rectangle 534 (1).png')}
          />
        </NewsCard>

        <NewsCard>
          <Image
            source={require('../../../assets/images/figmaRadio/home/Rectangle 534 (1).png')}
          />
        </NewsCard>
      </NewsRow>

      <View style={{height:200}}>
        {/* ---player--- */}
      </View>
    </NewsContainer>
  </View>
);

const Header = styled.SafeAreaView`
  flex: 1;
  background-color: #ff0056;
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

const Carrousel = styled.View`
`;

const NewsContainer = styled.View`
  display: flex;
  flex-direcction: row;
  margin-top: -25px;
  background: #f8f8f8;
  borderTopLeftRadius: 27px;
  borderTopRightRadius: 27px;
`;

const NewsRow = styled.View`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  margin-horizontal: 8px;
  margin-top: 18px;
  margin-bottom: 8px;
`;

const NewsCard = styled.View`
  width: 45%
  height: 150px;
  background-color: white;
  border-radius: 25px;
  shadowColor: "#000";
  shadowOffset: {
    width: 0,
    height: 10,
  }
  shadowOpacity: 0.5
  shadowRadius: 10,
  elevation: 20
`;

export default Home;
