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

const SearchBar = ({ placeholder, onChange }) => {
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
    height: 60,
    borderRadius: 30,
    backgroundColor: colours.light_grey,
    alignItems: "center",
    paddingHorizontal: 20,
    flexDirection: "row",
  },
  text_input: {
    width: "100%",
    color: colours.grey,
    ...fonts.MedMedium,
  },
});

export default SearchBar;
