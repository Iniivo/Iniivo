import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

import BtnPrimary from "./components/atoms/Buttons/BtnPrimary";
import BtnSecondary from "./components/atoms/Buttons/BtnSecondary";
import BtnSmall from "./components/atoms/Buttons/BtnSmall";
import BasicInput from "./components/atoms/Inputs/BasicInput";
import SearchBar from "./components/atoms/Inputs/SearchBar";
import RadioSelect from "./components/atoms/Inputs/RadioSelect";
import FatTextInput from "./components/atoms/Inputs/FatTextInput";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <SearchBar placeholder="Find listings (city, address, etc.)..." />
      <BasicInput placeholder="Enter email here..." />
      <BtnPrimary text="Click me" />
      <BtnSecondary text="Click me!" />
      <BtnSmall text="Nice" />
      <RadioSelect text="A radio option here 😩" isSelected={true} />
      <FatTextInput placeholder="0" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 37,
    paddingLeft: 16,
    paddingRight: 16,
  },
});
