import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {data_11} from '../../../constants/constants';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {COLORS, SIZES, FONTS} from '../../../constants/theme';

const Row1 = ({data, heading}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{heading}</Text>
      <View stylw={styles.buttons}>
        <ScrollView
          style={styles.buttons}
          showsHorizontalScrollIndicator={false}
          horizontal={true}>
          {data?.map((item, index) => (
            <TouchableOpacity>
              <Text style={styles.title}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Row1;

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
    borderRadius: SIZES.radius*4,
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
