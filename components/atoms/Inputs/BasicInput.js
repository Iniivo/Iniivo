import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import colours from "../../../themes/colours";
import fonts from "../../../themes/fonts";

import {
  useFonts,
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_700Bold,
} from "@expo-google-fonts/dm-sans";

const BasicInput = ({ placeholder, onChange }) => {
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
    height: 50,
    borderRadius: 10,
    backgroundColor: colours.light_grey,
    borderColor: "#C8C8C8",
    borderWidth: 3,
    alignItems: "center",
    paddingHorizontal: 20,
    flexDirection: "row",
  },
  text_input: {
    width: "100%",
    color: colours.black,
    ...fonts.MedRegular,
  },
});

export default BasicInput;
