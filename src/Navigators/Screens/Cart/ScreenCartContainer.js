import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import HeaderApp from '../../../Components/Header';
import {TITLE_HEADER, TITLE_HEADER_CART} from '../../../Constants/Header';
import {useDispatch, useSelector} from 'react-redux';
import {styles} from './ScreenCartStyle';
import PlusMunis from '../../../Components/Cart';
import {Sizes} from '../../../Theme/sizes';
import Icon from 'react-native-vector-icons/Entypo';
import {Colors} from '../../../Theme/colors';
import {ToastAndroid} from 'react-native';
import {TOAST_MESREMOVE, TOAT_REMOVEFAVORITE} from '../../../Constants/Infomation';
import { removeCart } from '../../../Store/SliceState/Cart';
const ScreenCartContainer = () => {
  /**
   * Fomat giá tiền
   *  theo kiểu VND
   * @link https://vntalking.com/cach-dinh-dang-tien-te-trong-javascript.html
   * Tham khảo link trên
   */
  const formatter = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });

  const dispatch = useDispatch();
  const {dataCart} = useSelector(state => ({
    dataCart: state.cart.buyCart,
  }));
  const onRemoveCart = id => {
    dispatch(removeCart(id));
    ToastAndroid.show(TOAST_MESREMOVE, 2000);
  };
  const renderItemCart = ({item}) => {
    return (
      <View style={styles.mItemContainer}>
        <TouchableOpacity
          style={styles.mIcon}
          onPress={() => {
            onRemoveCart(item?.id);
          }}>
          <Icon name="trash" size={Sizes.size_24} color={Colors.Black} />
        </TouchableOpacity>
        <View style={styles.mImage}>
          <Image
            source={{uri: item?.avatar}}
            style={{width: Sizes.size_100, height: Sizes.size_100}}
            resizeMode="contain"
          />
          <View style={styles.mViewText}>
            <Text style={styles.mTextName}>{item?.name}</Text>
            <Text style={styles.mPrice}>{formatter.format(item?.price)}</Text>
          </View>
        </View>

        <View style={styles.mVSizeColor}>
          <Text style={styles.mSize}>{'Size: ' + item?.size}</Text>
          <PlusMunis />
        </View>
      </View>
    );
  };
  return (
    <View style={styles.mContainer}>
      <HeaderApp
        isBack={false}
        onBack={() => {}}
        onFavorite={() => {}}
        titleHeader={TITLE_HEADER_CART}
      />
      <View style={styles.mContainer}>
        <FlatList
          data={dataCart}
          extraData={dataCart}
          renderItem={renderItemCart}
          removeClippedSubviews={true}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default ScreenCartContainer;
