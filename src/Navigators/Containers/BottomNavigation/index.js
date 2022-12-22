import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ScreenHomeContainer from '../../Screens/Home/ScreenHomeContainer';
import ScreenCartContainer from '../../Screens/Cart/ScreenCartContainer';

import {Colors} from '../../../Theme/colors';
import Icon from 'react-native-vector-icons/Ionicons';

import {CART, CATEGORY, HOME, PERSON} from '../../../Constants/Header';
import ScreenCategory from '../../Screens/Category/ScreenCategory';
import {useSelector} from 'react-redux';
import ScreenInfomations from '../../Screens/Infomation/ScreenInfomationsContainer';
import ScreenPerson from '../../Screens/Persons/ScreenPerson';
const BottomNavigator = () => {
  const Bottom = createBottomTabNavigator();
  const {cart} = useSelector(state => ({
    cart: state.cart.buyCart,
  }));
  return (
    <Bottom.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {backgroundColor: Colors.Black},
        tabBarShowLabel: false,
      }}>
      <Bottom.Screen
        name={'Home'}
        component={ScreenHomeContainer}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.mIconLable}>
                <Icon
                  name={focused ? 'home' : 'home-outline'}
                  size={24}
                  color={focused ? Colors.WhiteSmoke : Colors.Gray51}
                />
                <Text
                  style={{
                    color: focused ? Colors.White : Colors.Gray51,
                    fontStyle: 'italic',
                  }}>
                  {HOME}
                </Text>
              </View>
            );
          },
        }}
      />
      <Bottom.Screen
        name={'Category'}
        component={ScreenCategory}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.mIconLable}>
                <Icon
                  name={focused ? 'albums' : 'albums-outline'}
                  size={24}
                  color={focused ? Colors.WhiteSmoke : Colors.Gray51}
                />
                <Text
                  style={{
                    color: focused ? Colors.White : Colors.Gray51,
                    fontStyle: 'italic',
                  }}>
                  {CATEGORY}
                </Text>
              </View>
            );
          },
        }}
      />
      <Bottom.Screen
        name={'Cart'}
        component={ScreenCartContainer}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.mIconLable}>
                <Icon
                  name={focused ? 'cart' : 'cart-outline'}
                  size={24}
                  color={focused ? Colors.WhiteSmoke : Colors.Gray51}
                />
                <Text
                  style={{
                    color: focused ? Colors.White : Colors.Gray51,
                    fontStyle: 'italic',
                  }}>
                  {CART}
                </Text>
              </View>
            );
          },
          tabBarBadge: cart?.length,
        }}
      />
      <Bottom.Screen
        name={'Person'}
        component={ScreenPerson}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.mIconLable}>
                <Icon
                  name={focused ? 'person' : 'person-outline'}
                  size={24}
                  color={focused ? Colors.WhiteSmoke : Colors.Gray51}
                />
                <Text style={{color: focused ? Colors.White : Colors.Gray51, fontStyle:'italic'}}>
                  {PERSON}
                </Text>
              </View>
            );
          },
        }}
      />
    </Bottom.Navigator>
  );
};

export default BottomNavigator;
const styles = StyleSheet.create({
  mIconLable: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
