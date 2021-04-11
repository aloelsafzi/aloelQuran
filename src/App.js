import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from "./router";
import { StatusBar } from 'react-native';
import { Colors } from './utils';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor={Colors.primary} />
      <Router />
    </NavigationContainer>
  );
};

export default App;
