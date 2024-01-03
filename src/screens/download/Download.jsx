import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {trailor_data} from '../../../constants/dummy';
import {COLORS, SIZES, FONTS} from '../../../constants/theme';
import Buttons from '../../components/Buttons';
import {delete_red} from '../../../constants/constants';
import {useState} from 'react';
import DeleteModal from '../../modals/delete/DeleteModal';

const Download = () => {
  const [deleteModal, setDeleteModal] = useState(false);
  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={<Buttons />}
        data={trailor_data}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => {
          return (
            <View style={styles.container}>
              <Image
                source={{
                  uri: item.image,
                }}
                style={styles.image}
              />
              <View style={styles.wrapper}>
                <Text style={styles.name}>Lorem, ipsum dolor.</Text>
                <Text style={styles.time}>1m 45s.</Text>
                <Text style={styles.update}>Update</Text>
              </View>
              <TouchableOpacity
                hitSlop={{top: 10, left: 10, right: 10, left: 10}}
                onPress={() => setDeleteModal(true)}>
                <Image source={delete_red} style={styles.delete_image} />
              </TouchableOpacity>
              {deleteModal && <DeleteModal setDeleteModal={setDeleteModal} />}
            </View>
          );
        }}
      />
    </View>
  );
};

export default Download;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: SIZES.padding_small,
    marginHorizontal: responsiveWidth(0.8),
  },
  image: {
    width: responsiveWidth(30),
    height: responsiveHeight(18),
    resizeMode: 'cover',
    marginRight: SIZES.margin,
    borderRadius: SIZES.radius,
  },

  wrapper: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: responsiveHeight(18),
  },
  name: {
    color: COLORS.dark,
    ...FONTS.h5,
    fontSize: responsiveFontSize(2),
  },
  time: {
    color: COLORS.dark,
    ...FONTS.body4,
  },
  update: {
    color: COLORS.primary,
    ...FONTS.body4,
    borderWidth: 1,
    borderColor: COLORS.primary,
    width: responsiveWidth(20),
    textAlign: 'center',
    borderRadius: SIZES.radius,
  },
  in_active: {
    display: 'none',
  },
  delete_image: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});
