import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';

// components
import BtnPrimary from './components/atoms/Buttons/BtnPrimary';
import BtnSecondary from './components/atoms/Buttons/BtnSecondary';
import BtnSmall from './components/atoms/Buttons/BtnSmall';
import BasicInput from './components/atoms/Inputs/BasicInput';
import SearchBar from './components/atoms/Inputs/SearchBar';
import RadioSelect from './components/atoms/Inputs/RadioSelect';
import FatTextInput from './components/atoms/Inputs/FatTextInput';
import InvestmentView from './components/molecules/InvestmentView';

// screens
import Signup from './screens/Signup';
import RegisterPassword from './screens/RegisterPassword';
import Login from './screens/Login';
import VerifyEmail from './screens/VerifyEmail';
import Home from './screens/Home';

import fonts from './themes/fonts';
import {
  useFonts,
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_700Bold,
} from '@expo-google-fonts/dm-sans';

export default function App() {
  let [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSans_500Medium,
    DMSans_700Bold,
  });

  if (fontsLoaded) {
    return (
      // <SafeAreaView style={styles.container}>
      //   {/* <Text>Open up App.js to start working on your app!</Text> */}
      //   <Text style={{ ...fonts.BigBold }}>Iniivo</Text>
      //   <Text style={{ ...fonts.MedMedium }}>
      //     Invest in homes for as little as $10.
      //   </Text>
      //   <SearchBar placeholder="Find listings (city, address, etc.)..." />
      //   <BasicInput placeholder="Enter email here..." />
      //   <BtnPrimary text="Click me" />
      //   <BtnSecondary text="Click me!" />
      //   <BtnSmall text="Nice" />
      //   <RadioSelect text="A radio option here 😩" isSelected={true} />
      //   <FatTextInput placeholder="0" />
      //</SafeAreaView>

      // Screens

      // <Signup />
      // <Login />
      // <RegisterPassword />
      // <VerifyEmail />
      <Home />
    );
  } else {
    return <Text>Loading...</Text>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    marginTop: StatusBar.currentHeight,
    paddingTop: 37,
    paddingLeft: 16,
    paddingRight: 16,
  },
});
