import React, {ComponentProps} from 'react';
import {Image, ImageSourcePropType, Text, TouchableOpacity} from 'react-native';
import {COLORS, FONTS, SHADOWS, SIZES} from '../constant';

export const CircleButton = ({
  handlePress,
  imgUrl,
}: {
  imgUrl: ImageSourcePropType;
  handlePress: () => void;
  right?: number;
  left?: number;
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: 'absolute',
        borderRadius: SIZES.extraLarge,
        alignItems: 'center',
        justifyContent: 'center',
        ...SHADOWS.light,
        top: 10,
        right: 10,
      }}>
      <Image
        source={imgUrl}
        resizeMode={'contain'}
        style={{width: 24, height: 24}}
      />
    </TouchableOpacity>
  );
};

type IRectButtonProp = ComponentProps<typeof TouchableOpacity> & {
  minWidth: number;
  fontSize: number;
  handlePress: () => void;
};
export const RectButton: React.FC<IRectButtonProp> = ({
  minWidth,
  fontSize,
  handlePress,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.small,
        borderRadius: SIZES.extraLarge,
        minWidth: minWidth,
        ...props,
      }}
      onPress={handlePress}>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: fontSize,
          color: COLORS.white,
          textAlign: 'center',
        }}>
        Place a bid
      </Text>
    </TouchableOpacity>
  );
};
