import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PaymentCard from '../../screenComponents/payment/PaymentCard';
import {apple, google, paypal} from '../../../constants/constants';
import {COLORS, FONTS, SIZES} from '../../../constants/theme';
import SimpleButton from '../../components/SimpleButton';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';

const Payment = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Select your payment method</Text>
      <PaymentCard image={paypal} label="Paypal" />
      <PaymentCard image={google} label="Google pay" />
      <PaymentCard image={apple} label="Apple pay" />
      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: responsiveHeight(20),
        }}>
        <SimpleButton
          label="Add New Card"
          containerStyle={{
            backgroundColor: '#fbcac8',
            marginTop: SIZES.margin * 2,
          }}
          labelStyle={{
            color: COLORS.primary,
          }}
          //   onPress={() => navigation.navigate('Parent')}
        />
        <SimpleButton
          label="Continue"
          onPress={() => navigation.navigate('Review Payment')}
        />
      </View>
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'column',
  },
  text: {
    color: COLORS.dark,
    ...FONTS.h4,
    paddingBottom: SIZES.padding_small,
  },
});
