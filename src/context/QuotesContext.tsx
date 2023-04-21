/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useCallback} from 'react';
import {Quote} from '../utils/types';
import {getQuotesList} from '../lib/quotes/listQuotes';
import {useAuthenticatedUser} from '../hooks';

export interface IQuotesContextType {
  quotes: Quote[];
  listQuotes: () => Promise<unknown>;
  filterQuotes: (filter: string) => void;
}

export const QuotesContext = React.createContext<IQuotesContextType>({
  quotes: [],
  listQuotes: async () => null,
  filterQuotes: () => null,
});

export interface IQuotesProviderProps {
  children?: React.ReactNode;
}

export const QuotesProvider = ({children}: IQuotesProviderProps) => {
  const [quotes, setQuotes] = useState<Quote[]>([]);
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

  const titleAndDescriptionQuoteIncludesFilter = (
    quote: Quote,
    filter: string,
  ) => {
    const uncapitalizedTitle = quote.title.toLowerCase();
    const uncapitalizedDescription = quote.description.toLowerCase();
    const uncapitalizedFilter = filter.toLowerCase();
    return (
      uncapitalizedTitle.includes(uncapitalizedFilter) ||
      uncapitalizedDescription.includes(uncapitalizedFilter)
    );
  };

  const value = {
    quotes,
    listQuotes,
    filterQuotes,
  };

  return (
    <QuotesContext.Provider value={value}>{children}</QuotesContext.Provider>
  );
};
