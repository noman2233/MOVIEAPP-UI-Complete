import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import SplashScreen from 'react-native-splash-screen';
import ProfileForm from './src/screens/profile/ProfileForm';
import NewPassword from './src/screens/authentication/NewPassword';
import Login from './src/screens/authentication/Login';
import SignUp from './src/screens/authentication/SignUp';
import OTP from './src/screens/authentication/OTP';
import FingerPrint from './src/screens/authentication/FingerPrint';
import TopMoviesThisWeek from './src/screens/topMoviesThisWeek/TopMoviesThisWeek';
import NewRelease from './src/screens/newRelease/NewRelease';
import DownloadModal from './src/modals/download/Download';
import MovieDetail from './src/screens/movieDetail/MovieDetail';
import RatingModal from './src/modals/rating/RatingModal';
import NotFound from './src/screens/notFound/NotFound';
import DeveloperInfo from './src/screens/developerInfo/DeveloperInfo';
import Download from './src/screens/download/Download';
import Search from './src/screenComponents/search/Search';
import DeleteModal from './src/modals/delete/DeleteModal';
import SortAndFilter from './src/modals/sortAndFilter/SortAndFilter';
import ChooseInterest from './src/screens/chooseInterest/ChooseInterest';
import Notification from './src/screens/notification/Notification';
import Premium from './src/screens/premium/Premium';
import Payment from './src/screens/PaymentCard/Payment';
import ReviewPayment from './src/screens/PaymentCard/ReviewPayment';
import PaymentModal from './src/modals/payment/Payment';
import Favourite from './src/screens/favourite/Favourite';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  // return <ChooseInterest />;
  // return <SortAndFilter />;
  // return <PaymentModal/>;
  return <AppNavigator />;

 
  // return <ProfileForm />;
  // return <Payment />;
  // return <ReviewPayment/>;
  // return <Premium />;
  // return <Notification />;
  // return <MovieDetail />;
  // return <RatingModal />;
  // return <NotFound />;
  // return <DeveloperInfo/>;
  // return <DeleteModal />;
  // return <Download />;
  // return <Search />;
  // return <Download />;
};

export default App;

const styles = StyleSheet.create({});
