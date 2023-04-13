import 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

describe('AsynStorage', () => {
  it('checks if Async Storage is used', async () => {
    await AsyncStorage.setItem('USERNAME', 'admin');
    let username = await AsyncStorage.getItem('USERNAME');
    expect(username).toBe('admin');
  });
});
