import {View, Text} from 'react-native';
import React from 'react';

type Props = {
  background: string;
};

const FocusedStatusBar = ({background}: Props) => {
  return (
    <View style={{backgroundColor: background}}>
      <Text>FocusedStatusBar</Text>
    </View>
  );
};

export default FocusedStatusBar;
