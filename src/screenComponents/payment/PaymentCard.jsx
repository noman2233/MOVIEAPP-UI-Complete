import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {activeOpacity, paypal} from '../../../constants/constants';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {COLORS, FONTS, SIZES} from '../../../constants/theme';

const PaymentCard = ({image, label}) => {
  return (
    <TouchableOpacity activeOpacity={activeOpacity} sttyle={styles.container}>
      <View style={styles.wrapper}>
        <Image source={image} style={styles.image} />
        <Text style={styles.text}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PaymentCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.grey,
    padding: SIZES.padding_small,
    width: responsiveWidth(95),
    marginVertical: SIZES.padding_small,
    borderRadius: SIZES.radius,
  },
  image: {
    width: responsiveWidth(10),
    height: responsiveHeight(5),
    resizeMode: 'cover',
    marginRight: SIZES.padding,
  },
  text: {
    color: COLORS.dark,
    ...FONTS.h5,
  },
});
