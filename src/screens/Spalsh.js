import React from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Alert,
} from 'react-native';

export default function spalsh({navigation}) {
  return (
    <View style={styles.Container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={'transparent'}
        translucent={true}
      />
      <View style={styles.Circle} />
      <Image style={styles.Gambar} source={require('../Image/awal.png')} />
      <Text style={styles.Text1}>BaliTrip</Text>
      <Text style={styles.Text2}>Your Personal Bali's</Text>
      <Text style={styles.Text2}>Tour Guide</Text>
      <TouchableHighlight
        style={styles.Tombol}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.Text3}>GET STARTED</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'white',
  },
  Circle: {
    height: 200,
    width: 200,
    borderRadius: 200,
    marginLeft: -100,
    marginTop: -100,
    backgroundColor: '#159622',
  },
  Gambar: {
    marginLeft: 75,
    marginTop: 20,
    width: 250,
    height: 300,
  },
  Text1: {
    fontFamily: 'Poppins-Bold',
    fontSize: 25,
    color: 'black',
    textAlign: 'center',
  },
  Text2: {
    fontFamily: 'Poppins-Medium',
    fontSize: 15,
    color: 'black',
    textAlign: 'center',
  },
  Tombol: {
    width: 341,
    height: 55,
    backgroundColor: '#12C039',
    marginTop: 80,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  Text3: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
});
