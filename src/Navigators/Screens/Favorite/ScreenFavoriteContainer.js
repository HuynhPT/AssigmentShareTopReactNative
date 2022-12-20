import {View, Text} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

const ScreenFavoriteContainer = () => {
  const dispatch = useDispatch();
  const {dataFavorite} = useSelector(state => ({
    dataFavorite: state.favorite.dataFavorite,
  }));
  console.log(dataFavorite, 'dâddadd');
  return (
    <View>
      <Text>ScreenFavoriteContainer</Text>
    </View>
  );
};

export default ScreenFavoriteContainer;
