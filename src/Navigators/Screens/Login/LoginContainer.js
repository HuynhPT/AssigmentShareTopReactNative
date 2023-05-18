import {
  View,
  Text,
  Image,
  ToastAndroid,
  TouchableWithoutFeedback,
  BackHandler,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './LoginStyle';
import InputNormal from '../../../Components/InputNormal';
import InputPassword from '../../../Components/InputPassWord';
import {useDispatch, useSelector} from 'react-redux';
import {
  getAccount,
  setIsCheck,
  setIsCheckPass,
  setIsCheckRemember,
  setIsCheckUser,
  setIsLoading,
} from '../../../Store/SliceState/Login';
import {
  ALER_PASSWORD,
  ALER_USERNAME,
  FACEBOOK,
  GOOGLE,
  LOGIN,
  PASSWORD,
  PLAHODER_PASSWORD,
  PLAHODER_USERNAME,
  REMEMBER,
  SIGNIN,
  USER_NAME,
} from '../../../Constants/Login';
import {ButtonNormal, ButtonSocial} from '../../../Components/Button';
import {Colors} from '../../../Theme/colors';
import {VERSION_APP} from '../../../Utils/version';
import Loading from '../../../Components/Loading';
import {NameScreen} from '../../Containers/App';
import Icon from 'react-native-vector-icons/Ionicons';
import {Sizes} from '../../../Theme/sizes';
import {setIsloading} from '../../../Store/SliceState/Home';
import axios from 'axios';
import {NAME_API} from '../../../Config/ApiConfig';

const LoginContainer = ({navigation}) => {
  //Khởi tạo state dùng trong component
  const [valUserName, setValUserName] = useState('');
  const [valPassWord, setValPassWord] = useState('');

  const [isAccount, setIsAccount] = useState([]);
  // validate password
  // Bao gồm cả chữ hoa, chữ thường, số, ký tự đặc biệt và ít nhất 8 kỹ tự
  const validatePass =
    '^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}';
  const BackButton = () => {
    BackHandler.exitApp();
    return true;
  };
  useEffect(() => {
    dispatch(setIsLoading(false));
    BackHandler.addEventListener('hardwareBackPress', BackButton);
    axios({
      url: `${NAME_API.LOCALHOST}` + `${NAME_API.GET_ACCOUNT}`,
      method: 'GET',
    }).then(res => {
      setIsAccount(res.data);
    });
  }, []);

  const onHandleChangeTextUser = text => {
    setValUserName(text);
    dispatch(setIsCheckUser(false));
  };
  const onHandleChangeTextPassWord = text => {
    setValPassWord(text);
    dispatch(setIsCheckPass(false));
  };
  const dispatch = useDispatch();
  const {isCheck, isLoading, isCheckUser, isCheckPass, isCheckRemember} =
    useSelector(state => ({
      isCheck: state.loginState.isCheck,
      isLoading: state.loginState.isLoading,
      isCheckUser: state.loginState.isCheckUser,
      isCheckPass: state.loginState.isCheckPass,
      isCheckRemember: state.loginState.isCheckRemember,
    }));
  // check show pass
  const onHandleCheckShow = () => {
    dispatch(setIsCheck(!isCheck));
  };

  console.log(
    isAccount
      .filter(item => item.userName == 'UserLogin')
      .map(item => item.passworld)
      .toString() == '123456aA@',
    'loc',
  );
  // login account
  const onHandleLogin = () => {
    if (isCheckRemember === true) {
      setTimeout(() => {
        navigation.navigate(NameScreen.SCREEN_MAIN);
        //loading login
        dispatch(setIsLoading(false));
        //loading Home
        dispatch(setIsloading(true));
      }, 3000);
      dispatch(setIsLoading(true));
    } else {
      if (valUserName !== '') {
        if (valPassWord !== '') {
          if (
            isAccount
              .filter(item => item.userName == valUserName)
              .map(item => item.userName)
              .toString() == valUserName
          ) {
            if (
              isAccount
                .filter(item => item.userName == valUserName)
                .map(item => item.passworld)
                .toString() == valPassWord
            ) {
              setTimeout(() => {
                navigation.navigate(NameScreen.SCREEN_MAIN);
                //loading login
                dispatch(setIsLoading(false));
                //loading Home
                dispatch(setIsloading(true));
              }, 3000);
              dispatch(setIsLoading(true));
              dispatch(setIsCheckPass(false));
            } else {
              dispatch(setIsCheckPass(true));
            }
          } else {
            dispatch(setIsCheckUser(true));
          }
        } else {
          dispatch(setIsCheckPass(true));
        }
      } else {
        dispatch(setIsCheckUser(true));
      }
    }
  };
  // login facebook
  const onHandleLoginFacebook = () => {
    ToastAndroid.show('Tính năng đang phát triển', ToastAndroid.SHORT);
  };
  //login google
  const onHandleLoginGoogle = () => {
    ToastAndroid.show('Tính năng đang phát triển', ToastAndroid.SHORT);
  };

  const onHandleCheckremember = () => {
    if (valUserName !== '' || valPassWord !== '') {
      if (
        valUserName === isAccount.userName ||
        valPassWord === isAccount.passWord
      ) {
        dispatch(setIsCheckRemember(!isCheckRemember));
      }
    }
  };
  // console.log(valUserName, 'user');
  // console.log(valPassWord, 'pass');

  // console.log(isLoading, 'loading');

  // console.log(isCheckUser, 'check user');

  // console.log(isCheckPass, 'checkpass');

  // console.log(isAccount, 'account');

  // console.log(isCheckRemember, 'checkRemember');
  return (
    <View style={styles.mLoginContainer}>
      <View style={styles.mTitleContainer}>
        <Text style={styles.mTitle}>{LOGIN}</Text>
      </View>

      <Image
        source={require('../../../Assets/images/logo.png')}
        resizeMode="contain"
        style={styles.mImage}
      />

      <View style={styles.mLoginBody}>
        <View style={styles.mText}>
          <Text style={styles.text}>{USER_NAME}</Text>
        </View>
        <InputNormal
          placeholder={PLAHODER_USERNAME}
          onChangeText={onHandleChangeTextUser}
          isCheck={isCheckUser}
          titleAler={ALER_USERNAME}
          defaultValue={
            isCheckRemember === true ? isAccount?.userName : valUserName
          }
        />
        <View style={styles.mText}>
          <Text style={styles.text}>{PASSWORD}</Text>
        </View>
        <InputPassword
          placeholder={PLAHODER_PASSWORD}
          onChangeText={onHandleChangeTextPassWord}
          secureTextEntry={isCheck}
          isCheck={isCheckPass}
          onPress={onHandleCheckShow}
          isCheckShowPass={isCheck}
          titleAler={ALER_PASSWORD}
          defaultValue={
            isCheckRemember === true ? isAccount?.passWord : valPassWord
          }
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: Sizes.size_16,
          }}>
          <View style={styles.mRemember}>
            <TouchableWithoutFeedback onPress={onHandleCheckremember}>
              {!isCheckRemember ? (
                <Icon name="checkbox-outline" size={Sizes.size_24} />
              ) : (
                <Icon name="checkbox" size={Sizes.size_24} />
              )}
            </TouchableWithoutFeedback>
            <Text style={styles.mTextRemember}>{REMEMBER}</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(NameScreen.SCREEN_SIGNUP);
            }}>
            <Text
              style={[
                styles.mTextRemember,
                {color: Colors.Blue, textDecorationLine: 'underline'},
              ]}>
              {SIGNIN}
            </Text>
          </TouchableOpacity>
        </View>

        <ButtonNormal titleButton={LOGIN} onPress={onHandleLogin} />
        <View style={styles.mButtonSocial}>
          <ButtonSocial
            titleButton={FACEBOOK}
            onPress={onHandleLoginFacebook}
            borderColor={Colors.Blue}
            backgroundColor={Colors.Blue}
            textColor={Colors.White}
            iconTitle={'logo-facebook'}
            iconColor={Colors.WhiteSmoke}
          />
          <ButtonSocial
            titleButton={GOOGLE}
            onPress={onHandleLoginGoogle}
            borderColor={Colors.Google}
            backgroundColor={Colors.Google}
            textColor={Colors.White}
            iconTitle={'logo-google'}
            iconColor={Colors.WhiteSmoke}
          />
        </View>
      </View>
      <View style={styles.mVersion}>
        <Text style={styles.mTextVersion}>{'V ' + VERSION_APP}</Text>
      </View>
      <Loading isLoading={isLoading} />
    </View>
  );
};

export default LoginContainer;
//checkbox
