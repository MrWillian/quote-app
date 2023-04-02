import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Container,
  DetailButton,
  Quote,
  QuoteDescription,
  QuoteInfo,
  QuoteTitle,
} from './styles';

export const QuoteList = () => (
  <Container>
    <Quote>
      <QuoteInfo>
        <QuoteTitle>Chave de Fenda</QuoteTitle>
        <QuoteDescription>
          Eu coloquei a chave de fenda no ar...
        </QuoteDescription>
      </QuoteInfo>
      <DetailButton>
        <Icon name="arrow-circle-right" size={24} color="#fff" />
      </DetailButton>
    </Quote>
    <Quote>
      <QuoteInfo>
        <QuoteTitle>Chave da moto</QuoteTitle>
        <QuoteDescription>
          Eu coloquei a chave da moto na ga...
        </QuoteDescription>
      </QuoteInfo>
      <DetailButton>
        <Icon name="arrow-circle-right" size={24} color="#fff" />
      </DetailButton>
    </Quote>
    <Quote>
      <QuoteInfo>
        <QuoteTitle>Documentação do carro</QuoteTitle>
        <QuoteDescription>
          Eu coloquei todos os documentos do carro...
        </QuoteDescription>
      </QuoteInfo>
      <DetailButton>
        <Icon name="arrow-circle-right" size={24} color="#fff" />
      </DetailButton>
    </Quote>
  </Container>
);
