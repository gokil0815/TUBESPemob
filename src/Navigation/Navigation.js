import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Spalsh from '../screens/Spalsh';
import Login from '../screens/Login';
import Register from '../screens/Register';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Scanqr from '../screens/Scanqr';
import Travellog from '../screens/Travellog';
import BottomNavigation from './BottomNavigation';
import account from '../screens/account';
import Hotel from '../screens/Hotel';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MyTheme = {
  dark: false,
  colors: {
    primary: '#2C9637',
    background: 'rgb(242, 242, 242)',
    card: '#2C9637',
    text: 'white',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};
export default function Navigation() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="Spalsh"
          component={Spalsh}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Scanqr"
          component={Scanqr}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="account"
          component={account}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Travellog" component={Travellog} />
        <Stack.Screen name="Hotel" component={Hotel} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
