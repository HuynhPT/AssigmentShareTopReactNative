import {View, Text, TextInput, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../../Theme/colors';

const InputPassword = ({
  onChangeText,
  defaultValue,
  placeholder,
  onPress,
  isCheck,
  isCheckShowPass,
  secureTextEntry,
  titleAler,
  ...props
}) => {
  return isCheck ? (
    <>
      <View style={[styles.mInputContainer, {borderBottomColor: Colors.RED}]}>
        <Icon name="account-key" size={24} color={Colors.RED} />
        <TextInput
          style={[styles.mInput, {color: Colors.RED}]}
          secureTextEntry={secureTextEntry}
          onChangeText={onChangeText}
          defaultValue={defaultValue}
          placeholder={placeholder}
          placeholderTextColor={Colors.RED}
        />
        <TouchableWithoutFeedback onPress={onPress}>
          {!isCheckShowPass ? (
            <Icon name="eye" size={24} color={Colors.RED} />
          ) : (
            <Icon name="eye-off" size={24} color={Colors.RED} />
          )}
        </TouchableWithoutFeedback>
      </View>
      <Text style={[styles.mInputAler, {color: Colors.RED}]}>{titleAler}</Text>
    </>
  ) : (
    <View style={styles.mInputContainer}>
      <Icon name="account-key" size={24} color={Colors.Gray51} />
      <TextInput
        style={[styles.mInput,{color:Colors.Black}]}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        defaultValue={defaultValue}
        placeholder={placeholder}
      />
      <TouchableWithoutFeedback onPress={onPress}>
        {!isCheckShowPass ? (
          <Icon name="eye" size={24} color={Colors.Gray51} />
        ) : (
          <Icon name="eye-off" size={24} color={Colors.Gray51} />
        )}
      </TouchableWithoutFeedback>
    </View>
  );
};

export default InputPassword;
