import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import MealsNavigator from './navigation/MealsNavigator';

const App = () => {
  return <MealsNavigator />;
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

export default App;
