import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import ScreenHomeContainer from '../../Screens/Home/ScreenHomeContainer';
import SplashScreen from '../../Screens/Splash/SplashScreenContainer';
import LoginContainer from '../../Screens/Login/LoginContainer';
import BottomNavigator from '../BottomNavigation';
export const NameScreen = {
  SCREEN_MAIN: 'Main',
  SCREEN_SPLASH: 'Splash',
  SCREEN_LOGIN: 'Login',
};
const AppContainer = () => {
  //Khởi tạo
  const Native_Stack = createNativeStackNavigator();
  /**   Các thư viện mà chúng tôi đã cài đặt cho đến nay là các khối xây dựng và nền tảng được chia
   * sẻ cho các trình điều hướng và mỗi trình điều hướng trong React Navigation sống trong thư viện
   *  riêng của nó. Để sử dụng trình điều hướng ngăn xếp gốc, chúng ta cần cài đặt
   * @import @react-navigationnative-stack:
   * @flow @https://reactnavigation.org/docs/getting-started
   */

  return (
    <NavigationContainer>
      <Native_Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={NameScreen.SCREEN_SPLASH}>
        <Native_Stack.Screen
          name={NameScreen.SCREEN_MAIN}
          component={BottomNavigator}
        />
        <Native_Stack.Screen
          name={NameScreen.SCREEN_SPLASH}
          component={SplashScreen}
        />
        <Native_Stack.Screen
          name={NameScreen.SCREEN_LOGIN}
          component={LoginContainer}
        />
      </Native_Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;
