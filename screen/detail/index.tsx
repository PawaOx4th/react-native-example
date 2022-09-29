import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import React from 'react';
import {
  FlatList,
  Image,
  ImageSourcePropType,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import {RootStackParamList} from '../../App';
import {
  CircleButton,
  DetailDesc,
  DetailsBid,
  FocusedStatusBar,
  RectButton,
  SubInfo,
} from '../../components';
import {assets, COLORS, FONTS, SHADOWS, SIZES} from '../../constant';

const DetailHeader = ({
  data,
  navigationProp,
}: {
  data: ImageSourcePropType;
  navigationProp: NativeStackNavigationProp<RootStackParamList, 'Detail'>;
}) => {
  return (
    <View style={{width: '100%', height: 373}}>
      <Image
        source={data}
        resizeMode="cover"
        style={{width: '199%', height: '100%'}}
      />
      <CircleButton
        imgUrl={assets.left}
        handlePress={() => navigationProp.goBack()}
        style={{
          left: 15,
          top: StatusBar?.currentHeight ?? 0 + 10,
        }}
      />
      <CircleButton
        imgUrl={assets.heart}
        handlePress={() => navigationProp.goBack()}
        style={{
          right: 15,
          top: StatusBar?.currentHeight ?? 0 + 10,
        }}
      />
    </View>
  );
};

function DetailScreen({
  route,
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'Detail'>) {
  const {data} = route.params;
  return (
    <SafeAreaView style={{flex: 1}}>
      <FocusedStatusBar
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
        translucent={true}
      />
      <View
        style={{
          width: '100%',
          position: 'absolute',
          bottom: 0,
          paddingVertical: SIZES.font,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(255,255,255,0.5)',
          zIndex: 1,
        }}>
        <RectButton
          minWidth={170}
          fontSize={SIZES.large}
          {...SHADOWS.dark}
          handlePress={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
      </View>
      <FlatList
        data={data.bids}
        renderItem={({item}) => <DetailsBid bid={item} />}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: SIZES.extraLarge * 3}}
        ListHeaderComponent={() => (
          <React.Fragment>
            <DetailHeader data={data.image} navigationProp={navigation} />
            <SubInfo />
            <View style={{padding: SIZES.font}}>
              <DetailDesc data={data} />

              {data.bids.length > 0 && (
                <Text
                  style={{
                    fontSize: SIZES.font,
                    fontFamily: FONTS.semiBold,
                    color: COLORS.primary,
                  }}>
                  ContentBids
                </Text>
              )}
            </View>
          </React.Fragment>
        )}
      />
    </SafeAreaView>
  );
}

export default DetailScreen;
