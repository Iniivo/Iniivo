import React, { useState } from "react";
import { StyleSheet, Text, TouchableHighlight } from "react-native";
import colours from "../../../themes/colours";
import fonts from "../../../themes/fonts";
import {
  useFonts,
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_700Bold,
} from "@expo-google-fonts/dm-sans";

const BtnPrimary = ({ text, onPress }) => {
  const [isPress, setIsPress] = useState(false);

  let [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSans_500Medium,
    DMSans_700Bold,
  });

  if (!fontsLoaded) {
    return <Text>Loading</Text>;
  } else {
    return (
      <TouchableHighlight
        onHideUnderlay={() => setIsPress(false)}
        onShowUnderlay={() => setIsPress(true)}
        onPress={onPress}
        style={isPress ? styles.btnPress : styles.btnNorm}
      >
        <Text style={isPress ? styles.textPress : styles.textNorm}>{text}</Text>
      </TouchableHighlight>
    );
  }
};

const styles = StyleSheet.create({
  btnNorm: {
    width: "100%",
    height: 50,
    borderRadius: 25,
    backgroundColor: colours.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  btnPress: {
    width: "100%",
    height: 50,
    borderRadius: 25,
    backgroundColor: colours.light_grey,
    justifyContent: "center",
    alignItems: "center",
  },
  textNorm: {
    color: colours.white,
    ...fonts.MedBold,
  },
  textPress: {
    color: colours.primary,
    ...fonts.MedBold,
  },
});

export default BtnPrimary;
