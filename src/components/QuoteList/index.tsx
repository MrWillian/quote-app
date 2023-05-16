import React, {useEffect} from 'react';
import {Container, QuotesList, NotFoundLabel} from './styles';
import useQuotes from '../../hooks/useQuotes';
import {useTranslation} from 'react-i18next';
import QuoteItem from '../QuoteItem';
import {Quote} from '../../utils';
import {ListRenderItem} from 'react-native';

export const QuoteList = () => {
  const {quotes, listQuotes} = useQuotes();
  const {t} = useTranslation();

  useEffect(() => {
    listQuotes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderItem: ListRenderItem<Quote> = ({item}) => (
    <QuoteItem quote={item} />
  );

  const emptyItem = () => {
    return <NotFoundLabel>{t('quotes_not_found')}</NotFoundLabel>;
  };

  return (
    <Container>
      <QuotesList
        data={quotes}
        renderItem={renderItem}
        keyExtractor={(item: Quote) => item.id}
        ListEmptyComponent={emptyItem}
      />
    </Container>
  );
};
