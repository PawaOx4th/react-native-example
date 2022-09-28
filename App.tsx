// In App.js in a new project

import {
  DefaultTheme,
  NavigationContainer,
  Theme,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {NFTData} from './constant';
import DetailScreen from './screen/detail';
import HomeScreen from './screen/home';

export type RootStackParamList = {
  Home: undefined;
  Detail: {
    data: typeof NFTData[number];
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const themes: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

function App() {
  return (
    <NavigationContainer theme={themes}>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
