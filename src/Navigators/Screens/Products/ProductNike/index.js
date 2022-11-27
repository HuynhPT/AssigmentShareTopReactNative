import {View, Text, FlatList, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NAME_API} from '../../../../Config/ApiConfig';
import axios from 'axios';
import {Colors} from '../../../../Theme/colors';

const ProductNikeList = () => {
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
        url: `${NAME_API.LOCALHOST}` + `${NAME_API.GET_PRODUCT_NIKE}`,
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
  const RenderItemList = ({item}) => {
    return (
      <View
        style={{
          height: 120,
          backgroundColor: Colors.white_bg,
          marginHorizontal: 16,
          marginVertical: 12,
          borderRadius: 30,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 16,
          }}>
          <Image
            source={{uri: item?.image[0]}}
            resizeMode="cover"
            style={{width: 100, height: 100, borderRadius: 20}}
          />
          <View>
            
            <Text style={{maxWidth:250}}>{item?.name}</Text>
            <Text>{item?.price}</Text>
            <View style={{flexDirection: 'row'}}>
              {item?.size.map(i => (
                <View style={{padding: 5}}>
                  <Text>{i}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View>
      <FlatList
        data={dataProduct}
        renderItem={RenderItemList}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default ProductNikeList;
