import React from 'react';
import { LogBox } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import Toast from 'react-native-toast-message';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { store } from './src/store/index';
import { AppNavigation } from './src/navigation/AppNavigation';
import './firebase';

LogBox.ignoreAllLogs();

function MainApp() {
  const {top} = useSafeAreaInsets();

  return (
    <>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
      <StatusBar style="auto" />
      <Toast topOffset={top} />
    </>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <MainApp />
      </SafeAreaProvider>
    </Provider>
  );
}
