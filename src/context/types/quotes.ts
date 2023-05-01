import React from 'react';
import {Quote} from '../../utils';

export interface IQuotesContextType {
  quotes: Quote[];
  selectedQuote?: Quote;
  listQuotes: () => Promise<unknown>;
  getSelectedQuote: () => Quote | undefined;
  selectQuote: (quote: Quote) => void;
  filterQuotes: (filter: string) => void;
  removeQuote: (id?: string | number[]) => void;
  addQuote: (quote: Quote) => void;
}

export const QuotesContext = React.createContext<IQuotesContextType>({
  quotes: [],
  selectedQuote: undefined,
  listQuotes: async () => null,
  getSelectedQuote: () => undefined,
  selectQuote: () => null,
  filterQuotes: () => null,
  removeQuote: () => null,
  addQuote: () => null,
});

export interface IQuotesProviderProps {
  children?: React.ReactNode;
}
