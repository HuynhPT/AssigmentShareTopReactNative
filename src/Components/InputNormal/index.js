import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../../Theme/colors';

/**
 * Khởi tạo input component
 * @param {*} param0 
 * @returns 
 */
const InputNormal = ({
  placeholder,
  defaultValue,
  onChangeText,
  isCheck,
  titleAler,
  ...props
}) => {
  return isCheck ? (
    <>
      <View style={[styles.mInputContainer, {borderBottomColor: Colors.RED}]}>
        <Icon name="person" size={24} color={Colors.RED} />
        <TextInput
          style={[styles.mInput, {color: Colors.RED}]}
          placeholder={placeholder}
          defaultValue={defaultValue}
          onChangeText={onChangeText}
          placeholderTextColor={Colors.RED}
        />
      </View>
      <Text style={[styles.mInPutAlert, {color: Colors.RED}]}>{titleAler}</Text>
    </>
  ) : (
    <View style={styles.mInputContainer}>
      <Icon name="person" size={24} color={Colors.Gray51} />
      <TextInput
        style={[styles.mInput,{color:Colors.Black}]}
        placeholder={placeholder}
        defaultValue={defaultValue}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default InputNormal;
