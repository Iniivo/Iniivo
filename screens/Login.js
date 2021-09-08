import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, StatusBar } from 'react-native';

import colours from '../themes/colours';
import fonts from '../themes/fonts';

import BtnPrimary from '../components/atoms/Buttons/BtnPrimary';
import BasicInput from '../components/atoms/Inputs/BasicInput';
import BtnSmall from '../components/atoms/Buttons/BtnSmall';

const Login = () => {
  const [passwordInput, setPasswordInput] = useState('');
  const [emailInput, setEmailInput] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.input_container}>
        <View>
          <Text style={styles.title}>Login</Text>
          <Text style={styles.title2}> Welcome Back!</Text>
        </View>
        <View style={styles.input_group}>
          <View>
            <Text style={styles.input_title}>What’s your email?</Text>
            <BasicInput
              placeholder="Enter your email here ..."
              value={emailInput}
              onChangeText={setEmailInput}
            />
          </View>
          <View>
            <Text style={styles.input_title}>What’s your password?</Text>
            <BasicInput
              placeholder="Enter your email here ..."
              value={passwordInput}
              onChangeText={setPasswordInput}
            />
          </View>
          <View></View>
        </View>
      </View>
      <View style={styles.buttonbuttonContainer}>
        <View style={styles.buttonContainer}>
          <BtnSmall style={styles.btn} text="Reset Password" />
          <BtnSmall style={styles.btn} text="Make Account" />
        </View>
        <BtnPrimary style={styles.btn2} text="Next" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    marginTop: StatusBar.currentHeight,
    marginBottom: 300,
  },
  input_container: {
    minHeight: 450,
    justifyContent: 'space-between',
    paddingTop: 37,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  title: {
    color: colours.black,
    marginBottom: 10,
    ...fonts.BigBold,
  },
  title2: {
    color: colours.primary,
    marginBottom: 10,
    ...fonts.MedRegular,
  },
  input_group: {
    height: 300,
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  input_title: {
    marginBottom: 13,
    color: colours.black,
    ...fonts.MedMedium,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 50,
    marginBottom: 100,
  },
  buttonbuttonContainer: {
    bottom: 50,
    paddingLeft: 16,
    paddingRight: 16,
  },
});

export default Login;
