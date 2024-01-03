import VideoPlayer from 'react-native-video-player';
import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES, width} from '../../../constants/theme';
import Modal from 'react-native-modal';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
const VideoPlayerModal = ({setOpen}) => {
  return (
    <Modal
      isVisible={true}
      backdropColor={COLORS.dark}
      animationIn="slideInUp"
      onBackdropPress={() => setOpen(false)}
      backdropOpacity={0.2}
      scrollOffset={40}
      style={styles.modal}>
      <View style={styles.container}>
        <VideoPlayer
          video={{
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
          }}
          style={styles.video}
          videoWidth={responsiveWidth(100)}
          videoHeight={responsiveHeight(100)}
          thumbnail={{uri: 'https://i.picsum.photos/id/866/1600/900.jpg'}}
        />
      </View>
    </Modal>
  );
};

export default VideoPlayerModal;

const styles = StyleSheet.create({
  modal: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: responsiveWidth(95),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  video: {
    width: responsiveWidth(100),
    height: responsiveHeight(50),
  },
});
