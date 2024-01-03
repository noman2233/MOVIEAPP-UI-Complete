import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import {COLORS, FONTS, SIZES} from '../../constants/theme';

const InfoBox = ({label, price}) => {
  return (
    <View style={styles.conatiner}>
      <Text style={styles.text}>{label}</Text>
      <Text style={styles.text}> $ {price}</Text>
    </View>
  );
};

export default InfoBox;

const styles = StyleSheet.create({
  conatiner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: responsiveWidth(92),
  },
  text: {
    padding: SIZES.padding,
    color: COLORS.dark,
    ...FONTS.body4,
  },
});
