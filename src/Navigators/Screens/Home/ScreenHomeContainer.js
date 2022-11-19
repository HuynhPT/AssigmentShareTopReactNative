import {View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const ScreenHomeContainer = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'red', justifyContent: 'center'}}>
      <Text>ScreenHomeContainer</Text>
      <Icon name="add" size={24} />
    </View>
  );
};

export default ScreenHomeContainer;
