import React from 'react';
import { ScrollView, StatusBar, useWindowDimensions } from 'react-native';
import styled from 'styled-components/native';
import { colors } from '../Constants';
import RenderHTML from 'react-native-render-html';

export const NewsDetailScreen = ({ route }: { route: any }) => {

  const { item } = route.params
  const { width } = useWindowDimensions();
  const renderersProps = {
    img: {
      enableExperimentalPercentWidth: false
    }
  };
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
      <StatusBar animated={true} barStyle="dark-content" backgroundColor={'white'} />
      <ViewContainer>
        <TextTitle style={{ color: colors.navyblue }}>
          {item.title}
        </TextTitle>
        <RenderHTML
          contentWidth={width}
          source={{ html: item.content }}
          systemFonts={['ABeeZee-Regular']}
          enableExperimentalGhostLinesPrevention={true}
          renderersProps={renderersProps}
          tagsStyles={tagsStyles}
        />
      </ViewContainer>
    </ScrollView>
  );
}

const ViewContainer = styled.View`
  margin: 20px;
`;

const TextTitle = styled.Text`
  font-size: 20px;
  display: flex;
  font-family: ABeeZee-Regular;
  align-items: center;
  text-align: justify;
  font-weight: 800;
  margin-bottom: 23px;
  font-style: normal;
  font-weight: normal;
`;
