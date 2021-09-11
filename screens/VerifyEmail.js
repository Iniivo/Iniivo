import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

import fonts from '../themes/fonts';
import colours from '../themes/colours';

import Screen from '../components/misc/Screen';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const VerifyEmail = () => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount: 6 });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <Screen variant={false}>
      <Text style={styles.title}>One last step...</Text>
      <View style={styles.input_container}>
        <Text style={styles.explanation}>
          We sent you an email with a special code to verify that it’s your
          email. Type the 6-digit code here.
        </Text>
        <View style={styles.input_group}>
          <CodeField
            ref={ref}
            {...props}
            caretHidden={false}
            value={value}
            onChangeText={setValue}
            cellCount={6}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({ idx, symbol, isFocused }) => (
              <Text
                key={idx}
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}
              >
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}
          />
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  input_group: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: colours.black,
    ...fonts.BigBold,
  },
  input_container: {
    height: '60%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  codeFieldRoot: { marginTop: 20, width: '100%' },
  cell: {
    width: 60,
    height: 60,
    lineHeight: 38,
    ...fonts.BigBold,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: colours.grey,
    textAlign: 'center',
    textAlignVertical: 'center',
    justifyContent: 'center',
  },
  focusCell: {
    borderColor: '#000',
  },
  explanation: {
    color: colours.black,
    ...fonts.MedMedium,
    marginBottom: 30,
  },
});

export default VerifyEmail;
