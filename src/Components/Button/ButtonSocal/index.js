import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {Sizes} from '../../../Theme/sizes';
/**
 * Khởi tạo nút nhấn custom
 * @param {*} param0
 * @returns
 */
const ButtonSocial = ({
  titleButton,
  onPress,
  borderColor,
  backgroundColor,
  textColor,
  iconTitle,
  iconColor,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.mContainer,
        {borderColor: borderColor, backgroundColor: backgroundColor},
      ]}
      onPress={onPress}>
      <Icon name={iconTitle} size={Sizes.size_32} color={iconColor} />
      <Text style={[styles.mTextButton, {color: textColor}]}>
        {titleButton}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonSocial;
