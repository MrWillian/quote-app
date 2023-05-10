import React, {useCallback, useState} from 'react';
import {
  AuthenticationDetails,
  CognitoUser,
  CognitoUserSession,
} from 'amazon-cognito-identity-js';
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
  ACCESS_TOKEN,
  UNVERIFIED_ACCOUNT_EMAIL,
  removeData,
  retrieveData,
  storeData,
} from '../utils';
import {Auth} from 'aws-amplify';
import getPayload from '../lib/user/getAccesTokenPayload';

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
    return new Promise((resolve, reject) => {
      const cognitoUser = new CognitoUser({Username: email, Pool});
      setUser(cognitoUser as User);
      const authDetails = new AuthenticationDetails({
        Username: email,
        Password: password,
      });
      cognitoUser.authenticateUser(authDetails, {
        onSuccess: async response => {
          const accessToken = response.getAccessToken().getJwtToken();
          await storeData(ACCESS_TOKEN, accessToken);

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
                message: t('not_authorized'),
              });
              break;
            case 'UserNotConfirmedException':
              reject({
                type: 'error',
                message: t('user_not_confirmed'),
              });
              break;
            default:
              reject({
                type: 'error',
                message: t('default_error'),
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
      // TODO: Handle ERRORS: InvalidParameterException, InvalidPasswordException, UsernameExistsException
      return {
        type: 'error',
        message: '' + error,
      };
    }
  };

  const getUserByAccessToken = async () => {
    const token = await retrieveData(ACCESS_TOKEN);
    console.log(token);
    await getPayload(token);
  };

  const getUnverifiedAccount = async () => {
    const email = await retrieveData(UNVERIFIED_ACCOUNT_EMAIL);
    return email;
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
                message: t('expired_code'),
              });
              break;
            case 'CodeMismatchException':
              reject({
                type: 'Error',
                message: t('code_mismatch'),
              });
              break;
            default:
              reject({
                type: 'Error',
                message: t('default_error'),
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
            message: t('redirect_and_login'),
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
      return true;
    }
    return false;
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
    getUserByAccessToken,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
