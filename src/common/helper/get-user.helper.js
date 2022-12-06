import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getUserHelper() {
  const user = await AsyncStorage.getItem('USER_AUTH');
  const userData = JSON.parse(user);
  return userData;
}
