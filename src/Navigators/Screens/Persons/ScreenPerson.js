import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import HeaderApp from '../../../Components/Header';
import {TITLE_HEADER_PERSON} from '../../../Constants/Header';
import {Dataintroduce} from '../../../Utils/fakeData';
import {styles} from './ScreenPersonStyle';
import {Sizes} from '../../../Theme/sizes';
import {ScrollView} from 'react-native';
import {Colors} from '../../../Theme/colors';
import {NameScreen} from '../../Containers/App';

const ScreenPerson = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: Colors.White}}>
      <HeaderApp
        isBack={false}
        onBack={() => {}}
        onFavorite={() => {}}
        titleHeader={TITLE_HEADER_PERSON}
      />
      <ScrollView
        style={{flex: 1, padding: Sizes.size_24, marginBottom: Sizes.size_50}}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.dataTitleHeader}>
          {Dataintroduce?.header_title}
        </Text>
        <Text style={styles.dataTitleBody}>{Dataintroduce?.body_title}</Text>
        <Image
          source={require('../../../Assets/images/logo.png')}
          style={{
            width: Sizes.size_230,
            height: Sizes.size_140,
            alignSelf: 'center',
          }}
          resizeMode="contain"
        />
        <Text style={styles.dataTitleHeader}>
          {Dataintroduce?.header_title_a}
        </Text>
        <Text style={styles.dataTitleBody}>{Dataintroduce?.body_title_a}</Text>
        <Text style={styles.dataTitleBody}>
          {Dataintroduce?.body_title_a_2}
        </Text>
        <Image
          source={require('../../../Assets/images/img1.png')}
          style={{
            width: Sizes.size_230,
            height: Sizes.size_140,
            alignSelf: 'center',
          }}
          resizeMode="contain"
        />
        <Text style={styles.dataTitleHeader}>
          {Dataintroduce?.header_title_b}
        </Text>
        <Text style={styles.dataTitleBody}>{Dataintroduce?.body_title_b}</Text>
        <Image
          source={require('../../../Assets/images/img2.png')}
          style={{
            width: Sizes.size_200,
            height: Sizes.size_150,
            alignSelf: 'center',
          }}
          resizeMode="contain"
        />
        <Text style={styles.dataTitleHeader}>
          {Dataintroduce?.header_title_c}
        </Text>
        <Text style={styles.dataTitleBody}>{Dataintroduce?.body_title_c}</Text>
        <Image
          source={require('../../../Assets/images/img3.png')}
          style={{
            width: Sizes.size_250,
            height: Sizes.size_150,
            alignSelf: 'center',
          }}
          resizeMode="contain"
        />
        <Text style={styles.dataTitleHeader}>
          {Dataintroduce?.header_title_d}
        </Text>
        <Text style={styles.dataTitleBody}>{Dataintroduce?.body_title_d}</Text>
      </ScrollView>
      <TouchableOpacity
        style={styles.btnCart}
        onPress={() => {
          navigation.navigate(NameScreen.SCREEN_LOGIN);
        }}>
        <Text style={styles.Exit}>{'Đăng Xuất'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ScreenPerson;
