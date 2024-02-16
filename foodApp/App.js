/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () => {
  return (
    <View style={styles.rootContainer}>
      <Text>Hello World</Text>
    </View>
  );
}



const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default App;
