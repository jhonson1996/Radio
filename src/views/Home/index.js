import React from 'react';
import {
  View,
  StatusBar,
  Image,
  Dimensions,
  ScrollView
} from 'react-native';

import styled from 'styled-components/native';

const Home = (navigation) => (
  <ScrollView>
    <StatusBar
      barStyle="light-content"
      backgroundColor="#ff0056"
    />

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
  </ScrollView>

);

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
  width: ${Dimensions.get('window').width/2.35}px;
  height: 150px;
  background-color: white;
  border-radius: 25px;
  elevation: 20;
`;

export default Home;
