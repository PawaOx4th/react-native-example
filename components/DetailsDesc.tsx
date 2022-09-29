import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS, NFTData, SIZES} from '../constant';
import {EthPrice, NFTTitle} from './SubInfo';

type DetailsDescProps = {
  data: typeof NFTData[number];
};
const DetailsDesc = ({data}: DetailsDescProps) => {
  const [description, setDescription] = useState(
    data.description.slice(0, 100),
  );
  const [isReadMore, setIsReadMore] = useState(false);

  function handleReadMore(_isReadMore: boolean) {
    if (!_isReadMore) {
      setDescription(data.description);
      setIsReadMore(true);
    } else {
      setDescription(data.description.slice(0, 100));
      setIsReadMore(false);
    }
  }
  return (
    <>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.extraLarge}
          subTitleSize={SIZES.font}
        />
        <EthPrice price={data.price} />
      </View>
      <View style={{marginVertical: SIZES.extraLarge * 1.5}}>
        <Text
          style={{
            fontSize: SIZES.font,
            fontFamily: FONTS.semiBold,
            color: COLORS.primary,
          }}>
          Description
        </Text>
        <View style={{marginTop: SIZES.base}}>
          <Text
            style={{
              fontSize: SIZES.small,
              fontFamily: FONTS.regular,
              color: COLORS.secondary,
              lineHeight: SIZES.large,
            }}>
            {description}
            {!isReadMore && '...'}
            <Text
              style={{
                fontSize: SIZES.small,
                fontFamily: FONTS.semiBold,
                color: COLORS.primary,
              }}
              onPress={() => {
                const _isReadMore = isReadMore;
                handleReadMore(_isReadMore);
              }}>
              {isReadMore ? ' Show Less' : ' Read More'}
            </Text>
          </Text>
        </View>
      </View>
    </>
  );
};

export default DetailsDesc;
