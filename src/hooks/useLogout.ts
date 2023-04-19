import AsyncStorage from '@react-native-async-storage/async-storage';
import useAuth from './useAuth';
import {useNavigation} from '@react-navigation/native';
import {mainScreenProp} from '../routes/MainStack';

const useLogout = () => {
  const {signOut} = useAuth();
  const navigation = useNavigation<mainScreenProp>();

  const logout = async () => {
    const successOnSignout = await signOut();
    if (successOnSignout) {
      await AsyncStorage.removeItem('ACCESS_TOKEN');
      return navigation.navigate('SignIn');
    }
  };

  return [logout];
};

export default useLogout;
