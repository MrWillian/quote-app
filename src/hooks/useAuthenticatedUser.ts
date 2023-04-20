import {useCallback, useEffect} from 'react';
import {cognitoPool} from '../utils/cognito-pool';

const useAuthenticatedUser = () => {
  const getAuthenticatedUser = useCallback(() => {
    return cognitoPool.getCurrentUser();
  }, []);

  useEffect(() => {
    getAuthenticatedUser();
  }, [getAuthenticatedUser]);

  return [getAuthenticatedUser];
};

export default useAuthenticatedUser;
