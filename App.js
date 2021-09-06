import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

import BtnPrimary from "./components/atoms/BtnPrimary";
import BtnSecondary from "./components/atoms/BtnSecondary";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <StatusBar style="auto" />
      <BtnPrimary text="Click me" style={{ marginBottom: 30 }} />
      <BtnSecondary text="Click me harder!" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 37 * 2,
  },
});
