import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import colours from "../../../themes/colours";
import fonts from "../../../themes/fonts";

const BtnPrimary = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.primary_button}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  primary_button: {
    width: "100%",
    height: 50,
    borderRadius: 25,
    backgroundColor: colours.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: colours.white,
    ...fonts.MedBold,
  },
});

export default BtnPrimary;
