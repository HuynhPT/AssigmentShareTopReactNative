import {StyleSheet, Text, View, Image, ToastAndroid} from 'react-native';
import React, {useState} from 'react';
import HeaderApp from '../../../Components/Header';
import {Sizes} from '../../../Theme/sizes';
import {Colors} from '../../../Theme/colors';
import InputNormal from '../../../Components/InputNormal';
import InputPassword from '../../../Components/InputPassWord';
import {ButtonNormal} from '../../../Components/Button';
import axios from 'axios';
import {NAME_API} from '../../../Config/ApiConfig';
const SignUp = ({navigation}) => {
  // Họ tên
  const [fistName, setFistName] = useState('');
  // Email
  const [email, setEmail] = useState('');
  // Số điện thoại
  const [phoneNumber, setPhoneNumber] = useState('');
  // Tài khoản
  const [userName, setUserName] = useState('');
  //Mật khẩu
  const [passWord, setPassWord] = useState('');
  //Mật khẩu nhập lại
  const [passWordConfirm, setPassWordConfirm] = useState('');
  const [checkUser, setCheckUser] = useState(false);
  const [checkPassWord, setCheckPassWord] = useState(false);
  const [checkPassWordConfirm, setCheckPassWordConfirm] = useState(false);
  const [showPassWord, setShowPassWord] = useState(true);
  const [showPassWordConfirm, setShowPassWordConfirm] = useState(true);
  console.log(fistName, 'Họ tên', email, 'Email', phoneNumber, 'Số điện thoại');

  function handleSignIn() {
    if (userName == '') {
      setCheckUser(true);
    }
    if (passWord == '') {
      setCheckPassWord(true);
    }
    if (passWordConfirm != passWord) {
      setCheckPassWordConfirm(true);
    } else {
      axios({
        url: `${NAME_API.LOCALHOST}` + `${NAME_API.ADD_ACCOUNT}`,
        method: 'POST',
        params: {
          name: fistName,
          email: email,
          passworld: passWordConfirm,
          phoneNumber: phoneNumber,
          adress: 'Ha Noi',
          userName: userName,
          avatar:
            'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1098.jpg',
        },
      })
        .then(res => {
          if (res.status == 201) {
            ToastAndroid.show(
              'Đăng ký tài khoản thành công',
              ToastAndroid.LONG,
            );
            navigation.goBack();
          }
        })
        .catch(e => {
          ToastAndroid.show('Đăng ký tài khoản thất bại', ToastAndroid.LONG);
        });
    }
  }
  return (
    <View style={styles.mContainer}>
      <HeaderApp
        isBack={true}
        onBack={() => {
          navigation.goBack();
        }}
        titleHeader={'Đăng ký tài khoản'}
      />

      <View style={styles.mBody}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={require('../../../Assets/images/logo.png')}
            resizeMode="contain"
            style={styles.mImage}
          />
          <InputNormal
            placeholder={'Họ Tên'}
            defaultValue={fistName}
            onChangeText={text => {
              setFistName(text);
            }}
            isCheck={false}
            titleAler={''}
          />
          <View style={{padding: Sizes.size_8}}></View>
          <InputNormal
            placeholder={'Email'}
            defaultValue={email}
            onChangeText={text => {
              setEmail(text);
            }}
            isCheck={false}
            titleAler={''}
          />
          <View style={{padding: Sizes.size_8}}></View>
          <InputNormal
            placeholder={'Số điện thoại'}
            defaultValue={phoneNumber}
            onChangeText={text => {
              setPhoneNumber(text);
            }}
            isCheck={false}
            titleAler={''}
          />
          <View style={{padding: Sizes.size_8}}></View>
          <InputNormal
            placeholder={'Tài khoản*'}
            defaultValue={userName}
            onChangeText={text => {
              setUserName(text);
              setCheckUser(false);
            }}
            isCheck={checkUser}
            titleAler={'Vui lòng nhập tài khoản'}
          />
          <View style={{padding: Sizes.size_8}}></View>
          <InputPassword
            placeholder={'Mật khẩu*'}
            onChangeText={text => {
              setPassWord(text);
              setCheckPassWord(false);
            }}
            secureTextEntry={showPassWord}
            isCheck={checkPassWord}
            onPress={() => {
              setShowPassWord(!showPassWord);
              setCheckPassWord(false);
            }}
            isCheckShowPass={showPassWord}
            titleAler={'Vui lòng nhập mật khẩu'}
            defaultValue={passWord}
          />
          <View style={{padding: Sizes.size_8}}></View>
          <InputPassword
            placeholder={'Nhập lại mật khẩu*'}
            onChangeText={text => {
              setPassWordConfirm(text);
              setCheckPassWordConfirm(false);
            }}
            secureTextEntry={showPassWordConfirm}
            isCheck={checkPassWordConfirm}
            onPress={() => {
              setShowPassWordConfirm(!showPassWordConfirm);
              setCheckPassWordConfirm(false);
            }}
            isCheckShowPass={showPassWordConfirm}
            titleAler={'Mật khẩu không khớp'}
            defaultValue={passWordConfirm}
          />
        </View>
        <View>
          <ButtonNormal titleButton={'Đăng ký'} onPress={handleSignIn} />
        </View>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  mContainer: {
    flex: 1,
  },
  mBody: {
    flex: 1,
    backgroundColor: Colors.white_bg,
    paddingHorizontal: Sizes.size_32,
  },
  mImage: {
    width: Sizes.size_140,
    height: Sizes.size_140,
  },
});
