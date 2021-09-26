// Arrow redericting to previous page still needs to be added

import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Platform } from 'react-native';

import Screen from '../components/misc/Screen';

import colours from '../themes/colours';
import fonts from '../themes/fonts';

import BtnPrimary from '../components/atoms/Buttons/BtnPrimary';
import BasicInput from '../components/atoms/Inputs/BasicInput';
import BtnSmall from '../components/atoms/Buttons/BtnSmall';
import FatTextInput from '../components/atoms/Inputs/FatTextInput';
import RadioSelect from '../components/atoms/Inputs/RadioSelect';

const data = {
    account1: 'RBC-Savings',
    account2: 'CIBC-CHEQUING',
    account3: 'ANOTHER ACCT.',
    
};

const AddFunds = () => {
  const [Money, setMoney] = useState('');
  const [Pressed, setPressed] = useState(false);



  return (
    <Screen variant={false}>
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.title}>Withdraw Funds</Text>
          <Text style={styles.subtitle}>How much money would you like to withdraw?</Text>
          
          <View style={styles.input_group}> 
            <FatTextInput placeholder="0"
              value={Money}
              onChangeText={setMoney}> </FatTextInput> 
          </View>

            <Text style={styles.subtitle}>Which account would you like to withdraw to?</Text>

            <View style={{marginBottom: 45}}>
              <RadioSelect  text={data.account1} isSelected={Pressed} onPress={() => setPressed(true)}/>
              </View>

              <View style={{marginBottom: 45}}>
                  <RadioSelect  text={data.account2} isSelected={Pressed} onPress={() => setPressed(true)}/>
              </View>

              <View style={{marginBottom: 45}}>
                  <RadioSelect  text={data.account3} isSelected={Pressed} onPress={() => setPressed(true)}/>
              </View>

        </ScrollView>
        <BtnPrimary
          text="Confirm"
          style={{ marginTop: 16, marginBottom: 90 }}
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
    marginBottom: 37,
  },
  subtitle: {
    color: colours.black,
    ...fonts.MedMedium,
    marginBottom: 60,
  },
  input_title: {
    color: colours.black,
    ...fonts.MedMedium,
    marginBottom: 10,
  },
  input_group: {
    marginBottom: 56,
  },
});

export default AddFunds;