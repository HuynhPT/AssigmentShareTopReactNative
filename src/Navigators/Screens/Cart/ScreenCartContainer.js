import {View, Text} from 'react-native';
import React from 'react';
import HeaderApp from '../../../Components/Header';
import {TITLE_HEADER} from '../../../Constants/Header';
const ScreenCartContainer = ({route}) => {
  console.log(route.params, 'dataCart');
  return (
    <View style={{flex: 1}}>
      <HeaderApp
        isBack={false}
        onBack={() => {}}
        onFavorite={() => {}}
        titleHeader={TITLE_HEADER}
      />
      <View style={{flex: 1}}></View>
    </View>
  );
};

export default ScreenCartContainer;
