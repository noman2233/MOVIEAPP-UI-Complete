import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS, SIZES, FONTS} from '../../../constants/theme';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import SimpleButton from '../../components/SimpleButton';
const UserBooking = ({uri}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[1, 1, 1, 1, 1, 1, 1]}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => {
          return (
            <View style={styles.wrapper}>
              <Image
                source={{
                  uri: uri,
                }}
                style={styles.image}
              />
              <View style={styles.info_container}>
                <View style={styles.title_rating_box}>
                  <Text style={styles.title}>Movie Name</Text>
                  <View style={styles.rating_box}>
                    <Text style={styles.rating}>4.5</Text>
                    <Icon
                      name="star"
                      color={COLORS.success}
                      size={SIZES.iconSizeSmall}
                    />
                  </View>
                </View>
                <View style={styles.location}>
                  <Ionicons
                    name="location"
                    color={COLORS.dark80}
                    size={SIZES.iconSizeSmall}
                  />
                  <Text style={styles.place}>Hollywood</Text>
                </View>
              
                <SimpleButton
                  label="Remove"
                  containerStyle={{
                    width: responsiveWidth(38),
                    paddingVertical: responsiveHeight(1.3),
                    marginTop: SIZES.margin,
                    borderRadius: responsiveWidth(1.5),
                  }}
                  labelStyle={{
                    ...FONTS.h1,
                    fontSize: responsiveFontSize(1.7),
                  }}
                />
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default UserBooking;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: responsiveHeight(20),
  },
  heading: {
    color: COLORS.dark,
    ...FONTS.h1,
    fontSize: responsiveFontSize(3),
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: responsiveWidth(95),
    marginVertical: responsiveHeight(1.5),
  },
  image: {
    width: responsiveWidth(45),
    height: responsiveHeight(17),
    resizeMode: 'cover',
    borderRadius: SIZES.radius,
  },
  info_container: {
    marginLeft: SIZES.marginLarge,
  },
  title_rating_box: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: COLORS.dark,
    ...FONTS.h1,
    fontSize: responsiveFontSize(1.5),
  },
  rating_box: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: SIZES.margin,
  },
  rating: {
    color: COLORS.dark80,
    ...FONTS.h4,
    fontSize: responsiveFontSize(1.5),
    paddingRight: responsiveWidth(2),
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  place: {
    color: COLORS.dark80,
    ...FONTS.h4,
    fontSize: responsiveFontSize(1.5),
    marginVertical: responsiveHeight(1),
  },
  cost_box: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cost: {
    color: COLORS.dark,
    ...FONTS.h5,
  },
  person: {
    color: COLORS.dark60,
    ...FONTS.body1,
    fontSize: responsiveFontSize(1.5),
  },
});
