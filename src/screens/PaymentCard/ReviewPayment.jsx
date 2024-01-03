import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PremiumBox2 from '../premium/PremiumBox2';
import InfoBox from '../../components/InfoBox';
import {COLORS, SIZES} from '../../../constants/theme';
import SimpleButton from '../../components/SimpleButton';
import {useState} from 'react';
import PaymentModal from '../../modals/payment/Payment';

const ReviewPayment = ({navigation}) => {
  const [payModal, setPayModal] = useState(false);
  return (
    <View style={styles.container}>
      <PremiumBox2 />
      <View style={styles.wrapper}>
        <InfoBox label="Amount" price="9.99" />
        <InfoBox label="Tax" price="0.99" />
        <InfoBox label="Total" price="11.99" />
      </View>
      <SimpleButton
        containerStyle={{
          marginTop: SIZES.margin * 2,
        }}
        label="Pay Now"
        onPress={() => setPayModal(true)}
      />
      {payModal && <PaymentModal  setPayModal={setPayModal} />}
    </View>
  );
};

export default ReviewPayment;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  wrapper: {
    shadowColor: COLORS.light,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
    backgroundColor: COLORS.light,
    borderRadius: SIZES.radius,
    marginTopL: SIZES.margin,
  },
});
