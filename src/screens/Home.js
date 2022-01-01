import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabActions} from '@react-navigation/native';
import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import {Card} from 'react-native-shadow-cards';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Home() {
  return (
    <View style={styles.Container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={'transparent'}
        translucent={true}
      />
      <View style={styles.persegi} />
      <TouchableHighlight style={styles.Circle}>
        <FontAwesome5 name={'user'} size={30} color="black" />
      </TouchableHighlight>
      <Card style={styles.shadow}>
        <TextInput style={styles.Input}>
          <FontAwesome5 name={'search'} size={30} color="black" />
        </TextInput>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'white',
  },
  persegi: {
    backgroundColor: '#12C039',
    height: 120,
    width: 415,
  },
  Input: {
    width: 290,
    height: 55,
    marginLeft: 15,
    backgroundColor: 'white',
    fontFamily: 'Poppins-Bold',
  },
  shadow: {
    width: 320,
    height: 50,
    width: '90%',
    height: '10%',
    borderRadius: 100,
    marginTop: 18,
    paddingTop: 10,
    marginLeft: 22,
    shadowColor: '#000000',
    shadowOffset: {height: 4, width: 0},
    shadowOpacity: 1,
    elevation: 15,
  },
  Circle: {
    height: 50,
    width: 50,
    borderRadius: 50,
    marginLeft: 345,
    marginTop: -80,
    backgroundColor: '#F1DBDB',
    alignItems: 'center',
    paddingTop: 8,
  },
});
