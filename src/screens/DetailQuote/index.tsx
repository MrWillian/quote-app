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
import {useTranslation} from 'react-i18next';
import {Alert} from 'react-native';

export const DetailQuote = () => {
  const {getSelectedQuote, removeQuote} = useQuotes();
  const [quote, setQuote] = useState<Quote>();
  const {t} = useTranslation();
  const navigation = useNavigation<mainScreenProp>();

  useEffect(() => {
    const auxilliaryQuote = getSelectedQuote();
    setQuote(auxilliaryQuote);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDelete = async (id?: string | number[]) => {
    Alert.alert(t('delete'), t('sure_you_want_delete') ?? '', [
      {
        text: t('cancel') ?? '',
        onPress: () => null,
        style: 'cancel',
      },
      {
        text: t('yes') ?? '',
        onPress: () => remove(id),
      },
    ]);
  };

  const remove = async (id?: string | number[]) => {
    const result = await deleteQuote(id);
    if (result.status === '200') {
      removeQuote(id);
      Alert.alert(t('success'));
      handleNavigateToDashboard();
    }
  };

  const handleNavigateToDashboard = () => navigation.navigate('Dashboard');

  return (
    <Container>
      <Title>{t('look')}</Title>
      <Subtitle>{t('this_should_help_you')}</Subtitle>
      <ContentContainer>
        <ContentContainerHead>
          <QuoteTitle>
            {`${t('title')}`} {quote?.title}
          </QuoteTitle>
          <QuoteDate>
            {`${t('date')}`} {quote?.date}
          </QuoteDate>
        </ContentContainerHead>
        <QuoteDescription>
          {`${t('description')}`} {quote?.description}
        </QuoteDescription>
        <QuoteDeleteButton onPress={() => handleDelete(quote?.id)}>
          <QuoteDeleteButtonLabel>{t('delete')}</QuoteDeleteButtonLabel>
        </QuoteDeleteButton>
        <Button title={t('new_search')} onPress={handleNavigateToDashboard} />
      </ContentContainer>
    </Container>
  );
};
