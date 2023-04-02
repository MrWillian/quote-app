import React from 'react';
import {Button} from '../../components';
import {
  Container,
  ContentContainer,
  ContentContainerHead,
  QuoteDate,
  QuoteDeleteButton,
  QuoteDeleteButtonLabel,
  QuoteDescription,
  QuoteTitle,
  Subtitle,
  Title,
} from './style';

export const DetailQuote = () => {
  return (
    <Container>
      <Title>Look!!</Title>
      <Subtitle>This Should Help you Remember...</Subtitle>

      <ContentContainer>
        <ContentContainerHead>
          <QuoteTitle>Chave de Fenda</QuoteTitle>
          <QuoteDate>18/02/2023</QuoteDate>
        </ContentContainerHead>
        <QuoteDescription>
          Eu coloquei a chave de fenda no armário porque na caixa não cabia mais
        </QuoteDescription>
        <QuoteDeleteButton onPress={() => console.log('Delete')}>
          <QuoteDeleteButtonLabel>Delete</QuoteDeleteButtonLabel>
        </QuoteDeleteButton>
        <Button label="New Search" />
      </ContentContainer>
    </Container>
  );
};
