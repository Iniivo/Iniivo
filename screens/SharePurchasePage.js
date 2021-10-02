// Arrow redericting to previous page still needs to be added

import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Platform } from 'react-native';

import Screen from '../components/misc/Screen';

import colours from '../themes/colours';
import fonts from '../themes/fonts';

import BtnPrimary from '../components/atoms/Buttons/BtnPrimary';
import FatTextInput from '../components/atoms/Inputs/FatTextInput';


const data = {
    singleSharePrice: '888',
    total: '888',
    totalFunds: '8888',
    house: '116 Palfrey Way'
    
};

const SharePurchasePage = () => {
  const [Money, setMoney] = useState('');




  return (
    <Screen variant={false}>
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.title}>How many shares of <Text style={{...fonts.BigBold}}>{data.house}</Text> would you like to purchase?</Text>
        
          <View style={styles.input_group}> 
            <FatTextInput placeholder="0"
              value={Money}
              onChangeText={setMoney}> </FatTextInput> 
          </View>

        <View style={{alignItems: 'center', marginBottom:13}}>
          <View style={{width:343, height: 2, backgroundColor: colours.grey}}/>
          </View>

        <View style={styles.price_group}>
          <Text style={{color: colours.grey, ...fonts.MedMedium}}>Single Share Price</Text>
          <View style={{justifyContent: 'flex-end'}}>
          <Text style={{color:colours.black, ...fonts.MedBold}}>${data.singleSharePrice}</Text>
          </View>
          </View>

        <View style={styles.price_group}>
          <Text style={{color: colours.grey, ...fonts.MedMedium}}>Total</Text>
          <View style={{justifyContent: 'flex-end'}}>
          <Text style={{color:colours.black, ...fonts.MedBold}}>${data.total}</Text>
          </View>
          </View>

        <View style={styles.price_group}>
          <Text style={{color: colours.grey, ...fonts.MedMedium}}>Total Funds</Text>
          <View style={{justifyContent: 'flex-end'}}>
          <Text style={{color:colours.black, ...fonts.MedBold}}>${data.totalFunds}</Text>
          </View>
          </View>

{/* Redirect to confirm purchase page */}
          <BtnPrimary
          text="Continue"
          style={{ marginTop: 40, marginBottom: 17 }}
          onPress={() => console.log('Continue')}
        />

        <Text style={{...fonts.TinyRegular, marginBottom: 65}}>
            <Text style={{color: '#FF0000'}}>
                *
                </Text>
        By clicking continue I acknowledge that the quantity of shares I selected is correct
        
        </Text>
     

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
    ...fonts.BigRegular,
    marginTop: 42,
    textAlign: 'center',
    marginBottom: 61,
  },

  input_title: {
    color: colours.black,
    ...fonts.MedMedium,
    marginBottom: 10,
  },
  input_group: {
    marginBottom: 37,
  },

  price_group: {
      flexDirection:'row', 
      justifyContent:'space-between', 
      marginBottom: 20.75}
});

export default SharePurchasePage;