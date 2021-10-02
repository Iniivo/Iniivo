import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

import Screen from '../components/misc/Screen';

import colours from '../themes/colours';
import fonts from '../themes/fonts';

import BtnSecondary from '../components/atoms/Buttons/BtnSecondary';
import BasicInput from '../components/atoms/Inputs/BasicInput';
import NewsPost from '../components/misc/NewsPost';

const data = {

}

const NewsTracker = () => {
  
  return (
    <Screen variant={false}>
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.title}>News Tracker</Text>
          <Text style={styles.subtitle}>Powered By News API</Text>
          <Text style={{color: colours.grey, 
          ...fonts.MedBold, 
          marginBottom: 19}}>
              Headline
          </Text>


{/* Headline goes here */}
          <View style={{alignItems: 'center', marginBottom: 19.86}}>
              <View style={styles.headlinePic}></View>
              </View>

            <Text style={styles.headlineTitle}>Random headline title goes here</Text>
            <Text style={{color: colours.grey, ...fonts.MedRegular, marginBottom: 9}}>Name goes here</Text>
            <Text style={{color: colours.grey, ...fonts.SmallBold, marginBottom: 39}}>Time goes here</Text>
            <NewsPost/>
            <NewsPost/>
            <NewsPost/>
            <NewsPost/>
            <NewsPost/>
            <NewsPost/>
            <NewsPost/>
            <NewsPost/>
            <NewsPost/>
{/* Button Redirects to see all page */}
            <BtnSecondary style={{marginTop: 15}} 
            text='See All'
            onPress={() => console.log('Redirect to see all page')}
            />
          
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
    marginBottom: 15,
  },

  subtitle: {
      color: colours.grey,
      ...fonts.SmallRegular,
      marginBottom: 40
  },

  headlinePic: {
      width: 343,
      height: 247.14,
      borderRadius: 13,
      backgroundColor: '#C4C4C4'
  },

  headlineTitle: {
      color: colours.black,
      ...fonts.MedBold,
      marginBottom: 9,

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

export default NewsTracker;
