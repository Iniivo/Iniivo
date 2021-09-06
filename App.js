import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

import BtnPrimary from "./components/atoms/Buttons/BtnPrimary";
import BtnSecondary from "./components/atoms/Buttons/BtnSecondary";
import BtnSmall from "./components/atoms/Buttons/BtnSmall";
import BasicInput from "./components/atoms/Inputs/BasicInput";
import SearchBar from "./components/atoms/Inputs/SearchBar";
import RadioSelect from "./components/atoms/Inputs/RadioSelect";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <StatusBar style="auto" />
      <SearchBar placeholder="Find listings (city, address, etc.)..." />
      <BasicInput placeholder="Enter email here..." />
      <BtnPrimary text="Click me" />
      <BtnSecondary text="Click me harder!" />
      <BtnSmall text="Nice" />
      <RadioSelect text="A radio option here 😩" isSelected={true} />
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
