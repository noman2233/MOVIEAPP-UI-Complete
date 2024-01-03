import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {person} from '../../../../constants/dummy';
import {Notification} from '../../../../constants/constants';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {COLORS, FONTS, SIZES} from '../../../../constants/theme';
import {useNavigation} from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.profile}>Profile</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
          <Image source={Notification} style={styles.notifi_image} />
        </TouchableOpacity>
      </View>
      <View style={styles.profile_user}>
        <Image
          source={{
            uri: 'https://e1.pxfuel.com/desktop-wallpaper/49/663/desktop-wallpaper-new-movie-posters-hollywood-movie-2022-thumbnail.jpg',
          }}
          style={styles.image}
        />
        <Text style={styles.name}>Usman Khan</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {},
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profile: {
    color: COLORS.dark,
    ...FONTS.h4,
  },
  notifi_image: {
    width: responsiveWidth(7),
    height: responsiveHeight(7),
    resizeMode: 'contain',
  },
  image: {
    width: responsiveWidth(30),
    height: responsiveHeight(15),
    resizeMode: 'cover',
    borderRadius: responsiveWidth(20),
    marginBottom: SIZES.margin,
  },
  profile_user: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: SIZES.margin,
  },
  name: {
    color: COLORS.dark,
    ...FONTS.h5,
    marginLeft: SIZES.margin,
  },
});
