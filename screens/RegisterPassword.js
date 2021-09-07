import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from "react-native";

import colours from "../themes/colours";
import fonts from "../themes/fonts";

import BtnPrimary from "../components/atoms/Buttons/BtnPrimary";
import BasicInput from "../components/atoms/Inputs/BasicInput";

const RegisterPassword = () => {
  const [pwd, setPwd] = useState("");
  const [pwdConfirm, setPwdConfirm] = useState("");
  const [select, setSelect] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.input_container}>
        <View>
          <Text style={styles.title}>Almost there...</Text>
          <Text style={{ ...fonts.MedRegular, color: colours.grey }}>
            The most important part!
          </Text>
        </View>
        <View style={styles.input_group}>
          <View>
            <Text style={styles.input_title}>
              Create a password (at least 6 characters)
            </Text>
            <BasicInput
              placeholder="Password"
              value={pwd}
              onChangeText={setPwd}
            />
          </View>
          <View>
            <Text style={styles.input_title}>
              Reenter your amazing password
            </Text>
            <BasicInput
              placeholder="Your password, again"
              value={pwdConfirm}
              onChangeText={setPwdConfirm}
            />
          </View>
          <TouchableOpacity
            activeOpacity={1}
            style={styles.select_container}
            onPress={() => setSelect(!select)}
          >
            <View style={styles.select_box}>
              {select && <View style={styles.select_inner}></View>}
            </View>
            <Text style={{ ...fonts.MedRegular }}>
              I have read and agreed to Iniivo’s Terms and Conditions
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{ paddingTop: 37, paddingHorizontal: 16, paddingBottom: 16 }}
      >
        <BtnPrimary text="Next" />
      </View>
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
  },
  input_container: {
    minHeight: 450,
    justifyContent: "space-between",
    paddingTop: 37,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  title: {
    color: colours.black,
    marginBottom: 10,
    ...fonts.BigBold,
  },
  input_group: {
    height: 300,
    justifyContent: "space-between",
  },
  input_title: {
    marginBottom: 13,
    color: colours.black,
    ...fonts.MedMedium,
  },
  select_container: {
    flexDirection: "row",
  },
  select_box: {
    width: 30,
    height: 30,
    borderRadius: 10,
    borderColor: colours.primary,
    borderWidth: 3,
    marginRight: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  select_inner: {
    width: 20,
    height: 20,
    backgroundColor: colours.primary,
    borderRadius: 6,
  },
});

export default RegisterPassword;
