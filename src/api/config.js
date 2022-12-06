import Constants from 'expo-constants';
import axios from 'axios';

export const getApi = axios.create({
  baseURL: Constants.expoConfig.extra.API_URL,
});
