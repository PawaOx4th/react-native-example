import {Text, View} from 'react-native';
import React from 'react';
import {RootStackParamList} from '../../App';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

function DetailScreen({
  route,
}: NativeStackScreenProps<RootStackParamList, 'Detail'>) {
  const {data} = route.params;
  console.log('🔴 data :', data);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Detail Screen</Text>
    </View>
  );
}

export default DetailScreen;
