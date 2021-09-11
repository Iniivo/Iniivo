import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, StatusBar } from 'react-native';

import colours from '../themes/colours';
import fonts from '../themes/fonts';

import BtnPrimary from '../components/atoms/Buttons/BtnPrimary';
import BasicInput from '../components/atoms/Inputs/BasicInput';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.input_container}>
        <View>
          <Text style={styles.title}>Signup</Text>
          <Text style={{ ...fonts.MedRegular, color: colours.grey }}>
            Make your Iniivo account today!
          </Text>
        </View>
        <View style={styles.input_group}>
          <View>
            <Text style={styles.input_title}>What’s your first name?</Text>
            <BasicInput
              placeholder="Enter your first name here ..."
              value={firstName}
              onChangeText={setFirstName}
            />
          </View>
          <View>
            <Text style={styles.input_title}>What’s your last name?</Text>
            <BasicInput
              placeholder="Enter your last name here ..."
              value={lastName}
              onChangeText={setLastName}
            />
          </View>
          <View>
            <Text style={styles.input_title}>Finally, your email address?</Text>
            <BasicInput
              placeholder="Enter your email here ..."
              value={email}
              onChangeText={setEmail}
            />
          </View>
        </View>
      </View>
      <View
        style={{ paddingTop: 37, paddingHorizontal: 16, paddingBottom: 16 }}
      >
        <Text style={styles.account_prompt}>Already have an account?</Text>
        <BtnPrimary text="Next" />
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
  },
  input_container: {
    maxHeight: 460,
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
  input_group: {
    height: 300,
    justifyContent: 'space-between',
  },
  input_title: {
    marginBottom: 13,
    color: colours.black,
    ...fonts.MedMedium,
  },
  account_prompt: {
    color: colours.primary,
    marginBottom: 10,
    ...fonts.MedMedium,
  },
});

export default Signup;
