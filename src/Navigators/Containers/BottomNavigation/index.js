import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ScreenHomeContainer from '../../Screens/Home/ScreenHomeContainer';
import ScreenCartContainer from '../../Screens/Cart/ScreenCartContainer';

import {Colors} from '../../../Theme/colors';
import Icon from 'react-native-vector-icons/Ionicons';

import {CART, CATEGORY, HOME, PERSON} from '../../../Constants/Header';
import ScreenCategory from '../../Screens/Category/ScreenCategory';
const BottomNavigator = () => {
  const Bottom = createBottomTabNavigator();
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
                <Text style={{color: focused ? Colors.White : Colors.Gray51}}>
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
                <Text style={{color: focused ? Colors.White : Colors.Gray51}}>
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
                <Text style={{color: focused ? Colors.White : Colors.Gray51}}>
                  {CART}
                </Text>
              </View>
            );
          },
        }}
      />
      <Bottom.Screen
        name={'Person'}
        component={ScreenHomeContainer}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.mIconLable}>
                <Icon
                  name={focused ? 'person' : 'person-outline'}
                  size={24}
                  color={focused ? Colors.WhiteSmoke : Colors.Gray51}
                />
                <Text style={{color: focused ? Colors.White : Colors.Gray51}}>
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
