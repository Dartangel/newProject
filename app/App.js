import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import SwitchNavigator from './modules/navigation/switchNavigator';
import store from './modules/redux/store';
import { colors } from './services/constants';

export default function App() {

  return (
    <Provider store={store}>
      <StatusBar backgroundColor={colors.mainBackground} />
      <SwitchNavigator />
    </Provider>
  );
};