import {
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
  Share,
} from 'react-native';
import React, {useState} from 'react';
import HeaderApp from '../../../Components/Header';
import {TITLE_HEADER} from '../../../Constants/Header';
import Icon from 'react-native-vector-icons/AntDesign';
import {Colors} from '../../../Theme/colors';
import {styles} from './ScreenInfomationStyle';
import {Sizes} from '../../../Theme/sizes';
import {
  ADD_TO_CART,
  COLOR,
  SHARE,
  SIZE,
  TOAST_FAVORITE,
  TOAST_MES,
  TOAT_REMOVEFAVORITE,
} from '../../../Constants/Infomation';
import {ToastAndroid} from 'react-native';
import {NameScreen} from '../../Containers/App';
import {useDispatch, useSelector} from 'react-redux';
import {addFavorite, removeFavorite} from '../../../Store/SliceState/Favorite';
import {setBuyCart} from '../../../Store/SliceState/Cart';
const {width: screenWidth} = Dimensions.get('window');
const ScreenInfomations = ({route, navigation}) => {
  const [stateColor, setStateColor] = useState('');
  const [stateSize, setStateSize] = useState('');

  const dataInfomation = route.params;
  const dispatch = useDispatch();
  const {dataFavorite, databuyCart} = useSelector(state => ({
    dataFavorite: state.favorite.dataFavorite,
    databuyCart: state.cart.buyCart,
  }));
  const onBackPress = () => {
    navigation.goBack();
  };
  const hadleScroll = e => {
    // có thể dùng hoặc không
    // console.log(e._dispatchInstances);
  };
  console.log(dataFavorite, databuyCart, 'redux');
  // add dữ liệu vào mục yêu thích
  /**
   * Hiển thị toast thông báo hệ thống
   * @import {ToastAndroid} from 'react-native'
   */
  const onHandleFavorite = () => {
    if (
      dataFavorite.filter(i => i.id == dataInfomation?.id).map(i => i.id)
        .length > 0
    ) {
      dispatch(removeFavorite(dataInfomation?.id));
      ToastAndroid.show(TOAT_REMOVEFAVORITE, 2000);
      console.log('true');
    } else {
      dispatch(addFavorite(dataInfomation));
      ToastAndroid.show(TOAST_FAVORITE, 2000);
      console.log('false');
    }
  };

  /**
   * Chia sẻ lin ảnh hoặc thông tín sản phẩm tuỳ thích
   * @import {Share} from 'react-native
   */
  const onHandleShare = () => {
    Share.share(
      {
        title: SHARE,
        message: dataInfomation?.image[0],
      },
      {
        tintColor: Colors.RED,
      },
    );
  };
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

  const onSelectColor = i => {
    console.log(i, 'color');
    setStateColor(i);
  };
  const onSelectSize = i => {
    console.log(i, 'size');
    setStateSize(i);
  };
  const onHandleGoToCart = () => {
    if (stateColor != '' && stateSize != '') {
      dispatch(
        setBuyCart({
          id: Math.random(),
          avatar: dataInfomation?.image[0],
          name: dataInfomation?.name,
          price: dataInfomation?.price,
          size: stateSize,
          color: stateColor,
        }),
      );
      ToastAndroid.show(TOAST_MES, 2000);
      navigation.navigate('Cart');
    }
  };
  return (
    <View style={styles.mContainer}>
      <HeaderApp
        isBack={true}
        onBack={onBackPress}
        onFavorite={() => {}}
        titleHeader={TITLE_HEADER}
      />
      <ScrollView
        style={styles.mContainer}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={Sizes.size_16}>
        <View style={styles.viewFavorite}>
          <TouchableOpacity onPress={onHandleFavorite}>
            <Icon
              name={
                dataFavorite
                  .filter(i => i.id == dataInfomation?.id)
                  .map(i => i.id).length > 0
                  ? 'heart'
                  : 'hearto'
              }
              size={Sizes.size_30}
              color={Colors.Gray51}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={onHandleShare}>
            <Icon name="link" size={Sizes.size_30} color={Colors.Gray51} />
          </TouchableOpacity>
        </View>
        <View style={{}}>
          <ScrollView
            horizontal={true}
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={Sizes.size_16}
            onScroll={e => {
              hadleScroll(e);
            }}>
            {dataInfomation?.image.map((i, index) => (
              <View key={index}>
                <Image
                  source={{uri: i}}
                  style={{width: screenWidth, height: Sizes.size_300}}
                  resizeMode="cover"
                />
              </View>
            ))}
          </ScrollView>
        </View>
        <View style={styles.mArrow}>
          <View style={styles.arrowLeft}>
            <Icon name="caretleft" size={Sizes.size_24} />
          </View>
          <View style={styles.arrowRight}>
            <Icon name="caretright" size={Sizes.size_24} />
          </View>
        </View>
        <Text style={styles.mTextCLS}>{COLOR}</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {dataInfomation?.colors.map((i, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.mViewColor,
                {
                  borderColor:
                    stateColor == i.toString() ? Colors.Black : Colors.Gray41,
                },
              ]}
              onPress={() => {
                onSelectColor(i);
              }}>
              <Image
                source={require('../../../Assets/images/icons_vans.png')}
                style={{
                  tintColor: stateColor == i.toString() ? Colors.Black : i,
                  width: Sizes.size_45,
                  height: Sizes.size_45,
                }}
                resizeMode="contain"
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
        <Text style={styles.mTextCLS}>{SIZE}</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {dataInfomation?.size.map((i, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.mSize,
                {
                  borderColor:
                    stateSize == i.toString() ? Colors.Black : Colors.Gray41,
                },
              ]}
              onPress={() => {
                onSelectSize(i);
              }}>
              <Text
                style={[
                  styles.titleSize,
                  {
                    color:
                      stateSize == i.toString() ? Colors.Black : Colors.Gray21,
                    fontWeight: stateSize == i.toString() ? 'bold' : '400',
                  },
                ]}>
                {i}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <View style={styles.mBodyView}>
          <View style={{width: '100%', justifyContent: 'center'}}>
            <Text style={styles.mtitleName}>{dataInfomation?.name}</Text>
          </View>

          <View style={styles.mStar}>
            <Icon name="star" size={Sizes.size_24} color={Colors.RED} />
            <Icon name="star" size={Sizes.size_24} color={Colors.RED} />
            <Icon name="star" size={Sizes.size_24} color={Colors.RED} />
            <Icon name="star" size={Sizes.size_24} color={Colors.RED} />
            <Icon name="staro" size={Sizes.size_24} color={Colors.RED} />
          </View>
          <Text style={styles.titleInfo}>{dataInfomation?.info}</Text>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.btnCart} onPress={onHandleGoToCart}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icon name="shoppingcart" color={Colors.White} size={Sizes.size_30} />
          <Text style={styles.titlePrice}>{ADD_TO_CART}</Text>
        </View>
        <View style={{}}>
          <Text style={styles.titlePriceSale}>
            {formatter.format(dataInfomation?.price)}
          </Text>
          <Text style={styles.titlePrice}>
            {formatter.format(dataInfomation?.price)}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ScreenInfomations;
