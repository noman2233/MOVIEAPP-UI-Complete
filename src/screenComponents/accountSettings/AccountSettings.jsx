import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import ButtonComponent from './bottomComponent/ButtonComponent';
import {
  Account,
  Login,
  Logout,
  Notification,
  activeOpacity,
  analyze,
  booking,
  contact,
  crown,
  developerInfo,
  download_grey,
  favourite,
  fingerprint,
  fingerprint_2,
  google_play,
  main_download,
  termsConditions,
  userProfile,
} from '../../../constants/constants';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Header from './header/Header';
import {useNavigation} from '@react-navigation/native';
import {COLORS, SIZES, FONTS} from '../../../constants/theme';
import ProfileForm from '../../screens/profile/ProfileForm';
import DeveloperInfo from '../../screens/developerInfo/DeveloperInfo';
import LogoutModal from '../../modals/logout/Logout';

const AccountSettings = () => {
  const navigation = useNavigation();
  const [logout, setLogout] = useState(false);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Header />
        <TouchableOpacity
          activeOpacity={activeOpacity}
          onPress={() => navigation.navigate('Premium')}>
          <View style={styles.paid}>
            <Image source={crown} style={styles.image} />
            <View style={styles.text_box}>
              <Text style={styles.premium}>Join Premium</Text>
              <Text style={styles.long_text}>
                Enjoy watching your favourite movoies without ads
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <Text style={styles.heading}>Settings</Text>
        <ButtonComponent
          label="Personal Information"
          image={Account}
          onPress={() => navigation.navigate('Profile Form')}
        />
        <ButtonComponent
          label="Login & Security"
          image={Login}
          onPress={() => navigation.navigate('Login')}
        />
        <ButtonComponent
          label="Profile Form"
          image={userProfile}
          onPress={() => navigation.navigate('Profile Form')}
        />
        <ButtonComponent
          label="FingerPrint"
          image={fingerprint}
          onPress={() => navigation.navigate('FingerPrint')}
        />
        <ButtonComponent
          label="Favourites"
          image={favourite}
          onPress={() => navigation.navigate('Favourite')}
        />
        <ButtonComponent
          label="Developer Info"
          image={developerInfo}
          onPress={() => navigation.navigate('Developer Information')}
        />
        <ButtonComponent
          label="Notification"
          image={Notification}
          onPress={() => navigation.navigate('Notification')}
        />
        <ButtonComponent
          label="Download"
          image={main_download}
          onPress={() => navigation.navigate('Download')}
        />
        <ButtonComponent
          label="DeveloperInfo"
          image={google_play}
          onPress={() => navigation.navigate('Developer Information')}
        />
        <ButtonComponent
          label="Useful Links"
          image={contact}
          onPress={() => navigation.navigate('Contact')}
        />
        <ButtonComponent
          label="Contact Us"
          image={contact}
          onPress={() => navigation.navigate('ContactForm')}
        />
        <ButtonComponent
          label="Privecy Policy"
          image={analyze}
          onPress={() => navigation.navigate('Privacy Policy')}
        />
        <ButtonComponent
          label="Terms & Conditions"
          image={termsConditions}
          onPress={() => navigation.navigate('Privacy Policy')}
        />
        <ButtonComponent
          label="Logout"
          image={Logout}
          onPress={() => setLogout(true)}
        />
        {logout && <LogoutModal setLogout={setLogout} />}
      </View>
    </ScrollView>
  );
};

export default AccountSettings;

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.margin,
    marginHorizontal: responsiveWidth(2),
  },
  heading: {
    color: COLORS.dark,
    ...FONTS.h3,
    marginTop: SIZES.margin,
    paddingLeft: SIZES.margin,
  },
  image: {
    width: responsiveWidth(20),
    height: responsiveHeight(10),
    resizeMode: 'cover',
  },
  paid: {
    borderWidth: 2,
    borderColor: COLORS.primary,
    borderRadius: SIZES.radius * 3,
    paddingHorizontal: SIZES.padding * 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: responsiveWidth(95),
    paddingVertical: SIZES.padding,
  },
  text_box: {
    paddingLeft: SIZES.padding,
  },
  premium: {
    color: COLORS.primary,
    ...FONTS.h3,
  },
  long_text: {
    color: COLORS.dark,
    ...FONTS.body5,
  },
});
