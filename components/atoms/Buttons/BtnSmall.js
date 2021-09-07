import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colours from "../../../themes/colours";
import fonts from "../../../themes/fonts";
import opacities from "../../../themes/opacities";

const BtnSmall = ({ text, onPress, style }) => {
  return (
    <TouchableOpacity
      activeOpacity={opacities.btnOpacity}
      onPress={onPress}
      style={[styles.btn, style]}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: 160,
    height: 36,
    borderRadius: 18,
    backgroundColor: colours.light_grey,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: colours.primary,
    ...fonts.MedBold,
  },
});

export default BtnSmall;
