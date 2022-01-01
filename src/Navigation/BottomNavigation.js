import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Scanqr from '../screens/Scanqr';
import Travellog from '../screens/Travellog';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={'Home'}
        component={Home}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name={'Scanqr'}
        component={Scanqr}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name={'Travellog'}
        component={Travellog}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
