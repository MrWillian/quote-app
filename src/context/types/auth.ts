import React from 'react';

export interface IAuthContextType {
  user: any;
  isAuthenticated: boolean;
  unverifiedAccount: {email: string; password: string};
  signIn: (p: {email: string; password: string}) => Promise<any>;
  signOut: () => Promise<any>;
  signUp: (p: {name: string; email: string; password: string}) => Promise<any>;
  confirmAccount: (code: string) => Promise<any>;
  resendConfirmationCode: () => Promise<any>;
  getSession: () => Promise<any>;
  forgotPassword: (resetEmail: string) => void;
  getUserByAccessToken: () => void;
}

export interface IAuthProviderProps {
  children?: any;
}

export const AuthContext = React.createContext<IAuthContextType>({
  user: null,
  isAuthenticated: false,
  unverifiedAccount: {
    email: '',
    password: '',
  },
  signIn: async () => {},
  signOut: async () => {},
  signUp: async () => {},
  confirmAccount: async () => {},
  resendConfirmationCode: async () => {},
  getSession: async () => {},
  forgotPassword: async () => {},
  getUserByAccessToken: async () => {},
});

export type User = {
  name?: string;
  email?: string;
  password?: string;
};

export type SignInProps = {email: string; password: string};

export type SignUpProps = {name: string} & SignInProps;
