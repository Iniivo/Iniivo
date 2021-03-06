import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import colours from '../../../themes/colours';
import opacities from '../../../themes/opacities';
import fonts from '../../../themes/fonts';

const RadioSelect = ({ text, style, isSelected }) => {
  <TouchableOpacity
    activeOpacity={opacities.radioOpacity}
    style={[styles.container, style]}
  >
    <Text style={styles.select_text}>{text}</Text>
    <View style={styles.circle_outer}>
      {isSelected && <View style={styles.circle_inner} />}
    </View>
  </TouchableOpacity>;
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 34,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    borderBottomColor: colours.grey,
  },
  select_text: {
    color: colours.grey,
    ...fonts.MedMedium,
  },
  circle_outer: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: colours.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle_inner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: colours.primary,
  },
});

export default RadioSelect;
