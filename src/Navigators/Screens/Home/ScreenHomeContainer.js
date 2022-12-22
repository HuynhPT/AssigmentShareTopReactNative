import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import HeaderApp from '../../../Components/Header';
import {TITLE_HEADER, TITLE_HEADER_HOME} from '../../../Constants/Header';
import ProductNikeList from '../Products/ProductNike';
import axios from 'axios';
import {NAME_API} from '../../../Config/ApiConfig';
import {Image} from 'react-native';
import {FlatList} from 'react-native';
import {ItemHeaderLeft, ItemHeaderRight} from './ItemComponents';
import {dataIcon} from '../../../Utils/fakeData';
import {styles} from './ScreenHomeStyle';
import {useDispatch, useSelector} from 'react-redux';
import {setIsloading} from '../../../Store/SliceState/Home';
import Loading from '../../../Components/Loading';
import {NameScreen} from '../../Containers/App';
const {width: screenWidth} = Dimensions.get('window');
const ScreenHomeContainer = ({navigation}) => {
  const [dataBanner, setDataBanner] = useState([]);
  const [dataNike, setDataNike] = useState([]);
  const [dataMLB, setDataMLB] = useState([]);
  const [dataAdidas, setDataAdidas] = useState([]);
  const [dataVans, setDataVans] = useState([]);
  const indexScroll = useRef(null);
  const dispatch = useDispatch();
  const {isLoading} = useSelector(state => ({
    isLoading: state.home.isLoading,
  }));
  useEffect(() => {
    setTimeout(() => {
      dispatch(setIsloading(false));
    }, 2000);
  }, []);
  useEffect(() => {
    try {
      // chạy vòng lặp banner
      if (dataBanner?.length > 0) {
        let index = 0;
        setInterval(() => {
          indexScroll?.current?.scrollTo({
            x: index * screenWidth,
            y: 0,
            animated: true,
          });
          index += 1;
          if (index === dataBanner.length) {
            index = 0;
          }
        }, 3000);
      }
    } catch (error) {}
  }, [dataBanner]);
  useEffect(() => {
    try {
      //get Banner
      axios({
        method: 'GET',
        url: `${NAME_API.LOCALHOST}` + `${NAME_API.GET_BANNER}`,
      })
        .then(res => {
          console.log(res.data, 'dataBanner');
          setDataBanner(res.data);
        })
        .catch(err => {
          console.log(err);
        });
      // get product Nike
      axios({
        method: 'GET',
        url: `${NAME_API.LOCALHOST}` + `${NAME_API.GET_PRODUCT_NIKE}`,
        params: {id: 6},
      })
        .then(res => {
          console.log(res.data, 'dataNike');
          setDataNike(res.data);
        })
        .catch(err => {
          console.log(err);
        });
      // getProduct MLB
      axios({
        method: 'GET',
        url: `${NAME_API.LOCALHOST}` + `${NAME_API.GET_PRODUCT_MLB}`,
        params: {id: 9},
      })
        .then(res => {
          console.log(res.data, 'dataMlb');
          setDataMLB(res.data);
        })
        .catch(err => {
          console.log(err);
        });
      //getProduct Vans
      axios({
        method: 'GET',
        url: `${NAME_API.LOCALHOST}` + `${NAME_API.GET_PRODUCT_VANS}`,
        params: {id: 4},
      })
        .then(res => {
          console.log(res.data, 'dataVans');
          setDataVans(res.data);
        })
        .catch(err => {
          console.log(err);
        });
      //getProduct Adidas
      axios({
        method: 'GET',
        url: `${NAME_API.LOCALHOST}` + `${NAME_API.GET_PRODUCT_ADIDAS}`,
        params: {id: 7},
      })
        .then(res => {
          console.log(res.data, 'dataAdidas');
          setDataAdidas(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
  const onHandleFavorite = () => {
    navigation.navigate(NameScreen.SCREEN_FAVORITE);
  };
  const onHandleInfomation = item => {
    navigation.navigate(NameScreen.SCREEN_INFO, item);
  };
  const onHandleGoToCategory = () => {
    navigation.navigate('Category');
  };
  // product saleoff
  const ListHeaderComponent = () => {
    return (
      <View style={{width: '100%'}}>
        <ScrollView
          horizontal
          pagingEnabled
          contentContainerStyle={{
            width: screenWidth * dataBanner.length,
            height: 100,
            marginTop: 12,
          }}
          ref={indexScroll}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}>
          {dataBanner.map((item, index) => (
            <View key={index}>
              <Image
                source={{uri: item?.image}}
                style={{width: screenWidth, height: 110}}
                resizeMode="cover"
              />
            </View>
          ))}
        </ScrollView>
        {dataNike.map((item, index) => (
          <ItemHeaderLeft
            onPress={() => {
              onHandleInfomation(item);
            }}
            imgUri={item?.image[0]}
            name={item?.name}
            price={item?.price}
            priceSales={parseInt(item?.price) - parseInt(item?.price) * 0.2}
            sales={'20% OFF'}
            key={index}
          />
        ))}

        {dataMLB.map((item, index) => (
          <ItemHeaderRight
            onPress={() => {
              onHandleInfomation(item);
            }}
            imgUri={item?.image[0]}
            name={item?.name}
            price={item?.price}
            priceSales={parseInt(item?.price) - parseInt(item?.price) * 0.3}
            sales={'30% OFF'}
            key={index}
          />
        ))}
        {dataVans.map((item, index) => (
          <ItemHeaderLeft
            onPress={() => {
              onHandleInfomation(item);
            }}
            imgUri={item?.image[0]}
            name={item?.name}
            price={item?.price}
            priceSales={parseInt(item?.price) - parseInt(item?.price) * 0.15}
            sales={'15% OFF'}
            key={index}
          />
        ))}

        {dataAdidas.map((item, index) => (
          <ItemHeaderRight
            onPress={() => {
              onHandleInfomation(item);
            }}
            imgUri={item?.image[0]}
            name={item?.name}
            price={item?.price}
            priceSales={parseInt(item?.price) - parseInt(item?.price) * 0.25}
            sales={'25% OFF'}
            key={index}
          />
        ))}
        <View style={styles.mViewContainIcon}>
          {dataIcon.map((i, index) => (
            <TouchableOpacity
              key={index}
              style={styles.ViewIcon}
              onPress={onHandleGoToCategory}>
              <Image
                resizeMode="contain"
                source={i.icon}
                style={styles.mImageIcon}
              />
              <Text style={styles.mTitleIcon}>{i.iconName}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  };
  return (
    <View style={styles.mContainer}>
      <HeaderApp
        isBack={false}
        onBack={() => {}}
        isFavorite={true}
        onFavorite={onHandleFavorite}
        titleHeader={TITLE_HEADER_HOME}
      />
      <View style={styles.mFlatlist}>
        <FlatList
          data={[]}
          renderItem={null}
          keyExtractor={item => `${item.id}`}
          showsVerticalScrollIndicator={false}
          removeClippedSubviews={true}
          ListHeaderComponent={ListHeaderComponent}
          ListFooterComponent={() => (
            <ProductNikeList onPress={onHandleInfomation} />
          )}
        />
        {/* <ProductNikeList /> */}
      </View>
      <Loading isLoading={isLoading} />
    </View>
  );
};

export default ScreenHomeContainer;
