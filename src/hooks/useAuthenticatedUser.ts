import {useCallback, useEffect} from 'react';
import {Auth} from 'aws-amplify';

const useAuthenticatedUser = () => {
  const getAuthenticatedUser = useCallback(async () => {
    try {
      const currentSession = await Auth.currentSession();
      return currentSession.getAccessToken();
    } catch (err) {
      return null;
    }
  }, []);

  useEffect(() => {
    getAuthenticatedUser();
  }, [getAuthenticatedUser]);

  return [getAuthenticatedUser];
};

export default useAuthenticatedUser;
