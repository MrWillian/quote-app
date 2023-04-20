import useAuthenticatedUser from './useAuthenticatedUser';

const useCurrentUser = () => {
  const [getAuthenticatedUser] = useAuthenticatedUser();
  const currentUser = getAuthenticatedUser();
  return [currentUser];
};

export default useCurrentUser;
