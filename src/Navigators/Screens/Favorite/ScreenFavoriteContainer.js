import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import HeaderApp from '../../../Components/Header';
import {TITLE_HEADER, TITLE_HEADER_FAVORITE} from '../../../Constants/Header';
import {styles} from './ScreenFavoriteStyle';
import Icon from 'react-native-vector-icons/Entypo';
import {Colors} from '../../../Theme/colors';
import {Sizes} from '../../../Theme/sizes';
import {TOAT_REMOVEFAVORITE} from '../../../Constants/Infomation';
import {ToastAndroid} from 'react-native';
import {removeFavorite} from '../../../Store/SliceState/Favorite';
import { NameScreen } from '../../Containers/App';

const ScreenFavoriteContainer = ({navigation}) => {
  const dispatch = useDispatch();
  const {dataFavorite} = useSelector(state => ({
    dataFavorite: state.favorite.dataFavorite,
  }));
  useEffect(() => {}, [dataFavorite]);
  console.log(dataFavorite, 'dataFavorite');
  const onBackPress = () => {
    navigation.goBack();
  };
  const onRemoveFavorite = id => {
    dispatch(removeFavorite(id));
    ToastAndroid.show(TOAT_REMOVEFAVORITE, 2000);
  };
  const onHandleInfomation = item => {
    navigation.navigate(NameScreen.SCREEN_INFO, item);
  };
  const renderItemFavorite = ({item, index}) => {
    return (
      <TouchableOpacity
        style={styles.mContainerItem}
        onPress={() => {
          onHandleInfomation(item);
        }}>
        <TouchableOpacity
          style={styles.mIcon}
          onPress={() => {
            onRemoveFavorite(item?.id);
          }}>
          <Icon name="trash" size={Sizes.size_18} color={Colors.Black} />
        </TouchableOpacity>
        <Image
          source={{uri: item?.image[0]}}
          style={styles.image}
          resizeMode={'contain'}
        />
        <Text style={styles.mText} numberOfLines={3}>{item?.name}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.mContainer}>
      <HeaderApp
        isBack={true}
        onBack={onBackPress}
        onFavorite={() => {}}
        titleHeader={TITLE_HEADER_FAVORITE}
      />
      <View style={styles.mContainer}>
        <FlatList
          numColumns={2}
          renderItem={renderItemFavorite}
          data={dataFavorite}
          extraData={dataFavorite}
          removeClippedSubviews={true}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{alignItems: 'flex-start'}}
        />
      </View>
    </View>
  );
};

export default ScreenFavoriteContainer;
