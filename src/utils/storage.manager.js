import AsyncStorage from '@react-native-async-storage/async-storage';

const LocalStoreData = async (key, data) => {
  try {
    await AsyncStorage.setItem(key, data);
  } catch (e) {}
};

const LocalStoreDataFetch = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
  } catch (e) {
    return '';
  }
};
export {LocalStoreData, LocalStoreDataFetch};
