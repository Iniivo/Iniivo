import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
} from "react-native";
import colours from "../../../themes/colours";
import fonts from "../../../themes/fonts";

const BtnPrimary = ({ text, onPress }) => {
  const [isPress, setIsPress] = useState(false);
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
