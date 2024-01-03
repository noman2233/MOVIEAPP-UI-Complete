import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES, width} from '../../../constants/theme';
import Modal from 'react-native-modal';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import SimpleButton from '../../components/SimpleButton';
import ProgressBar from '../../components/ProgressBar';
const LogoutModal = ({setLogout}) => {
  return (
    <Modal
      isVisible={true}
      backdropColor={COLORS.dark}
      animationIn="slideInUp"
      onBackdropPress={() => setLogout(false)}
      backdropOpacity={0.2}
      scrollOffset={40}
      style={styles.modal}>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Text style={styles.heading}>Logout!</Text>
          <Text style={styles.text}>Are you sure you want to logout</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <SimpleButton
              label="Cancel"
              onPress={() => setLogout(false)}
              containerStyle={{
                backgroundColor: '#ff0505b0',
                width: responsiveWidth(40),
                marginTop: SIZES.margin,
                marginRight: SIZES.margin,
              }}
              labelStyle={{
                color: COLORS.light,
              }}
            />
            <SimpleButton
              label="Logout"
              onPress={() => setLogout(false)}
              containerStyle={{
                backgroundColor: COLORS.primary,
                width: responsiveWidth(40),
                marginTop: SIZES.margin,
              }}
              labelStyle={{
                color: COLORS.light,
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default LogoutModal;

const styles = StyleSheet.create({
  modal: {
    alignItems: 'center',
    position: 'relative',
  },
  container: {
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: responsiveHeight(0),
  },
  wrapper: {
    backgroundColor: COLORS.light,
    width: responsiveWidth(100),
    height: responsiveHeight(30),
    borderRadius: SIZES.radius * 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 170,
    height: 180,
    resizeMode: 'cover',
    marginBottom: SIZES.marginLarge,
  },
  GIF: {
    width: 70,
    height: 70,
    resizeMode: 'cover',
    marginTop: SIZES.marginLarge,
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
    ...FONTS.h3,
    lineHeight: 18,
    fontSize: responsiveFontSize(1.7),
  },
});
