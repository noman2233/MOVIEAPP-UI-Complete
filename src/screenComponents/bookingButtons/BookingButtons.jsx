import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import { activeOpacity } from '../../../constants/constants';
import { COLORS, SIZES ,FONTS} from '../../../constants/theme';

const BookingButtons = ({toggleTab, index}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={activeOpacity}
        onPress={() => toggleTab(1)}
        style={index === 1 ? styles.button : styles.inActive}>
        <Text style={index === 1 ? styles.text : styles.inactiveText}>
          Past
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={activeOpacity}
        onPress={() => toggleTab(2)}
        style={index === 2 ? styles.button : styles.inActive}>
        <Text style={index === 2 ? styles.text : styles.inactiveText}>
          Active
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={activeOpacity}
        onPress={() => toggleTab(3)}
        style={index === 3 ? styles.button : styles.inActive}>
        <Text style={index === 3 ? styles.text : styles.inactiveText}>
          Cancel
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BookingButtons;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom:responsiveHeight(1),
    marginLeft:responsiveWidth(1),
    marginTop:responsiveWidth(2),
  },
  button: {
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.radius,
    paddingVertical: responsiveHeight(1),
    paddingHorizontal: SIZES.margin * 2,
    alignItems: 'center',
    borderWidth: 0.4,
    marginHorizontal: responsiveWidth(2),
    color: COLORS.light,
  },
  inActive: {
    backgroundColor: COLORS.light,
    borderRadius: SIZES.radius,
    paddingVertical: responsiveHeight(1),
    paddingHorizontal: SIZES.margin * 2,
    alignItems: 'center',
    borderWidth: 0.4,
    marginHorizontal: responsiveWidth(2),
  },
  text: {
    color: COLORS.light,
    ...FONTS.h1,
    fontSize: responsiveFontSize(2),
  },
  inactiveText: {
    color: COLORS.dark,
    ...FONTS.h1,
    fontSize: responsiveFontSize(2),
  },
});
