import React, {useState} from 'react';
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
import auth from '@react-native-firebase/auth';
import Beach from '../screens/Beach';
import Souvernir from '../screens/Souvernir';
import Food from '../screens/Food';
import Hospital from '../screens/Hospital';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const LoginStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();

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

function LoginScreen() {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen
        name="Spalsh"
        component={Spalsh}
        options={{headerShown: false}}
      />
      <LoginStack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <LoginStack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
    </LoginStack.Navigator>
  );
}

function HomeScreen() {
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen
        name="Scanqr"
        component={Scanqr}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="account"
        component={account}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <HomeStack.Screen name="Travellog" component={Travellog} />
      <HomeStack.Screen name="Hotel" component={Hotel} />
      <HomeStack.Screen name="Hospital" component={Hospital} />
      <HomeStack.Screen name="Beach" component={Beach} />
      <HomeStack.Screen name="Souvernir" component={Souvernir} />
      <HomeStack.Screen name="Food" component={Food} />
    </HomeStack.Navigator>
  );
}

export default function Navigation() {
  const [signedIn, setSignedIn] = useState(false);

  auth().onAuthStateChanged(loggedIn => {
    if (loggedIn) {
      setSignedIn(true);
    } else {
      setSignedIn(false);
    }
  });

  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        {signedIn ? (
          <Stack.Screen
            name="HomeNavigation"
            component={HomeScreen}
            options={{headerShown: false}}
          />
        ) : (
          <Stack.Screen
            name="LoginNavigation"
            component={LoginScreen}
            options={{headerShown: false}}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
