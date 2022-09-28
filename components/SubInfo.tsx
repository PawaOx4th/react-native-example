import {View, Text, Image, ImageSourcePropType} from 'react-native';
import React from 'react';
import {assets, COLORS, FONTS, SHADOWS, SIZES} from '../constant';

export const NFTTitle = ({
  title,
  subTitle,
  subTitleSize,
  titleSize,
}: {
  title: string;
  subTitle: string;
  titleSize: number;
  subTitleSize: number;
}) => {
  return (
    <View>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: titleSize,
          color: COLORS.primary,
        }}>
        {title}
      </Text>
      <Text
        style={{
          fontFamily: FONTS.regular,
          fontSize: subTitleSize,
          color: COLORS.primary,
        }}>
        {subTitle}
      </Text>
    </View>
  );
};

export const EthPrice = ({price}: {price: number}) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Image
        source={assets.eth}
        resizeMode={'contain'}
        style={{
          width: 20,
          height: 20,
          marginRight: 2,
        }}
      />
      <Text
        style={{
          fontFamily: FONTS.medium,
          fontSize: SIZES.font,
          color: COLORS.primary,
        }}>
        {price}
      </Text>
    </View>
  );
};

export const ImageCmp = ({
  imgUrl,
  index,
}: {
  imgUrl: ImageSourcePropType;
  index: number;
}) => {
  return (
    <Image
      source={imgUrl}
      resizeMode={'contain'}
      style={{width: 48, height: 48, marginLeft: index === 0 ? 0 : -SIZES.font}}
    />
  );
};

export const People = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      {[assets.person01, assets.person02, assets.person03, assets.person04].map(
        (imgUrl, index) => {
          return <ImageCmp imgUrl={imgUrl} index={index} key={imgUrl} />;
        },
      )}
    </View>
  );
};

export const EndDate = () => {
  return (
    <View
      style={{
        paddingHorizontal: SIZES.font,
        paddingVertical: SIZES.base,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center',
        ...SHADOWS.light,
        elevation: 1,
        maxWidth: '50%',
      }}>
      <Text
        style={{
          fontFamily: FONTS.regular,
          color: COLORS.primary,
          fontSize: SIZES.small,
        }}>
        End date
      </Text>
      <Text
        style={{
          fontFamily: FONTS.regular,
          color: COLORS.primary,
          fontSize: SIZES.medium,
        }}>
        12h 30m
      </Text>
    </View>
  );
};

const SubInfo = () => {
  return (
    <View
      style={{
        width: '100%',
        paddingHorizontal: SIZES.font,
        marginTop: -SIZES.extraLarge,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <People />
      <EndDate />
    </View>
  );
};

export default SubInfo;
