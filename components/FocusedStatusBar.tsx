import {useIsFocused} from '@react-navigation/native';
import React, {ComponentProps} from 'react';
import {StatusBar} from 'react-native';

type Props = ComponentProps<typeof StatusBar>;

const FocusedStatusBar = (props: Props) => {
  const isFocused = useIsFocused();
  return isFocused ? <StatusBar animated={true} {...props} /> : null;
};

export default FocusedStatusBar;
