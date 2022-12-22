import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Colors} from '../../Theme/colors';
import Icon from 'react-native-vector-icons/Foundation';
import {styles} from './styles';

const PlusMunis = () => {
  const [number, setNumber] = useState(0);
  useEffect(() => {}, [number]);
  const [price, setPrice] = useState(0);
  const onHandleTru = () => {
    if (number > 1) {
      setNumber(number - 1);
    }
  };
  const onHandleCong = () => {
    setNumber(number + 1);
  };
  return (
    <View style={styles.mNumber}>
      <TouchableOpacity onPress={onHandleTru}>
        <Icon name="minus" size={16} color={Colors.Black} />
      </TouchableOpacity>
      <Text>{number}</Text>
      <TouchableOpacity onPress={onHandleCong}>
        <Icon name="plus" size={16} color={Colors.Black} />
      </TouchableOpacity>
    </View>
  );
};

export default PlusMunis;
