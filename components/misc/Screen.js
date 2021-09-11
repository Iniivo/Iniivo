import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';

const Screen = ({ children }) => {
  <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 16,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#fff',
  },
});

export default Screen;
