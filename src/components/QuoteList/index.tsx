import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Container,
  DetailButton,
  Quote,
  QuoteDescription,
  QuoteInfo,
  QuoteTitle,
  NotFoundLabel,
} from './styles';
import useQuotes from '../../hooks/useQuotes';

export const QuoteList = () => {
  const {quotes, listQuotes} = useQuotes();

  useEffect(() => {
    listQuotes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        <NotFoundLabel>Quotes not found...</NotFoundLabel>
      )}
    </Container>
  );
};
