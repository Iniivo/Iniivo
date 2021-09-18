import React from 'react';
import { View } from 'react-native';
import InvestmentView from '../molecules/InvestmentView';

const InvestmentViewList = ({ investments }) => {
  return (
    <View>
      {investments.map((item, idx) => (
        <InvestmentView key={idx} style={{ marginVertical: 10 }} data={item} />
      ))}
    </View>
  );
};

export default InvestmentViewList;
