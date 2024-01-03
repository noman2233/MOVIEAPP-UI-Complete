import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, SIZES, FONTS} from '../../../constants/theme';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const Notification = () => {
  return (
    <View style={styles.container_main}>
      <FlatList
        data={[1, 1, 1, 1, 1, 1, 1]}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => {
          return (
            <View style={styles.Notification_card}>
              
              <View style={styles.Notification_card_contant}>
                <Text style={{color: COLORS.dark, ...FONTS.body3}}>
                  Alert
                </Text>
                <Text
                  style={{
                    color: COLORS.dark80,
                    paddingVertical: 10,
                    ...FONTS.body3,
                    lineHeight: responsiveHeight(3.2),
                  }}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
                  deleniti error, perferendis veniam labore repellat ab vero
                  assumenda hic officiis!
                </Text>
                <Text style={{color: COLORS.grey, ...FONTS.body5}}>
                  July 20, 2020 (08:00 pm)
                </Text>
              </View>
         
            </View>
          );
        }}
      />
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container_main: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Notification_card: {
    width: responsiveWidth(95),
    backgroundColor: COLORS.light,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    paddingVertical: SIZES.padding,
    paddingHorizontal: SIZES.padding,
    marginVertical: responsiveHeight(0.5),
    borderRadius: SIZES.radius,

    shadowColor: 'grey',
    borderWidth: 1,
    borderColor: COLORS.grey60,
 
  },
  Notification_card_contant: {
    paddingLeft: 10,
  },
  notification_bag: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    color: COLORS.primary,
  },
});
