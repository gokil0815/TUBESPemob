import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {Card} from 'react-native-shadow-cards';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Scanqr({Navigation}) {
  return (
    <View style={styles.Container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={'transparent'}
        translucent={true}
      />
      <View style={styles.persegi} />
      <Text style={styles.Text1}>BaliTrip</Text>
      <Text
        style={[styles.Text1, {marginTop: 77, marginLeft: 65, fontSize: 20}]}>
        Travel Log
      </Text>
      <TouchableHighlight style={styles.Circle}>
        <FontAwesome5 name={'user'} size={30} color="black" />
      </TouchableHighlight>
      <View style={styles.Bottombar}>
        <TouchableHighlight
          style={[styles.kotak, {marginTop: 20}]}
          onPress={() => Navigation.Navigate('Home')}>
          <FontAwesome5 name={'home'} size={30} color="black" />
        </TouchableHighlight>
        <Card style={styles.shadow3}>
          <TouchableHighlight
            style={styles.Circle2}
            onPress={() => Navigation.Navigate('Scanqr')}>
            <FontAwesome5 name={'camera'} size={40} color="white" />
          </TouchableHighlight>
        </Card>
        <TouchableHighlight
          style={[styles.kotak, {marginTop: 20}]}
          onPress={() => Navigation.Navigate('Travellog')}>
          <FontAwesome5 name={'book'} size={30} color="black" />
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
  Text1: {
    fontFamily: 'Poppins-LightItalic',
    fontSize: 40,
    color: 'white',
    position: 'absolute',
    marginTop: 30,
    marginLeft: 20,
  },
  kotak: {
    backgroundColor: '#12C039',
    height: 80,
    width: 60,
    marginLeft: 10,
  },
  shadow3: {
    width: '17%',
    height: '70%',
    marginTop: -70,
    borderRadius: 100,
    alignSelf: 'center',
    backgroundColor: '#12C039',
    shadowColor: 'black',
    shadowOffset: {height: 4, width: 0},
    shadowOpacity: 1,
    elevation: 15,
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
  Circle2: {
    height: 70,
    width: 70,
    borderRadius: 100,
    marginTop: -5,
    backgroundColor: '#12C039',
    alignItems: 'center',
    paddingTop: 13,
    paddingLeft: 2,
  },
});
