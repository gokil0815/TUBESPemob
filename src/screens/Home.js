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
      <Card style={styles.shadow2}>
        <View style={styles.menubar}>
          <View style={styles.menubardalam}>
            <View style={styles.kotak}>
              <TouchableHighlight
                style={[styles.Circle, {marginLeft: 5, marginTop: 5}]}>
                <FontAwesome5 name={'hotel'} size={30} color="black" />
              </TouchableHighlight>
              <Text style={styles.Text}>Hotels</Text>
            </View>
            <View style={styles.kotak}>
              <TouchableHighlight
                style={[styles.Circle, {marginLeft: 5, marginTop: 5}]}>
                <FontAwesome5 name={'umbrella'} size={30} color="black" />
              </TouchableHighlight>
              <Text style={styles.Text}>Beach</Text>
            </View>
            <View style={styles.kotak}>
              <TouchableHighlight
                style={[styles.Circle, {marginLeft: 5, marginTop: 5}]}>
                <FontAwesome5 name={''} size={30} color="black" />
              </TouchableHighlight>
              <Text style={styles.Text}>Food</Text>
            </View>
            <View style={[styles.kotak, {width: 70}]}>
              <TouchableHighlight
                style={[styles.Circle, {marginLeft: 10, marginTop: 5}]}>
                <FontAwesome5 name={''} size={30} color="black" />
              </TouchableHighlight>
              <Text style={styles.Text}>Souvenir</Text>
            </View>
          </View>
          <View style={[styles.menubardalam, {justifyContent: 'flex-start'}]}>
            <View style={[styles.kotak, {width: 70, marginLeft: 20}]}>
              <TouchableHighlight
                style={[styles.Circle, {marginLeft: 10, marginTop: 5}]}>
                <FontAwesome5 name={''} size={30} color="black" />
              </TouchableHighlight>
              <Text style={styles.Text}>Hospital</Text>
            </View>
          </View>
        </View>
      </Card>
      <View style={styles.Bottombar}>
        <TouchableHighlight style={[styles.kotak, {marginTop: 20}]}>
          <FontAwesome5 name={'home'} size={30} color="black" />
        </TouchableHighlight>
        <TouchableHighlight style={[styles.kotak, {marginTop: 20}]}>
          <FontAwesome5 name={'book'} size={30} color="black" />
        </TouchableHighlight>
        <TouchableHighlight style={[styles.kotak, {marginTop: 20}]}>
          <FontAwesome5 name={'QR code'} size={30} color="black" />
        </TouchableHighlight>
      </View>
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
  kotak: {
    backgroundColor: '#12C039',
    height: 80,
    width: 60,
    marginLeft: 10,
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
  shadow2: {
    width: '90%',
    height: '30%',
    marginTop: 60,
    alignSelf: 'center',
    backgroundColor: '#12C039',
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
  Bottombar: {
    backgroundColor: '#12C039',
    height: 100,
    width: 415,
    marginTop: 655,
    position: 'absolute',
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  menubar: {
    backgroundColor: '#12C039',
    height: 200,
    width: 370,
    alignSelf: 'center',
    marginTop: 10,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  menubardalam: {
    backgroundColor: '#12C039',
    height: 90,
    width: 370,
    alignSelf: 'center',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  Text: {
    fontFamily: 'Poppins-Medium',
    fontSize: 15,
    color: 'white',
    textAlign: 'center',
  },
});
