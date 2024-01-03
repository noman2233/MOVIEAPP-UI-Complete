import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {buttonData} from '../../../constants/dummy';
import {COLORS, SIZES, FONTS} from '../../../constants/theme';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const ChooseInterest = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.Lines}>
        Choose your interest and get the best recomendation.Dont worry you can
        change it later from account setting
      </Text>
      <View style={styles.wrapper}>
        {buttonData.map((item, index) => (
          <TouchableOpacity style={styles.button} key={index}>
            <Text style={styles.text}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default ChooseInterest;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: SIZES.margin,
    flexWrap: 'wrap',
  },
  container: {
    marginHorizontal: SIZES.padding_small,
  },
  button: {
    backgroundColor: COLORS.light,
    paddingHorizontal: SIZES.padding,
    paddingVertical: responsiveHeight(0.5),
    borderRadius: SIZES.radius * 3,
    marginHorizontal: responsiveWidth(1.5),
    marginVertical: responsiveWidth(3),
    borderWidth: 2,
    borderColor: COLORS.primary,
  },
  text: {
    color: COLORS.primary,
    ...FONTS.h5,
    fontSize: responsiveFontSize(1.8),
  },
  Lines: {
    color: COLORS.dark,
    ...FONTS.h5,
    lineHeight: responsiveHeight(3.2),
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'Poppins-Medium',
  },
});
