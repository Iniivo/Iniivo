import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

import Screen from '../components/misc/Screen';

import colours from '../themes/colours';
import fonts from '../themes/fonts';

import BtnPrimary from '../components/atoms/Buttons/BtnPrimary';
import BasicInput from '../components/atoms/Inputs/BasicInput';
import BtnSmall from '../components/atoms/Buttons/BtnSmall';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Screen variant={false}>
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.title}>Sign Up</Text>
          <Text style={styles.subtitle}>Welcome back!</Text>
          <View style={styles.input_group}>
            <Text style={styles.input_title}>What's your email?</Text>
            <BasicInput
              placeholder="Enter your email..."
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View style={styles.input_group}>
            <Text style={styles.input_title}>What's your password?</Text>
            <BasicInput
              placeholder="Enter your password..."
              value={password}
              onChangeText={setPassword}
            />
          </View>
          <View style={styles.btn_container}>
            <BtnSmall text="Make account" />
            <BtnSmall text="Reset password" />
          </View>
        </ScrollView>
        <BtnPrimary
          text="Login"
          onPress={() => console.log('hello')}
          style={{ marginTop: 16 }}
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    height: '100%',
  },
  title: {
    color: colours.black,
    ...fonts.BigBold,
    marginBottom: 10,
  },
  subtitle: {
    color: colours.primary,
    ...fonts.MedMedium,
    marginBottom: 60,
  },
  input_title: {
    color: colours.black,
    ...fonts.MedMedium,
    marginBottom: 10,
  },
  input_group: {
    marginBottom: 50,
  },
  btn_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Login;
