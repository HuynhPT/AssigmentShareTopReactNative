import { Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
/**
 * Khởi tạo Nút nhấn mặc định
 * @param {*} param0 
 * @returns 
 */
const ButtonNormal = ({
  titleButton,
  onPress,
  ...props
}) => {
  return (
    <TouchableOpacity style={styles.mContainer} onPress={onPress}>
      <Text style={styles.mTextButton}>{titleButton}</Text>
    </TouchableOpacity>
  );
};

export default ButtonNormal;
