import React, {useEffect, useState} from 'react';
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
import {useNavigation} from '@react-navigation/native';
import {mainScreenProp} from '../../routes/MainStack';
import {Quote} from '../../utils/types';
import useQuotes from '../../hooks/useQuotes';
import {deleteQuote} from '../../lib/quotes/deleteQuote';
import {Alert} from 'react-native';

export const DetailQuote = () => {
  const {getSelectedQuote, removeQuote} = useQuotes();
  const [quote, setQuote] = useState<Quote>();
  const navigation = useNavigation<mainScreenProp>();

  useEffect(() => {
    const auxilliaryQuote = getSelectedQuote();
    setQuote(auxilliaryQuote);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDelete = async (id?: string | number[]) => {
    const result = await deleteQuote(id);
    if (result.status === '200') {
      removeQuote(id);
      Alert.alert('Success!!');
      handleNavigateToDashboard();
    }
  };

  const handleNavigateToDashboard = () => navigation.navigate('Dashboard');

  return (
    <Container>
      <Title>Look!!</Title>
      <Subtitle>This Should Help you Remember...</Subtitle>
      <ContentContainer>
        <ContentContainerHead>
          <QuoteTitle>Title: {quote?.title}</QuoteTitle>
          <QuoteDate>Date: {quote?.date}</QuoteDate>
        </ContentContainerHead>
        <QuoteDescription>Description: {quote?.description}</QuoteDescription>
        <QuoteDeleteButton onPress={() => handleDelete(quote?.id)}>
          <QuoteDeleteButtonLabel>Delete</QuoteDeleteButtonLabel>
        </QuoteDeleteButton>
        <Button title="New Search" onPress={handleNavigateToDashboard} />
      </ContentContainer>
    </Container>
  );
};
