import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

import Screen from '../components/misc/Screen';

import colours from '../themes/colours';
import fonts from '../themes/fonts';

import BtnPrimary from '../components/atoms/Buttons/BtnPrimary';
import BasicInput from '../components/atoms/Inputs/BasicInput';


const ResetEmail = () => {
  const [newEmail, setnewEmail] = useState('');
  const [reNewEmail, setreNewEmail] = useState('');


  return (
    <Screen variant={false}>
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.title}>Reset Email</Text>

          <View style={styles.input_group}>
            <Text style={styles.input_title}>Enter your new email </Text>
            <BasicInput
              placeholder="Email"
              value={newEmail}
              onChangeText={setnewEmail}
            />
          </View>
          <View style={styles.input_group}>
            <Text style={styles.input_title}>Reenter your new email</Text>
            <BasicInput
              placeholder="Your email, again"
              value={reNewEmail}
              onChangeText={setreNewEmail}
            />
          </View>
        </ScrollView>
        <BtnPrimary
          text="Reset Email"
          onPress={() => console.log('Reset Email')}
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
    marginBottom: 80,
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

export default ResetEmail;