import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';

import Screen from '../components/misc/Screen';

import colours from '../themes/colours';
import fonts from '../themes/fonts';

import BtnPrimary from '../components/atoms/Buttons/BtnPrimary';
import BtnSmall from '../components/atoms/Buttons/BtnSmall';

const data = {
  accountName: 'imabotwhomakesbeats',
  email: 'john.doe@example.com',
  password: '1234567890',
  phoneNumber: '(888)-888-8888',
};

const AccountPage = () => {
  return (
    <Screen variant={false}>
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.title}>Your Account</Text>
          <View style={styles.centeringContainer}>
            <View style={styles.pfp} />
            <Text style={styles.accountName}>{data.accountName}</Text>
            <View style={styles.divisionBar} />
          </View>

          <Text style={styles.emailTitle}>Email</Text>
          <Text style={styles.email}>{data.email}</Text>

          <Text style={styles.passwordTitle}>Password</Text>
          <Text style={styles.password}>
            {data.password.split('').map(() => '*')}
          </Text>

          <Text style={styles.phoneTitle}>Phone Number</Text>
          <Text style={styles.phoneNumber}>{data.phoneNumber}</Text>

          <View style={styles.buttonContainer}>
            <BtnPrimary
              text="View Your Wallet"
              onPress={() => console.log('Redirect to wallet page')}
              style={{ marginTop: 60 }}
            />
            <BtnPrimary
              text="View Your History"
              onPress={() => console.log('Redirect to history page')}
              style={{ marginTop: 44 }}
            />
            <BtnSmall
              text="Delete account"
              onPress={() => console.log('Delete account')}
              style={{ marginTop: 62, marginBottom: 62 }}
            />
          </View>
        </ScrollView>
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
    marginBottom: 32,
  },
  centeringContainer: {
    flex: 1,
    alignItems: 'center',
  },
  pfp: {
    color: colours.black,
    width: 112,
    height: 112,
    borderRadius: 112 / 2,
    backgroundColor: '#C4C4C4',
    marginBottom: 32,
  },
  accountName: {
    color: colours.black,
    ...fonts.BigRegular,
    marginBottom: 9,
  },
  divisionBar: {
    width: 343,
    height: 2,
    backgroundColor: '#C4C4C4',
    marginBottom: 35,
  },
  emailTitle: {
    color: colours.black,
    ...fonts.MedBold,
    marginBottom: 17,
  },
  email: {
    color: colours.black,
    ...fonts.MedRegular,
    marginBottom: 45,
  },
  passwordTitle: {
    color: colours.black,
    ...fonts.MedBold,
    marginBottom: 17,
  },
  password: {
    color: colours.black,
    ...fonts.MedRegular,
    marginBottom: 45,
  },
  phoneTitle: {
    color: colours.black,
    ...fonts.MedBold,
    marginBottom: 17,
  },
  phoneNumber: {
    color: colours.black,
    ...fonts.MedRegular,
    marginBottom: 45,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default AccountPage;
