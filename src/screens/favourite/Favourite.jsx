import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import BookingButtons from '../../screenComponents/bookingButtons/BookingButtons';
import UserBooking from '../../screenComponents/bookingButtons/BookingButtons2';
 


const Favourite = () => {
  const [index, setIndex] = useState(1);
  const toggleTab = index => {
    setIndex(index);
  };
  return (
    <View style={styles.container}>
      <BookingButtons toggleTab={toggleTab} index={index} />
      {index === 1 && (
        <UserBooking
          uri={
            'https://marketplace.canva.com/EAFH3gODxw4/1/0/1131w/canva-black-%26-white-modern-mystery-forest-movie-poster-rLty9dwhGG4.jpg'
          }
        />
      )}
      {index === 2 && (
        <UserBooking
          uri={
            'https://cdn.europosters.eu/image/350/posters/dune-part-1-i122815.jpg'
          }
        />
      )}
      {index === 3 && (
        <UserBooking
          uri={
            'https://rukminim2.flixcart.com/image/850/1000/jf8khow0/poster/a/u/h/small-hollywood-movie-poster-blade-runner-2049-ridley-scott-original-imaf3qvx88xenydd.jpeg?q=20'
          }
        />
      )}
    </View>
  );
};

export default Favourite;

const styles = StyleSheet.create({
  container: {
  
  },
});
