/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useCallback} from 'react';
import {getQuotesList} from '../lib/quotes/listQuotes';
import {useAuthenticatedUser} from '../hooks';
import {Quote, titleAndDescriptionQuoteIncludesFilter} from '../utils';
import {IQuotesProviderProps, QuotesContext} from './types/quotes';

export const QuotesProvider = ({children}: IQuotesProviderProps) => {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [selectedQuote, setSelectedQuote] = useState<Quote>();
  const [getAuthenticatedUser] = useAuthenticatedUser();

  const listQuotes = async () => {
    const username = getAuthenticatedUser()?.getUsername() ?? '';
    await getQuotesList(username)
      .then(result => {
        if (result.data) {
          setQuotes(result.data.Items);
        }
      })
      .catch(error => {
        return {
          type: 'Error',
          message: error.errorMessage,
        };
      });
  };

  const getQuotes = async () => {
    const username = getAuthenticatedUser()?.getUsername() ?? '';
    return await getQuotesList(username)
      .then(result => result.data.Items)
      .catch(error => {
        return {
          type: 'Error',
          message: error.errorMessage,
        };
      });
  };

  const filterQuotes = useCallback(async (filter: string) => {
    if (!filter) {
      return quotes;
    }
    const auxiliaryListOfQuotes = await getQuotes();
    const filteredQuotes = auxiliaryListOfQuotes.filter(quote =>
      titleAndDescriptionQuoteIncludesFilter(quote, filter),
    );
    setQuotes(filteredQuotes);
  }, []);

  const getSelectedQuote = () => selectedQuote;

  const selectQuote = (quote: Quote) => setSelectedQuote(quote);

  const value = {
    quotes,
    listQuotes,
    getSelectedQuote,
    selectQuote,
    filterQuotes,
  };

  return (
    <QuotesContext.Provider value={value}>{children}</QuotesContext.Provider>
  );
};
