import {View, Text} from 'react-native';
import React from 'react';
import {NFTData} from '../constant';

type Props = {
  bid: typeof NFTData[number]['bids'][number];
};
const DetailsBid = ({bid}: Props) => {
  return (
    <View>
      <Text>{JSON.stringify(bid)}</Text>
    </View>
  );
};

export default DetailsBid;
