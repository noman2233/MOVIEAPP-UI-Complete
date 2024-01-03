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
const DeleteModal = ({setDeleteModal}) => {
  return (
    <Modal
      isVisible={true}
      backdropColor={COLORS.dark}
      animationIn="slideInUp"
      onBackdropPress={() => setDeleteModal(false)}
      backdropOpacity={0.2}
      scrollOffset={40}
      style={styles.modal}>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Text style={styles.heading}>Delete!</Text>
          <Text style={styles.text}>Are you shure you want to delete this</Text>
          <View style={styles.movie_info}>
            <Image
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnuCD3BajJR5cqAWq5SBr1DJwgtKbHE8d0tUwVGK7WGpC0Nfsw6Pd5HhrXDYegBkHyKmg&usqp=CAU',
              }}
              style={styles.image_movie}
            />
            <View style={styles.movie_detail}>
              <Text style={styles.name}>Avenger the movie</Text>
              <Text style={styles.lenght}>1h and 30s</Text>
              <Text style={styles.ratiung}>4.5</Text>
            </View>
          </View>

          <View style={styles.buttons}>
            <SimpleButton
              label="Cancel"
              onPress={() => setDeleteModal(false)}
              containerStyle={{
                backgroundColor: '#ff0505b0',
                width: responsiveWidth(35),
                marginTop: SIZES.margin,
                marginRight: SIZES.margin,
              }}
              labelStyle={{
                color: COLORS.light,
              }}
            />
            <SimpleButton
              label="Yes,Delete"
              onPress={() => setDeleteModal(false)}
              containerStyle={{
                backgroundColor: COLORS.primary,
                width: responsiveWidth(35),
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

export default DeleteModal;

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
    bottom: responsiveHeight(2),
  },
  wrapper: {
    backgroundColor: COLORS.light,
    width: responsiveWidth(100),
    height: responsiveHeight(50),
    borderRadius: SIZES.radius * 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: SIZES.radius * 4,
    borderTopLeftRadius: SIZES.radius * 4,
  },
  image: {
    width: 170,
    height: 180,
    resizeMode: 'cover',
    marginBottom: SIZES.marginLarge,
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
    lineHeight: responsiveHeight(3),
    fontSize: responsiveFontSize(2),
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: SIZES.margin,
  },
  image_movie: {
    width: responsiveWidth(35),
    height: responsiveHeight(15),
    borderRadius: SIZES.radius,
    resizeMode: 'cover',
  },
  movie_info: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: SIZES.padding,
  },
  name: {
    color: COLORS.dark,
    ...FONTS.h5,
  },
  movie_detail: {
    marginLeft: SIZES.margin,
  },
  lenght: {
    color: COLORS.dark80,
    ...FONTS.body2,
    paddingVertical: responsiveHeight(1),
  },
  ratiung: {
    color: COLORS.primary,
    ...FONTS.body2,
    backgroundColor: '#fed2d2',
    width: responsiveWidth(15),
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: SIZES.radius,
  },
});
