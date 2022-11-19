import AnimatedLottieView from 'lottie-react-native';
import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';

const Loading = ({isLoading, ...props}) => {
  return isLoading ? (
    <View style={styles.mContainer}>
      <AnimatedLottieView
        resizeMode="contain"
        source={require('../../Assets/lottie/loading_shooes.json')}
        autoPlay={true}
        loop
        style={styles.mLoading}
      />
    </View>
  ) : null;
};

export default Loading;
