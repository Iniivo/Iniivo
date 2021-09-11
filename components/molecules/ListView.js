import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ListView = ({ data }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image style={styles.image} source={{ uri: data.image_url }} />
      <View style={styles.text_container}>
        <View>
          <Text>{data.address}</Text>
          <Text>
            {data.city}, {data.state}
          </Text>
          <Text>{data.misc}</Text>
        </View>
        <View>
          <Text>
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
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    flex: 3,
    maxHeight: 106,
    aspectRatio: 1,
    borderRadius: 10,
  },
  text_container: {
    flex: 6,
    height: '100%',
    justifyContent: 'center',
  },
});

export default ListView;
