import React from 'react';
import {
  Container,
  QuoteInfo,
  QuoteTitle,
  QuoteDescription,
  DetailButton,
} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Quote} from '../../utils/types';
import useQuotes from '../../hooks/useQuotes';
import {useNavigation} from '@react-navigation/native';
import {mainScreenProp} from '../../routes/types';

type Props = {
  quote: Quote;
};

export const QuoteItem = ({quote}: Props) => {
  const {selectQuote} = useQuotes();
  const navigation = useNavigation<mainScreenProp>();

  const handleDetailQuote = (selectedQuote: Quote) => {
    selectQuote(selectedQuote);
    navigation.navigate('DetailQuote');
  };

  return (
    <Container>
      <QuoteInfo>
        <QuoteTitle>{quote.title}</QuoteTitle>
        <QuoteDescription>{quote.description}</QuoteDescription>
      </QuoteInfo>
      <DetailButton onPress={() => handleDetailQuote(quote)}>
        <Icon name="arrow-circle-right" size={24} color="#fff" />
      </DetailButton>
    </Container>
  );
};

export default QuoteItem;
