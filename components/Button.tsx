import React from 'react';
import {Image, ImageSourcePropType, TouchableOpacity} from 'react-native';
import {COLORS, SHADOWS, SIZES} from '../constant';

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
