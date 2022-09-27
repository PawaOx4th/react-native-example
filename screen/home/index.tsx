import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {FocusedStatusBar} from '../../components';
import {COLORS} from '../../constant';

function HomeScreen() {
  return (
    <SafeAreaView>
      <FocusedStatusBar background={COLORS.primary} />
      <View>
        <Text style={styles.container}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic eos
          expedita dignissimos?
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    fontFamily: 'Inter-Light',
    fontSize: 20,
  },
});

export default HomeScreen;
