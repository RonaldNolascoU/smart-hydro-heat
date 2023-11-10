import AsyncStorage from '@react-native-community/async-storage';

const set = async (key, value) => {
  try {
    if (value) {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    }
  } catch (e) {
    // Handle errors here
    console.error("Error saving to AsyncStorage", e);
  }
};

const get = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value) return JSON.parse(value);
    return undefined;
  } catch (e) {
    // Handle errors here
    console.error("Error reading from AsyncStorage", e);
    return undefined;
  }
};

const remove = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    // Handle errors here
    console.error("Error removing item from AsyncStorage", e);
  }
};

const clear = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    // Handle errors here
    console.error("Error clearing AsyncStorage", e);
  }
};

export default {
  set,
  get,
  remove,
  clear,
};
