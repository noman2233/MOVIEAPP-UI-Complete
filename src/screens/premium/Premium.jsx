import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import PremiumComponent from '../../screenComponents/premium/PremiumComponent';
import {COLORS, FONTS, SIZES} from '../../../constants/theme';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import PremiumBox1 from './PremiumBox1';
import PremiumBox2 from './PremiumBox2';
import { useNavigation } from '@react-navigation/native';

const Premium = () => {
  const navigation=useNavigation()
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.heading}>Subscribe to Premium</Text>
        <Text style={styles.sub_heading}>
          Enjoy watching full HD movies without restriction and ads
        </Text>
        <TouchableOpacity onPress={()=>navigation.navigate("Payment")}>
          <PremiumBox1 />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("Payment")}>
          <PremiumBox2 />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Premium;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  heading: {
    color: COLORS.primary,
    ...FONTS.h4,
  },
  sub_heading: {
    color: COLORS.dark,
    ...FONTS.body5,
    paddingHorizontal: SIZES.padding * 3,
    textAlign: 'center',
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
});
