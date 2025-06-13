import axios from 'axios';
import { Alert } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import { API_KEY } from '@env';

export const api = axios.create({
  baseURL: 'https://newsapi.org/v2/',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(async (config) => {
  const isConnected = await NetInfo.fetch().then(state => state.isConnected);

  if (!isConnected) {
    throw new Error('No internet connection.');
  }

  const apiKey = API_KEY;
  if (apiKey) {
    config.headers['X-Api-Key'] = apiKey;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.message === 'No internet connection.') {
      Alert.alert('No Internet', 'You are offline. Please check your connection.');
    } else if (error.response) {
      switch (error.response.status) {
        case 400:
          Alert.alert('Bad Request', 'The request was unacceptable, often due to a missing or misconfigured parameter.');
          break;
        case 401:
          Alert.alert('Unauthorized', 'Your API key was missing from the request, or wasn\'t correct.');
          break;
        case 429:
          Alert.alert('Too Many Requests', 'You made too many requests within a window of time and have been rate limited. Please wait a moment and try again.');
          break;
        case 500:
          Alert.alert('Server Error', 'Something went wrong on the server side. Please try again later.');
          break;
        default:
          Alert.alert('Error', 'Something went wrong, please try again later.');
      }
    } else {
      Alert.alert('Network Error', 'Please check your internet connection and try again.');
    }
    return Promise.reject(error);
  }
);
