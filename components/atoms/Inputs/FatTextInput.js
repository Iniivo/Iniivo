import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import colours from "../../../themes/colours";
import { Platform } from "react-native";

import {
  useFonts,
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_700Bold,
} from "@expo-google-fonts/dm-sans";

const FatTextInput = ({ placeholder, onChange }) => {
  let [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSans_500Medium,
    DMSans_700Bold,
  });

  if (!fontsLoaded) {
    return <Text>Loading</Text>;
  } else {
    return (
      <View style={styles.container}>
        <TextInput
          keyboardType={Platform.OS === "android" ? "numeric" : "number-pad"}
          style={styles.text_input}
          placeholder={placeholder}
          onChange={onChange}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 105,
    borderRadius: 30,
    backgroundColor: colours.light_grey,
    borderColor: colours.grey,
    borderWidth: 3,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    flexDirection: "row",
  },
  text_input: {
    color: colours.black,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    fontSize: 50,
    fontFamily: "DMSans_700Bold",
  },
});

export default FatTextInput;
