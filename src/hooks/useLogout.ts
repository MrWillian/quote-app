import useAuth from './useAuth';
import {useNavigation} from '@react-navigation/native';
import {removeData} from '../utils/storage';
import {ACCESS_TOKEN} from '../utils/types';
import {mainScreenProp} from '../routes/types';

const useLogout = () => {
  const {signOut} = useAuth();
  const navigation = useNavigation<mainScreenProp>();

  const logout = async () => {
    const successOnSignout = await signOut();
    if (successOnSignout) {
      await removeData(ACCESS_TOKEN);
      return navigation.navigate('SignIn');
    }
  };

  return [logout];
};

export default useLogout;
