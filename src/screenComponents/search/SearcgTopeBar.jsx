import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {filter} from '../../../constants/constants';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {COLORS, FONTS, SIZES} from '../../../constants/theme';

const SearcgTopeBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <TextInput placeholder="Search Fav Movies" style={styles.input} />
        <Image source={filter} style={styles.filter} />
      </View>
      {/* <Text style={styles.heading}>Search Top Bar</Text> */}
    </View>
  );
};

export default SearcgTopeBar;

const styles = StyleSheet.create({
  container: {marginTop: SIZES.margin},
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: SIZES.padding_small,
    // marginHorizontal: SIZES.margin,
  },
  input: {
    borderWidth: 0.5,
    width: responsiveWidth(83),
    borderColor: COLORS.grey,
    color: COLORS.dark,
    shadowColor: COLORS.grey,
    paddingLeft: SIZES.margin,
    backgroundColor: COLORS.light,
    borderRadius: SIZES.radius,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
    ...FONTS.body4,
  },
  teheadingxt: {
    color: COLORS.dark,
    ...FONTS.h4,
  },
  filter: {
    width: responsiveWidth(7),
    height: responsiveHeight(4),
    resizeMode: 'contain',
  },
});
