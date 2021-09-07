import React, { useState } from "react";
import { StyleSheet, View, Text, SafeAreaView, StatusBar } from "react-native";

import colours from "../themes/colours";
import fonts from "../themes/fonts";

import BtnPrimary from "../components/atoms/Buttons/BtnPrimary";
import BasicInput from "../components/atoms/Inputs/BasicInput";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.input_container}>
        <Text style={styles.title}>Signup</Text>
        <View style={styles.input_group}>
          <View>
            <Text style={styles.input_title}>What’s your first name?</Text>
            <BasicInput placeholder="Enter your first name here ..." />
          </View>
          <View>
            <Text style={styles.input_title}>What’s your last name?</Text>
            <BasicInput placeholder="Enter your last name here ..." />
          </View>
          <View>
            <Text style={styles.input_title}>Finally, your email address?</Text>
            <BasicInput placeholder="Enter your email here ..." />
          </View>
        </View>
      </View>
      <BtnPrimary text="Next" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    marginTop: StatusBar.currentHeight,
    paddingTop: 37,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  input_container: {
    minHeight: 370,
    justifyContent: "space-between",
  },
  title: {
    color: colours.black,
    ...fonts.BigBold,
  },
  input_group: {
    minHeight: 300,
    justifyContent: "space-between",
  },
  input_title: {
    marginBottom: 13,
    color: colours.black,
    ...fonts.MedMedium,
  },
});

export default Signup;
