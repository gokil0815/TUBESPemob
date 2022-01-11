import React from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {Card} from 'react-native-shadow-cards';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import auth from '@react-native-firebase/auth';

export default function Scanqr({navigation}) {
  return (
    <View style={styles.Container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={'transparent'}
        translucent={true}
      />
      <View style={styles.persegi} />
      <Text style={styles.Text1}>BaliTrip</Text>
      <TouchableHighlight style={[styles.Tombol, {borderTopWidth: 0}]}>
        <View style={styles.Tombol}>
          <Text style={styles.Text2}>Account</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight style={styles.Tombol}>
        <View style={styles.Tombol}>
          <Text style={styles.Text2}>Security</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight style={styles.Tombol}>
        <View style={styles.Tombol}>
          <Text style={styles.Text2}>Settings</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.Tombol}
        onPress={() => {
          auth()
            .signOut()
            .then(() => {
              console.log('User log out!');
            });
        }}>
        <View style={[styles.Tombol, {borderBottomWidth: 2}]}>
          <Text style={styles.Text2}>Logout</Text>
        </View>
      </TouchableHighlight>
      <View style={styles.Bottombar}>
        <TouchableHighlight
          style={[styles.kotak, {marginTop: 20}]}
          onPress={() => navigation.navigate('Home')}>
          <FontAwesome5 name={'home'} size={30} color="black" />
        </TouchableHighlight>
        <Card style={styles.shadow3}>
          <TouchableHighlight
            style={styles.Circle2}
            onPress={() => navigation.navigate('Scanqr')}>
            <Image
              style={styles.Qrgambar}
              source={require('../Image/qr.png')}
            />
          </TouchableHighlight>
        </Card>
        <TouchableHighlight
          style={[styles.kotak, {marginTop: 20}]}
          onPress={() => navigation.navigate('account')}>
          <FontAwesome5 name={'user'} size={30} color="black" />
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
    backgroundColor: '#2C9637',
    height: 120,
    width: 415,
  },
  Tombol: {
    height: 60,
    width: 411,
    backgroundColor: 'white',
    borderTopWidth: 0.3,
    marginTop: 5,
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
  Text2: {
    fontFamily: 'Poppins-Medium',
    color: 'black',
    fontSize: 25,
    marginLeft: 10,
    marginTop: 8,
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
    backgroundColor: '#2C9637',
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
    backgroundColor: '#2C9637',
    shadowColor: 'black',
    shadowOffset: {height: 4, width: 0},
    shadowOpacity: 1,
    elevation: 15,
  },
  Bottombar: {
    backgroundColor: '#2C9637',
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
    backgroundColor: '#2C9637',
    alignItems: 'center',
    paddingTop: 20,
    paddingLeft: 2,
  },
  Qrgambar: {
    width: 35,
    height: 35,
  },
});
