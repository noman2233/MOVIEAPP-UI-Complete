import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PremiumComponent from '../../screenComponents/premium/PremiumComponent'
import {COLORS, FONTS, SIZES} from '../../../constants/theme';
import { crown } from '../../../constants/constants';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const PremiumBox2 = () => {
  return (
    <View style={styles.premium_box}>
    <Image source={crown} style={styles.image} />
    <View style={styles.amount_box}>
      <Text style={styles.amount}>$99.99</Text>
      <Text style={styles.month}>/year</Text>
    </View>
    <PremiumComponent text="Watch all you want ad free" />
    <PremiumComponent text="Allow streaming at 4k" />
    <PremiumComponent text="Video and audio quality is better" />
  </View>
  )
}

export default PremiumBox2

const styles = StyleSheet.create({
    premium_box: {
        borderWidth: 2,
        borderColor: COLORS.primary,
        flexDirection: 'column',
        // alignItems: 'center',
        width: responsiveWidth(92),
        padding: SIZES.padding,
        borderRadius: SIZES.radius * 1.5,
        marginVertical: responsiveWidth(2),
      },
      image: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        width: responsiveWidth(20),
        height: responsiveHeight(10),
        marginBottom: SIZES.padding_small,
      },
      amount_box: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },
      amount: {
        color: COLORS.dark,
        ...FONTS.h2,
        paddingRight: SIZES.padding_small,
        fontSize: responsiveFontSize(4),
      },
      month: {
        color: COLORS.dark60,
        ...FONTS.body2,
        paddingRight: SIZES.padding_small,
      },
})