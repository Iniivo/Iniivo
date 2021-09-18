import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

import fonts from '../../themes/fonts';
import colours from '../../themes/colours';

const InvestmentView = ({ data, style }) => {
  return (
    <TouchableOpacity style={[styles.container, style]}>
      <Image style={styles.image} source={{ uri: data.image_url }} />
      <View style={styles.text_container}>
        <View>
          <Text style={styles.address} numberOfLines={1}>
            {data.address}
          </Text>
          <Text style={styles.location}>
            {data.city}, {data.state}
          </Text>
          <Text style={styles.misc}>{data.misc}</Text>
        </View>
        <View>
          <Text style={styles.change}>
            {data.change_percent}% (${data.change_absolute})
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 110,
    flexDirection: 'row',
  },
  image: {
    width: '30%',
    minHeight: 110,
    aspectRatio: 1,
    borderRadius: 10,
    marginRight: 20,
  },
  text_container: {
    width: '60%',
    height: '100%',
    justifyContent: 'center',
  },
  address: {
    color: colours.black,
    ...fonts.MedMedium,
    marginBottom: 7,
  },
  location: {
    color: colours.grey,
    ...fonts.MedBold,
    marginBottom: 3,
  },
  misc: {
    color: colours.primary,
    ...fonts.MedBold,
    marginBottom: 3,
  },
  change: {
    color: '#17AC1D',
    fontSize: 25,
    fontFamily: 'DMSans_700Bold',
  },
});

export default InvestmentView;
