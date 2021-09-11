import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import Screen from '../components/misc/Screen';

import colours from '../themes/colours';
import fonts from '../themes/fonts';

import BtnPrimary from '../components/atoms/Buttons/BtnPrimary';
import BasicInput from '../components/atoms/Inputs/BasicInput';

const RegisterPassword = () => {
  const [password, setPassword] = useState('');
  const [redoPwd, setRedoPwd] = useState('');
  const [select, setSelect] = useState('');

  return (
    <Screen variant={false}>
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.title}>Sign Up</Text>
          <View style={styles.input_group}>
            <Text style={styles.input_title}>
              Create a password (at least 6 characters)
            </Text>
            <BasicInput
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
            />
          </View>
          <View style={styles.input_group}>
            <Text style={styles.input_title}>
              Reenter your amazing password
            </Text>
            <BasicInput
              placeholder="Your password, again"
              value={redoPwd}
              onChangeText={setRedoPwd}
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
  select_container: {
    flexDirection: 'row',
  },
  select_box: {
    width: 30,
    height: 30,
    borderRadius: 10,
    borderColor: colours.primary,
    borderWidth: 3,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  select_inner: {
    width: 20,
    height: 20,
    backgroundColor: colours.primary,
    borderRadius: 6,
  },
});

export default RegisterPassword;
