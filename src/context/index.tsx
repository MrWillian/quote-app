import React from 'react';
import {AuthProvider} from './AuthContext';
import {QuotesProvider} from './QuotesContext';

export const AppProvider = ({children}: {children: React.ReactNode}) => (
  <AuthProvider>
    <QuotesProvider>{children}</QuotesProvider>
  </AuthProvider>
);
