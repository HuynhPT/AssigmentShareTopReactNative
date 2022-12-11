import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';

const ItemHeaderComponent = ({sales, name, price, priceSales, imgUri}) => {
  /**
   * Fomat giá tiềntheo kiểu VND
   * @link https://vntalking.com/cach-dinh-dang-tien-te-trong-javascript.html
   * Tham khảo link trên
   */
  const formatter = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });
  return (
    <TouchableOpacity style={styles.mContainer}>
      <View>
        <View style={styles.sales}>
          <Text style={styles.titleSale}>{sales}</Text>
        </View>
        <View style={styles.mText}>
          <Text style={styles.mPrice}>{formatter.format(price)}</Text>
          <Text style={styles.mPriceSale}>{formatter.format(priceSales)}</Text>
          <Text numberOfLines={1} style={styles.mTitle}>
            {name}
          </Text>
        </View>
      </View>
      <View style={styles.mImage}>
        <Image
          source={{uri: imgUri}}
          resizeMode="contain"
          style={styles.image}
        />
      </View>
    </TouchableOpacity>
  );
};

export default ItemHeaderComponent;
