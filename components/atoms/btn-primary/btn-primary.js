import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const BtnPrimary = ({ text, onPress }) => {
  return (
    <Button onPress={onPress}>
      <Text>{text}</Text>
    </Button>
  );
};
