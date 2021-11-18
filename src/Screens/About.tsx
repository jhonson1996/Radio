import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import RenderHTML from 'react-native-render-html';
import { colors } from '../Constants';
import {
  ActivityIndicator,
  ScrollView,
  View
} from 'react-native';


export const About = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://laestacionlatinauk.com/wp-json/wp/v2/pages/14250')
      .then(res => res.json())
      .then(res => {
        setData(res)
      })
  }, []);

  const Loader = () => {
    return (
      <View>
        <ActivityIndicator size='large' color={colors.fucshia} />
      </View>
    )
  }
  const tagsStyles = {
    p: {
      color: colors.gray, fontSize: 16, fontFamily: 'ABeeZee-Regular', textAlign: 'justify'
    },
    h1: { color: colors.gray },
    h2: { color: colors.gray },
    a: { color: colors.gray },
    b: { color: colors.gray, fontFamily: 'ABeeZee-Regular', fontWeight: '800' },
    li: { color: colors.gray },
    ul: { color: colors.gray },
    span: { color: colors.gray },
    div: { color: colors.gray },
  }
  return (
    <ScrollView>
      {data.length <= 0 ?
        <Loader /> :
        <ViewContainer>
          <RenderHTML
            source={{ html: data.content.rendered }}
            systemFonts={['ABeeZee-Regular']}
            enableExperimentalGhostLinesPrevention={true}
            tagsStyles={tagsStyles}
          />
        </ViewContainer>
      }
    </ScrollView>
  )
}

const ViewContainer = styled.View`
  margin: 20px;
`;
