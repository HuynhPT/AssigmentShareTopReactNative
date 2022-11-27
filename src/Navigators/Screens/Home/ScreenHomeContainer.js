import {View, Text} from 'react-native';
import React from 'react';
import HeaderApp from '../../../Components/Header';
import {TITLE_HEADER} from '../../../Constants/Header';
import ProductNikeList from '../Products/ProductNike';
import { Colors } from '../../../Theme/colors';

const ScreenHomeContainer = () => {
  return (
    <View style={{flex: 1}}>
      <HeaderApp
        isBack={false}
        onBack={() => {}}
        onFavorite={() => {}}
        titleHeader={TITLE_HEADER}
      />
      <View style={{flex: 1, backgroundColor:Colors.Gray61}}>
        <ProductNikeList />
      </View>
    </View>
  );
};

export default ScreenHomeContainer;
