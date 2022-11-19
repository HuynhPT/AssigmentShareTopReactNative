import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import AnimatedLottieView from 'lottie-react-native';
import {styles} from './SplashScreenStyles';
import {NameScreen} from '../../Containers/App';

const SplashScreen = ({navigation}) => {
  /**
   * Đặt độ trễ splashScreen
   */
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(NameScreen.SCREEN_LOGIN);
    }, 3000);
  }, []);
  return (
    <View style={styles.mContainer}>
      <AnimatedLottieView
        source={require('../../../Assets/lottie/splashscreen.json')}
        autoPlay
        loop
      />
    </View>
  );
};

export default SplashScreen;
