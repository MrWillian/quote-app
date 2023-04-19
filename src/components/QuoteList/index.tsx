import React from 'react';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Container,
  DetailButton,
  Quote,
  QuoteDescription,
  QuoteInfo,
  QuoteTitle,
} from './styles';

type Quote = {
  id: string;
  title: string;
  description: string;
  date: string;
};

type Quotes = {
  quotes: Quote[];
};

export const QuoteList = ({quotes}: Quotes) => {
  return (
    <Container>
      {quotes.length > 0 ? (
        quotes.map(quote => {
          return (
            <Quote key={quote.id}>
              <QuoteInfo>
                <QuoteTitle>{quote.title}</QuoteTitle>
                <QuoteDescription>{quote.description}</QuoteDescription>
              </QuoteInfo>
              <DetailButton>
                <Icon name="arrow-circle-right" size={24} color="#fff" />
              </DetailButton>
            </Quote>
          );
        })
      ) : (
        <Text>Nenhum encontrado...</Text>
      )}
    </Container>
  );
};
