import React from 'react';
import {
  ScrollView,
  Text
} from 'react-native';
import styled from 'styled-components/native';

export const Contact = () => {
  return (
    <ScrollView>
      <ViewContainer>
        <Text>Pronto..</Text>
      </ViewContainer>
    </ScrollView >
  )
}

const ViewContainer = styled.View`
  align-items: center;
`;
