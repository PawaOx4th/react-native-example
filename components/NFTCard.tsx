// import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text, View} from 'react-native';
import {assets, COLORS, NFTData, SHADOWS, SIZES} from '../constant';
import {CircleButton} from './Button';

type Props = {
  data: typeof NFTData[number];
};

const NFTCard = ({data}: Props) => {
  // const navigation = useNavigation();

  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}>
      <View style={{width: '100%', height: 250}}>
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
      <Text>NFTCard</Text>
    </View>
  );
};

export default NFTCard;
