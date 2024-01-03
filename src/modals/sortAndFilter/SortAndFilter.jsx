import {
  Button,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import TextButton from '../../components/TextButton';
import {data_11, data_12, data_13, sectionListData} from '../../../constants/constants';
import {COLORS, FONTS, SIZES} from '../../../constants/theme';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Row2 from './Row2';
import Row1 from './Row1';

const SortAndFilter = () => {
  return (
    <>
      <Row1 data={data_11} heading="Categories" />
      <Row2 data={data_12} heading="Region" />
      <Row1 data={data_12} heading="Geanera" />
      <Row2 data={data_12} heading="Popularity" />
      <Row2 data={data_13} heading="Sort" />
    </>
  );
};

export default SortAndFilter;

const styles = StyleSheet.create({
  container: {
    margin: SIZES.margin,
  },
  header: {
    color: COLORS.dark,
    ...FONTS.h5,
    fontSize: responsiveFontSize(2),
    paddingBottom: SIZES.padding,
  },
  title: {
    backgroundColor: COLORS.primary,
    color: COLORS.light,

    paddingHorizontal: responsiveWidth(3),
    paddingVertical: responsiveHeight(1),
    borderRadius: SIZES.radius,
    ...FONTS.h5,
    fontSize: responsiveFontSize(1.8),
    // width: responsiveWidth(25),
    marginHorizontal: responsiveWidth(1),
    paddingHorizontal: responsiveWidth(4),
  },
  buttons: {
    // flexDirection: 'row',
    // alignItems: 'center',
  },
  button2: {
    backgroundColor: COLORS.light,
    color: COLORS.primary,
    borderWidth: 2,
    borderColor: COLORS.primary,
    paddingHorizontal: responsiveWidth(3),
    paddingVertical: responsiveHeight(1),
    borderRadius: SIZES.radius,
    ...FONTS.h5,
    fontSize: responsiveFontSize(1.8),
    marginHorizontal: responsiveWidth(1),
    paddingHorizontal: responsiveWidth(4),
  },
  title2: {
    color: COLORS.primary,
    ...FONTS.h5,
    fontSize: responsiveFontSize(1.7),
  },
});
