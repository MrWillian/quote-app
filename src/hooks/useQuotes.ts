import {useContext} from 'react';
import {IQuotesContextType, QuotesContext} from '../context/QuotesContext';

const useQuotes = () => useContext(QuotesContext) as IQuotesContextType;

export default useQuotes;
