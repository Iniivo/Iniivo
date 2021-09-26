import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import colours from '../../../themes/colours';
import fonts from '../../../themes/fonts';

const SearchBar = ({ value, onChange }) => {
  return (
  <View style={styles.container}>
    <TextInput style={styles.text_input} value={value} onChange={onChange} />
  </View>
  )
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    borderRadius: 30,
    backgroundColor: colours.light_grey,
    alignItems: 'center',
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  text_input: {
    width: '100%',
    color: colours.grey,
    ...fonts.MedMedium,
  },
});

export default SearchBar;
