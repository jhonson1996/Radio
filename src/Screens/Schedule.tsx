import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { colors } from '../Constants';

export const Schedule = () => {

  const [news, setNews] = useState([]);
  let text = '';

  useEffect(() => {
    fetch('https://laestacionlatinauk.com/wp-json/wp/v2/shows?_embed')
      .then(res => res.json())
      .then(res => {
        setNews(res)
      })
  }, []);

  return (
    <ScrollView>
      {news.map((item) => (
        <Container>
          <Card>
            <Title>{item.title.rendered}</Title>
            {item._embedded["wp:term"][0].map((el: any) => {
              text = `${el.name}`
              return (
                <ContainerParagraph>
                  <Paragraph>
                    {text}
                  </Paragraph>
                </ContainerParagraph>
              )
            })}
          </Card>
        </Container>
      ))}
    </ScrollView>
  )
}

const Card = styled.View`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    height: auto;
    width: 100%;
    border-radius: 5px;
    padding: 10px;
    background-color: white;
    elevation: 10;
`;

const Container = styled.View`
    margin: 10px 10px 0 10px;
`;

const ContainerParagraph = styled.View`
    display: flex;
    flex-direction: row; 
`;

const Title = styled.Text`
    padding: 0px;
    font-weight: bold;
    font-size: 18px;
    color: #000000;
    font-family: ABeeZee;
    font-weight: normal;
    font-style: italic;
    color: ${colors.navyblue};
`;

const Paragraph = styled.Text`
    display: flex;
    flex-direction: row;
    font-family: ABeeZee;
    font-weight: normal;
    font-style: italic;
    padding: 2px;
    color: ${colors.gray};
`;
