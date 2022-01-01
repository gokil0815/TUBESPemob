import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import Tabs from './src/Navigation/BottomNavigation';
import Navigation from './src/Navigation/Navigation';
import Home from './src/screens/Home';

export default function App() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}
