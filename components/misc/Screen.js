import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';

const Screen = ({ variant, children }) => {
  return variant ? (
    <SafeAreaView style={styles.container}>{children}</SafeAreaView>
  ) : (
    <SafeAreaView style={[styles.container, styles.appbar]}>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 16,
    paddingTop: StatusBar.currentHeight + 37,
    backgroundColor: '#fff',
  },
  appbar: {
    paddingBottom: 16,
  },
});

export default Screen;
