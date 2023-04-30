import {useContext} from 'react';
import {IQuotesContextType, QuotesContext} from '../context/types/quotes';

const useQuotes = () => useContext(QuotesContext) as IQuotesContextType;

export default useQuotes;
