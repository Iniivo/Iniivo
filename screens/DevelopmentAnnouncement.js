import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

import Screen from '../components/misc/Screen';

import colours from '../themes/colours';
import fonts from '../themes/fonts';

import BtnPrimary from '../components/atoms/Buttons/BtnPrimary';
import BasicInput from '../components/atoms/Inputs/BasicInput';
import Investment from '../components/misc/Investment';
import HouseDevelopment from '../components/misc/HouseDevelopment';


const data = {
    numOfAnnouncements: '5',
    house: '330 Bobolink Ridge'

}
const DevelopmentAnnouncement = () => {



  return (
    <Screen variant={false}>
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.title}>{data.house}</Text>
          <Text style={styles.subtitle}>{data.numOfAnnouncements} development announcements </Text>
{/* Add number of investments based on {numOfAnnouncment}          */}
          <HouseDevelopment/>
          <HouseDevelopment/>
          <HouseDevelopment/>
          <HouseDevelopment/>
          <HouseDevelopment/>


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
    color: colours.primary,
    ...fonts.BigBold,
    marginBottom: 10,
  },

  subtitle: {
      color: colours.grey,
      ...fonts.MedMedium,
      marginBottom: 32

  },


});

export default DevelopmentAnnouncement;