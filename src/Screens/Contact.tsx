import React from 'react';
import {
  ScrollView,
  Text
} from 'react-native';
import styled from 'styled-components/native';
import { withPlayer } from '../Hoc/withPlayer';

export const Contact = () => withPlayer(() => {

  return (
    <ScrollView>
      <ViewContainer>
        <Text>Pronto..</Text>
      </ViewContainer>
    </ScrollView >
  )
})

const ViewContainer = styled.View`
  align-items: center;
`;
