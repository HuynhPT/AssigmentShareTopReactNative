import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NAME_API} from '../../../../Config/ApiConfig';
import axios from 'axios';
import {Colors} from '../../../../Theme/colors';
import {styles} from './styles';

const ProductAdidasList = ({onPress}) => {
  const [dataProduct, setDataProduct] = useState([]);
  /**
   * call api bằng axios và useEffect
   * @import import axios from 'axios';
   * @npm $ yarn add axios hoặc $ npm install axios
   */
  useEffect(() => {
    try {
      axios({
        method: 'GET',
        url: `${NAME_API.LOCALHOST}` + `${NAME_API.GET_PRODUCT_ADIDAS}`,
        // params:5,
      })
        .then(res => {
          console.log(res.data, 'data');
          setDataProduct(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  /**
   * Fomat giá tiềntheo kiểu VND
   * @link https://vntalking.com/cach-dinh-dang-tien-te-trong-javascript.html
   * Tham khảo link trên
   */
  const formatter = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });
  const RenderItemList = ({item}) => {
    return (
      <TouchableOpacity style={styles.mContainer}
      onPress={()=>{onPress(item)}}
      >
        <View style={styles.mBody}>
          <Image
            source={{uri: item?.image[0]}}
            resizeMode="contain"
            style={styles.mImage}
          />
          <View style={styles.mViewText}>
            <Text style={styles.mTextImage} numberOfLines={1}>
              {item?.name}
            </Text>
            <Text style={styles.mPrice}>{formatter.format(item?.price)}</Text>
            <View style={{flexDirection: 'row'}}>
              {item?.size.map((i, index) => (
                <View key={index} style={styles.mSize}>
                  <Text style={styles.mTextSize}>{i}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{flex:1}}>
      <FlatList
        data={dataProduct}
        renderItem={RenderItemList}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default ProductAdidasList;
