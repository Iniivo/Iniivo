import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

import Screen from '../components/misc/Screen';

import colours from '../themes/colours';
import fonts from '../themes/fonts';

import BtnPrimary from '../components/atoms/Buttons/BtnPrimary';
import BasicInput from '../components/atoms/Inputs/BasicInput';


const ResetPassword = () => {
  const [newPassword, setnewPassword] = useState('');
  const [reNewPassword, setreNewPassword] = useState('');


  return (
    <Screen variant={false}>
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.title}>Reset Password</Text>

          <View style={styles.input_group}>
            <Text style={styles.input_title}>Create a new password (at least 6 characters) </Text>
            <BasicInput
              placeholder="Password..."
              value={newPassword}
              onChangeText={setnewPassword}
            />
          </View>
          <View style={styles.input_group}>
            <Text style={styles.input_title}>Reenter your new password</Text>
            <BasicInput
              placeholder="Your password. again"
              value={reNewPassword}
              onChangeText={setreNewPassword}
            />
          </View>
        </ScrollView>
        <BtnPrimary
          text="Reset Password"
          onPress={() => console.log('Reset password')}
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

export default ResetPassword;