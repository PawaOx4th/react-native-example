import React from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';
import {FocusedStatusBar, HomeHeader, NFTCard} from '../../components';
import {COLORS, NFTData} from '../../constant';

function HomeScreen() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <View style={{flex: 1}}>
        <View style={{zIndex: 0}}>
          <FlatList
            data={NFTData}
            renderItem={({item}) => <NFTCard data={item} />}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader />}
          />
        </View>

        <View
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            top: 0,
            right: 0,
            zIndex: -1,
          }}>
          <View style={{height: 300, backgroundColor: COLORS.primary}}></View>
          <View style={{flex: 1, backgroundColor: COLORS.white}}></View>
        </View>
      </View>
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     fontFamily: 'Inter-Light',
//     fontSize: 20,
//   },
// });

export default HomeScreen;
