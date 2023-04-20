import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, data) => {
  try {
    await AsyncStorage.setItem(key, data);
  } catch (error: any) {
    throw new Error(error);
  }
};

export const removeData = async key => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error: any) {
    throw new Error(error);
  }
};

export const retrieveData = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (error: any) {
    return null;
  }
};
