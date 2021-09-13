import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';

import Screen from '../components/misc/Screen';

import colours from '../themes/colours';
import fonts from '../themes/fonts';

import BtnPrimary from '../components/atoms/Buttons/BtnPrimary';
import BtnSmall from '../components/atoms/Buttons/BtnSmall';




const AccountPage = () => {


  return (
    <Screen variant={false}>
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.title}>Your Account</Text>
          <View style={styles.centeringContainer}>
{/* get Pfp from User.js */}
          <View style={styles.Pfp}/>


          

{/* get account name from User.js */}
          <Text style={styles.accountName}> Your Account Name </Text>
          <View style={styles.divisionBar}/>
          </View>

          <Text style={styles.emailTitle}> Email </Text>

{/* get email from User.js */}
          <Text style={styles.email}> emailgoeshere@gmail.com </Text>

          <Text style={styles.passwordTitle}> Password </Text>

{/* get password from User.js */}
          <Text style={styles.password}> *********** </Text>

          <Text style={styles.phoneTitle}> Phone Number </Text>

{/* get phonenumber from User.js */}
          <Text style={styles.phoneNumber}> 888-888-8888 </Text>

          <View style={styles.buttonContainer}>

{/* redirect to wallet page */}
          <BtnPrimary
          text="View Your Wallet"
          onPress={() => console.log('Redirect to wallet page')}
          style={{ marginTop: 60 }}
        />

{/* redirect to history page         */}
        <BtnPrimary
          text="View Your History"
          onPress={() => console.log('Redirect to history page')}
          style={{ marginTop: 44 }}
        />

{/* delete account */}
        <BtnSmall
        text= "Delete account"
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
    alignItems: 'center'

},

  Pfp: {
    color: colours.black,
    width: 112,
    height: 112,
    borderRadius: 112 / 2,
    backgroundColor: '#C4C4C4',
    marginBottom: 32
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
      marginBottom: 35
  },

  emailTitle: {
      color: colours.black,
      ...fonts.MedBold,
      marginBottom: 17
  },

  email: {
      color: colours.black,
      ...fonts.MedRegular,
      marginBottom: 45
  },

  passwordTitle: {
    color: colours.black,
    ...fonts.MedBold,
    marginBottom: 17
},

password: {
    color: colours.black,
    ...fonts.MedRegular,
    marginBottom: 45
},

phoneTitle: {
    color: colours.black,
    ...fonts.MedBold,
    marginBottom: 17
},

phoneNumber: {
    color: colours.black,
    ...fonts.MedRegular,
    marginBottom: 45
},


  buttonContainer: {
      flex: 1,
      alignItems: 'center'
  },

  
});


export default AccountPage;