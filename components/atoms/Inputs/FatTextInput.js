import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import colours from "../../../themes/colours";
import { Platform } from "react-native";

const FatTextInput = (props) => {
  return (
    <View style={styles.container}>
      <TextInput
        keyboardType={Platform.OS === "android" ? "numeric" : "number-pad"}
        style={styles.text_input}
        {...props}
      />
    </View>
  );
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
