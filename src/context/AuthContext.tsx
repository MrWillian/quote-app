import React, {useCallback, useState} from 'react';
import {
  AuthenticationDetails,
  CognitoUser,
  CognitoUserAttribute,
  CognitoUserSession,
} from 'amazon-cognito-identity-js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {cognitoPool as Pool} from '../utils/cognito-pool';
import {
  AuthContext,
  IAuthProviderProps,
  SignInProps,
  SignUpProps,
  User,
} from './types/auth';

export const AuthProvider = ({children}: IAuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [unverifiedAccount, setUnverifiedAccount] = useState({
    email: '',
    password: '',
  });

  /**
   * log user in
   * @param email
   * @param password
   */
  const signIn = async ({email, password}: SignInProps) => {
    return new Promise((resolve, reject) => {
      const cognitoUser = new CognitoUser({Username: email, Pool});
      setUser(cognitoUser as User);
      const authDetails = new AuthenticationDetails({
        Username: email,
        Password: password,
      });
      cognitoUser.authenticateUser(authDetails, {
        onSuccess: async response => {
          const token = response?.getRefreshToken().getToken();
          await AsyncStorage.setItem('REFRESH_TOKEN', token);
          resolve({
            type: 'success',
            message: 'Success',
            response,
          });
        },

        onFailure: err => {
          switch (err.name) {
            case 'NotAuthorizedException':
              reject({
                type: 'error',
                message: 'Incorrect username or password.',
              });
              break;
            case 'UserNotConfirmedException':
              reject({
                type: 'error',
                message: 'Please confirm your email address.',
              });
              break;
            default:
              reject({
                type: 'error',
                message:
                  'Oops! Looks like something went wrong. Please try again later.',
              });
          }
        },
      });
    });
  };

  /**
   * create new user account
   * @param email
   * @param password
   * @param name
   */
  const signUp = async ({email, password, name}: SignUpProps) => {
    const userAttributes = [
      new CognitoUserAttribute({
        Name: 'given_name',
        Value: name,
      }),
      new CognitoUserAttribute({
        Name: 'email',
        Value: email,
      }),
    ];

    return new Promise((resolve, reject) => {
      Pool.signUp(email, password, userAttributes, [], (err, data) => {
        if (err) {
          switch (err.name) {
            case 'InvalidParameterException':
              reject({
                type: 'Error',
                message: 'Please enter a valid email address.',
              });
              break;
            case 'InvalidPasswordException':
              reject({
                type: 'Error',
                message: 'Your password must be at least 6 characters long.',
              });
              break;
            case 'UsernameExistsException':
              reject({
                type: 'Error',
                message:
                  'An account associated with this email address already exists.',
              });
              break;
            default:
              reject({
                type: 'Error',
                message:
                  'Oops! Looks like something went wrong. Please try again later.',
              });
          }
        }

        setUnverifiedAccount({email, password});
        storeUnverifiedAccount(email);

        resolve({
          type: 'Success',
          data,
          message:
            'A confirmation email has been sent to your email address. Please check the code inside.',
        });
      });
    });
  };

  const getUnverifiedAccount = async () => {
    const email = await AsyncStorage.getItem('UNVERIFIED_ACCOUNT_EMAIL');
    return email;
  };

  const storeUnverifiedAccount = async (email: string) =>
    await AsyncStorage.setItem('UNVERIFIED_ACCOUNT_EMAIL', email);

  const clearUnverifiedAccountStore = async () =>
    await AsyncStorage.setItem('UNVERIFIED_ACCOUNT_EMAIL', '');

  const getSessionToken = useCallback(async () => {
    const currentUser = Pool.getCurrentUser();
    if (!currentUser) {
      return;
    }

    currentUser.getSession((err, session: CognitoUserSession) => {
      if (err) {
        return;
      }

      const sessionToken = session?.getRefreshToken().getToken();
      return sessionToken;
    });
  }, []);

  /**
   * confirm account using code
   * @param code
   * @returns {Promise<any>}
   */
  const confirmAccount = async (code: string) => {
    const storedEmail = await getUnverifiedAccount();
    const email: string =
      unverifiedAccount.email !== ''
        ? unverifiedAccount?.email
        : storedEmail !== null
        ? storedEmail
        : '';
    const cognitoUser = new CognitoUser({
      Username: email,
      Pool: Pool,
    });

    return new Promise((resolve, reject) => {
      cognitoUser.confirmRegistration(code, false, (error, result) => {
        if (error) {
          console.log('error', error);
          switch (error.name) {
            case 'ExpiredCodeException':
              reject({
                type: 'Error',
                message: 'Invalid code provided, please request a code again.',
              });
              break;
            case 'CodeMismatchException':
              reject({
                type: 'Error',
                message:
                  'Invalid verification code provided, please try again.',
              });
              break;
            default:
              reject({
                type: 'Error',
                message:
                  'Oops! Looks like something went wrong. Please try again later.',
              });
          }
        }
        clearUnverifiedAccountStore();
        if (unverifiedAccount) {
          signIn({
            email: unverifiedAccount?.email,
            password: unverifiedAccount?.password,
          });
          resolve({
            type: 'success',
            result,
          });
        } else {
          resolve({
            type: 'redirect',
            result,
            message: 'Log In with your email and password!',
          });
        }
      });
    });
  };

  const resendConfirmationCode = async () => {
    const storedEmail = await getUnverifiedAccount();
    const email: string =
      unverifiedAccount.email !== ''
        ? unverifiedAccount?.email
        : storedEmail !== null
        ? storedEmail
        : '';
    const cognitoUser = new CognitoUser({
      Username: email,
      Pool: Pool,
    });
    return await new Promise((resolve, reject) => {
      cognitoUser.resendConfirmationCode((error, result) => {
        if (error) {
          reject(error);
        }
        resolve(result);
      });
    });
  };

  const forgotPassword = (resetEmail: string) => {
    const cognitoUser = new CognitoUser({
      Username: resetEmail,
      Pool: Pool,
    });
    setUser(cognitoUser as User);

    cognitoUser.forgotPassword({
      onSuccess: response => response,
      onFailure: error => error,
    });
  };

  /**
   * logout user
   */
  const signOut = async () => {
    const currentUser = Pool.getCurrentUser();
    if (currentUser) {
      currentUser.signOut();
    }
  };

  const value = {
    user,
    isAuthenticated: !!user,
    unverifiedAccount,
    signIn,
    signOut,
    signUp,
    confirmAccount,
    resendConfirmationCode,
    getSessionToken,
    forgotPassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
