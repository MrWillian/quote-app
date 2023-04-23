import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Container,
  DetailButton,
  QuoteItem,
  QuoteDescription,
  QuoteInfo,
  QuoteTitle,
  NotFoundLabel,
} from './styles';
import useQuotes from '../../hooks/useQuotes';
import {useNavigation} from '@react-navigation/native';
import {mainScreenProp} from '../../routes/MainStack';
import {Quote} from '../../utils/types';

export const QuoteList = () => {
  const {quotes, listQuotes} = useQuotes();
  const navigation = useNavigation<mainScreenProp>();

  useEffect(() => {
    listQuotes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDetailQuote = (quote: Quote) => {
    console.log('selected quote', quote);
    navigation.navigate('DetailQuote', {quote});
  };

  return (
    <Container>
      {quotes.length > 0 ? (
        quotes.map(quote => {
          return (
            <QuoteItem key={quote.id}>
              <QuoteInfo>
                <QuoteTitle>{quote.title}</QuoteTitle>
                <QuoteDescription>{quote.description}</QuoteDescription>
              </QuoteInfo>
              <DetailButton onPress={() => handleDetailQuote(quote)}>
                <Icon name="arrow-circle-right" size={24} color="#fff" />
              </DetailButton>
            </QuoteItem>
          );
        })
      ) : (
        <NotFoundLabel>Quotes not found...</NotFoundLabel>
      )}
    </Container>
  );
};
