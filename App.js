import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import Toast from 'react-native-toast-message';

import StackNavigation from './src/navigation/stack';

import { toastConfig } from 'common/alert.toast';

import store from './src/store/store';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar style="light" />
        <StackNavigation />
      </NavigationContainer>
      <Toast config={toastConfig} />
    </Provider>
  );
}
