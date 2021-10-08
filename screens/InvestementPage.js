import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

import Screen from '../components/misc/Screen';

import colours from '../themes/colours';
import fonts from '../themes/fonts';

import BtnPrimary from '../components/atoms/Buttons/BtnPrimary';
import BasicInput from '../components/atoms/Inputs/BasicInput';
import Investment from '../components/misc/Investment';


const data = {
    numOfPositions: '5'

}
const InvestmentPage = () => {



  return (
    <Screen variant={false}>
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.title}>Investments</Text>
          <Text style={styles.subtitle}>{data.numOfPositions} positions </Text>
{/* Add number of investments based on {numOfPositions}          */}
          <Investment/>
          <Investment/>
          <Investment/>
          <Investment/>
          <Investment/>


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
    marginBottom: 8,
  },

  subtitle: {
      color: colours.grey,
      ...fonts.MedMedium,
      marginBottom: 32

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

export default InvestmentPage;