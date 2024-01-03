import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
    responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {tick} from '../../../constants/constants';
import {COLORS, FONTS, SIZES} from '../../../constants/theme';

const PremiumComponent = ({text}) => {
  return (
    
    <View style={styles.container}>
      <Image source={tick} style={styles.image} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default PremiumComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: SIZES.padding,
    marginVertical:responsiveHeight(.5),
  },
  image: {
    width: responsiveWidth(5),
    height: responsiveHeight(3),
    resizeMode: 'cover',
    marginRight: SIZES.padding,
  },
  text: {
    color: COLORS.dark80,
    ...FONTS.body5,
    fontSize:responsiveFontSize(1.7)
  },
});
