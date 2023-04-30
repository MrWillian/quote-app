import React from 'react';
import {Quote} from '../../utils';

export interface IQuotesContextType {
  quotes: Quote[];
  selectedQuote?: Quote;
  listQuotes: () => Promise<unknown>;
  getSelectedQuote: () => Quote | undefined;
  selectQuote: (quote: Quote) => void;
  filterQuotes: (filter: string) => void;
}

export const QuotesContext = React.createContext<IQuotesContextType>({
  quotes: [],
  selectedQuote: undefined,
  listQuotes: async () => null,
  getSelectedQuote: () => undefined,
  selectQuote: () => null,
  filterQuotes: () => null,
});

export interface IQuotesProviderProps {
  children?: React.ReactNode;
}
