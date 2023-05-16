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
    await getQuotesList(await getUserId())
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
    return await getQuotesList(await getUserId())
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

  const removeQuote = (id?: string | number[]) => {
    let filteredArray = quotes.filter(item => item.id !== id);
    setQuotes(filteredArray);
  };

  const addQuote = quote => setQuotes(prev => [quote, ...prev]);

  const getUserId = async () => {
    const session = await getAuthenticatedUser();
    const username = session?.payload.username ?? '';
    return username;
  };

  const value = {
    quotes,
    listQuotes,
    getSelectedQuote,
    selectQuote,
    filterQuotes,
    removeQuote,
    addQuote,
  };

  return (
    <QuotesContext.Provider value={value}>{children}</QuotesContext.Provider>
  );
};
