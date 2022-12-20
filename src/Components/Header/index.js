import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../../Theme/colors';

const HeaderApp = ({titleHeader, isBack, onBack, onFavorite, isFavorite}) => {
  return (
    <View style={styles.mContainer}>
      <View style={styles.mContainers}>
        <View style={styles.mBody}>
          {isBack ? (
            <TouchableWithoutFeedback onPress={onBack}>
              <Image
                source={require('../../Assets/images/arrow_back.png')}
                resizeMode="contain"
                style={styles.mImage}
              />
            </TouchableWithoutFeedback>
          ) : (
            <TouchableWithoutFeedback onPress={onBack} disabled={true}>
              {/* <Image
              source={require('../../Assets/images/arrow_back.png')}
              resizeMode="contain"
              style={styles.mImage}
            /> */}
              <View style={styles.mImage}></View>
            </TouchableWithoutFeedback>
          )}

          <Text style={styles.mText}>{titleHeader}</Text>
          {isFavorite ? (
            <TouchableWithoutFeedback onPress={onFavorite}>
              <Icon name="favorite-border" size={32} color={Colors.White} />
            </TouchableWithoutFeedback>
          ) : (
            <TouchableWithoutFeedback onPress={onFavorite} disabled={true}>
              <Icon name="favorite-border" size={32} color={Colors.Black} />
            </TouchableWithoutFeedback>
          )}
        </View>
      </View>
    </View>
  );
};

export default HeaderApp;
