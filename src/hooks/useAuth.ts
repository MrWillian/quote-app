import {useContext} from 'react';
import {AuthContext, IAuthContextType} from '../context/types/auth';

const useAuth = () => useContext(AuthContext) as IAuthContextType;

export default useAuth;
