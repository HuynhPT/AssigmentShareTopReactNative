import {View, Text, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './ScreenCategoryStyles';
import {TITLE_HEADER} from '../../../Constants/Header';
import HeaderApp from '../../../Components/Header';
import {dataIcon} from '../../../Utils/fakeData';
import {TouchableOpacity} from 'react-native';
import {
  ProductAdidasList,
  ProductMLBList,
  ProductNikeList,
  ProductVansList,
} from '../Products';
import {useDispatch, useSelector} from 'react-redux';
import {setIsloading, setType} from '../../../Store/SliceState/Category';
import Loading from '../../../Components/Loading';
import {Colors} from '../../../Theme/colors';
import {NameScreen} from '../../Containers/App';
const ScreenCategory = ({navigation}) => {
  const [actions, setAction] = useState(1);
  const dispatch = useDispatch();
  const {type, isLoading} = useSelector(state => ({
    type: state.category.type,
    isLoading: state.category.isLoading,
  }));
  useEffect(() => {
    setTimeout(() => {
      dispatch(setIsloading(false));
    }, 2000);
  }, [type]);
  const OnchangeCategory = id => {
    try {
      if (id === 1) {
        dispatch(setType('NIKE'));
        dispatch(setIsloading(true));
        setAction(id);
      }
      if (id === 2) {
        dispatch(setType('MLB'));
        dispatch(setIsloading(true));
        setAction(id);
      }
      if (id === 3) {
        dispatch(setType('ADIDAS'));
        dispatch(setIsloading(true));
        setAction(id);
      }
      if (id === 4) {
        dispatch(setType('VANS'));
        dispatch(setIsloading(true));
        setAction(id);
      }
    } catch (error) {}
  };
  console.log(type, 'type');
  const onHandleInfomation = item => {
    navigation.navigate(NameScreen.SCREEN_INFO, item);
  };
  const onHandleFavorite = () => {
    navigation.navigate(NameScreen.SCREEN_FAVORITE);
  };
  return (
    <View style={styles.mContainer}>
      <HeaderApp
        isBack={false}
        onBack={() => {}}
        isFavorite={true}
        onFavorite={onHandleFavorite}
        titleHeader={TITLE_HEADER}
      />
      <Loading isLoading={isLoading} />
      <View style={styles.mContainer}>
        <View style={styles.mViewContainIcon}>
          {dataIcon.map((i, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.ViewIcon,
                {
                  backgroundColor:
                    actions === i?.id ? Colors.Black : Colors.White,
                },
              ]}
              onPress={() => {
                OnchangeCategory(i?.id);
              }}>
              <Image
                resizeMode="contain"
                source={i?.icon}
                style={[
                  styles.mImageIcon,
                  {tintColor: actions === i?.id ? Colors.White : Colors.Black},
                ]}
              />
              <Text
                style={[
                  styles.mTitleIcon,
                  {color: actions === i?.id ? Colors.White : Colors.Black},
                ]}>
                {i?.iconName}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        {type === 'NIKE' ? (
          <ProductNikeList onPress={onHandleInfomation} />
        ) : null}
        {type === 'MLB' ? (
          <ProductMLBList onPress={onHandleInfomation} />
        ) : null}
        {type === 'ADIDAS' ? (
          <ProductAdidasList onPress={onHandleInfomation} />
        ) : null}
        {type === 'VANS' ? (
          <ProductVansList onPress={onHandleInfomation} />
        ) : null}
      </View>
    </View>
  );
};

export default ScreenCategory;
