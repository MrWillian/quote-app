import React, {useCallback, useState} from 'react';
import {CognitoUser, CognitoUserSession} from 'amazon-cognito-identity-js';
import {useTranslation} from 'react-i18next';
import {cognitoPool as Pool} from '../utils/cognito-pool';
import {
  AuthContext,
  IAuthProviderProps,
  SignInProps,
  SignUpProps,
  User,
} from './types/auth';
import {
  UNVERIFIED_ACCOUNT_EMAIL,
  removeData,
  retrieveData,
  storeData,
} from '../utils';
import {Auth} from 'aws-amplify';

export const AuthProvider = ({children}: IAuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const {t} = useTranslation();
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
    try {
      const authenticatedUser = await Auth.signIn(email, password);
      console.log('authenticatedUser', authenticatedUser);
      setUser(authenticatedUser);
      return {type: 'success'};
    } catch (error) {
      // TODO: handle ERRORS: NotAuthorizedException, UserNotConfirmedException and DEFAULT
      return {type: 'error', message: t('error_on_signin')};
    }
  };

  /**
   * create new user account
   * @param email
   * @param password
   * @param name
   */
  const signUp = async ({email, password, givenName}: SignUpProps) => {
    try {
      const {user: authenticatedUser} = await Auth.signUp({
        username: email,
        password,
        attributes: {
          email,
          given_name: givenName,
        },
        autoSignIn: {
          enabled: true,
        },
      });
      setUnverifiedAccount({email, password});
      storeUnverifiedAccount(email);
      return {
        type: 'success',
        authenticatedUser,
        message: t('confirmation_email'),
      };
    } catch (error) {
      console.log(error);
      // TODO: Handle ERRORS: InvalidParameterException, InvalidPasswordException, UsernameExistsException and DEFAULT
      return {
        type: 'error',
        message: '' + error,
      };
    }
  };

  const storeUnverifiedAccount = async (email: string) =>
    await storeData(UNVERIFIED_ACCOUNT_EMAIL, email);

  const clearUnverifiedAccountStore = async () =>
    await removeData(UNVERIFIED_ACCOUNT_EMAIL);

  const getSession = useCallback(
    async (currentUser = Pool.getCurrentUser()) => {
      return await new Promise((resolve, reject) => {
        if (currentUser) {
          currentUser.getSession((err, session: CognitoUserSession) => {
            if (err) {
              reject();
            } else {
              resolve(session);
            }
          });
        } else {
          reject();
        }
      });
    },
    [],
  );

  /**
   * confirm account using code param
   * @param code
   * @returns {Promise<any>}
   */
  const confirmAccount = async (code: string): Promise<any> => {
    const email = await getUnverifiedAccount();
    try {
      const result = await Auth.confirmSignUp(email, code);
      if (result === 'SUCCESS') {
        clearUnverifiedAccountStore();
        if (unverifiedAccount) {
          signIn({
            email: unverifiedAccount?.email,
            password: unverifiedAccount?.password,
          });
          return {type: 'success'};
        } else {
          return {
            type: 'redirect',
            message: 'Log In with your email and password!',
          };
        }
      }
    } catch (error) {
      // TODO: Handle ERRORS: ExpiredCodeException, CodeMismatchException, DEFAULT
      return {
        type: 'error',
        message: t('error_on_confirm_signup'),
      };
    }
  };

  const resendConfirmationCode = async () => {
    const email = await getUnverifiedAccount();
    try {
      await Auth.resendSignUp(email);
      return {
        type: 'success',
        message: t('code_resent_succesfully'),
      };
    } catch (error) {
      console.error('resend error', error);
      return {
        type: 'error',
        message: t('default_error'),
      };
    }
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

  const signOut = async () => {
    try {
      await Auth.signOut();
      return true;
    } catch (error) {
      return false;
    }
  };

  const getUnverifiedAccount = async () => {
    const storedEmail = await retrieveData(UNVERIFIED_ACCOUNT_EMAIL);
    const email: string =
      unverifiedAccount.email !== ''
        ? unverifiedAccount?.email
        : storedEmail !== null
        ? storedEmail
        : '';
    return email;
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
    getSession,
    forgotPassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
