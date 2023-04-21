export const ACCESS_TOKEN = 'ACCESS_TOKEN';
export const UNVERIFIED_ACCOUNT_EMAIL = 'UNVERIFIED_ACCOUNT_EMAIL';

export type Quote = {
  id: string;
  title: string;
  description: string;
  date: string;
};

export type Quotes = {
  quotes: Quote[];
};
