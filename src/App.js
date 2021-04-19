import React from 'react';
// import {
//   StyleSheet,
// } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { AppNavigation } from './app/mobile.nav';

import i18n from "./app/i18n";
const initI18n = i18n;

// declare const global: { HermesInternal: null | {} };

const App = () => {
  return (
    <NavigationContainer >
      <AppNavigation />
    </NavigationContainer>
  );
};

// const styles = StyleSheet.create({});

export default App;