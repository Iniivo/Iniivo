import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

import Screen from '../components/misc/Screen';

import colours from '../themes/colours';
import fonts from '../themes/fonts';

import BtnPrimary from '../components/atoms/Buttons/BtnPrimary';
import BasicInput from '../components/atoms/Inputs/BasicInput';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <Screen variant={false}>
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.title}>Sign Up</Text>
          <View style={styles.input_group}>
            <Text style={styles.input_title}>What's your first name?</Text>
            <BasicInput
              placeholder="Enter your first name..."
              value={firstName}
              onChangeText={setFirstName}
            />
          </View>
          <View style={styles.input_group}>
            <Text style={styles.input_title}>What's your last name?</Text>
            <BasicInput
              placeholder="Enter your last name..."
              value={lastName}
              onChangeText={setLastName}
            />
          </View>
          <View style={styles.input_group}>
            <Text style={styles.input_title}>Finally, your email address?</Text>
            <BasicInput
              placeholder="Enter your email address..."
              value={email}
              onChangeText={setEmail}
            />
          </View>
        </ScrollView>
        <BtnPrimary
          text="Next"
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
    marginBottom: 40,
  },
  input_title: {
    color: colours.black,
    ...fonts.MedMedium,
    marginBottom: 10,
  },
  input_group: {
    marginBottom: 50,
  },
});

export default Signup;
