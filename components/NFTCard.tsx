// import {useNavigation} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Image, View} from 'react-native';
import {RootStackParamList} from '../App';
import {assets, COLORS, NFTData, SHADOWS, SIZES} from '../constant';
import {CircleButton, RectButton} from './Button';
import SubInfo, {EthPrice, NFTTitle} from './SubInfo';

type Props = {
  data: typeof NFTData[number];
};

type NavigateProps = NativeStackNavigationProp<RootStackParamList, 'Detail'>;

const NFTCard = ({data}: Props) => {
  const navigation = useNavigation<NavigateProps>();

  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}>
      <View
        style={{
          width: '100%',
          height: 250,
        }}>
        <Image
          source={data.image}
          resizeMode={'cover'}
          style={{
            width: '100%',
            height: '100%',
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />
        <CircleButton imgUrl={assets.heart} handlePress={() => {}} />
      </View>
      <SubInfo />
      <View style={{width: '100%', padding: SIZES.font}}>
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.large}
          subTitleSize={SIZES.small}
        />
        <View
          style={{
            marginTop: SIZES.font,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <EthPrice price={data.price} />
          <RectButton
            minWidth={120}
            fontSize={SIZES.font}
            handlePress={() => navigation.navigate('Detail', {data: data})}
          />
        </View>
      </View>
    </View>
  );
};

export default NFTCard;
