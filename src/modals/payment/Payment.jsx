import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {constant_modal, loader} from '../../../constants/constants';
import {COLORS, FONTS, SIZES, width} from '../../../constants/theme';
const PaymentModal = ({setPayModal}) => {
  return (
    <Modal
      isVisible={true}
      backdropColor={COLORS.dark}
      animationIn="slideInUp"
      onBackdropPress={() => setPayModal(false)}
      backdropOpacity={0.7}
      scrollOffset={40}
      style={styles.modal}>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Image source={constant_modal} style={styles.image} />
          <Text style={styles.heading}>Congratulations!</Text>
          <Text style={styles.text}>
            Your account is ready to use.you will be redirected to the home page
            in a few seconds...
          </Text>
          <Image source={loader} style={styles.GIF} />
        </View>
      </View>
    </Modal>
  );
};

export default PaymentModal;

const styles = StyleSheet.create({
  modal: {
    alignItems: 'center',
  },
  container: {
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    backgroundColor: COLORS.light,
    width: responsiveWidth(92),
    height: responsiveHeight(50),
    borderRadius: SIZES.radius,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 170,
    height: 180,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  GIF: {
    width: 70,
    height: 70,
    resizeMode: 'cover',
  },
  heading: {
    color: COLORS.primary,
    ...FONTS.h3,
    fontSize: responsiveFontSize(2.5),
  },
  text: {
    color: COLORS.dark,
    textAlign: 'center',
    paddingVertical: 10,
    ...FONTS.h5,
    lineHeight: 18,
    fontSize: responsiveFontSize(1.8),
    paddingHorizontal: SIZES.padding,
  },
});
