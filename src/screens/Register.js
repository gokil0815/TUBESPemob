import React, {useState} from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';

export default function Register({navigation}) {
  const [Username, OnChangeUsername] = useState('Username');
  const [Email, OnChangeEmail] = useState('Email');
  const [Password, OnchangePassword] = useState('Password');
  const [ConfirmPassword, OnchangeConfirmPassword] =
    useState('Confirm Password');

  return (
    <View style={styles.Container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={'transparent'}
        translucent={true}
      />
      <View style={styles.Circle} />
      <Text style={styles.Text1}>Welcome to BaliTrip!</Text>
      <Text style={styles.Text2}>Enjoy Your Stay!</Text>
      <TextInput
        style={styles.Input}
        placeholder="Username"
        onChangeText={text => OnChangeUsername(text)}
      />
      <TextInput
        style={styles.Input1}
        placeholder="Email"
        onChangeText={text => OnChangeEmail(text)}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.Input1}
        placeholder="Password"
        onChangeText={text => OnchangePassword(text)}
        secureTextEntry={true}
      />
      <TextInput
        style={styles.Input1}
        placeholder="Confirm Password"
        onChangeText={text => OnchangeConfirmPassword(text)}
        secureTextEntry={true}
      />
      <TouchableHighlight
        style={styles.Tombol}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.Text3}>REGISTER</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.Tombol1}
        onPress={() => navigation.navigate('Login')}>
        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <Text style={styles.Text4}>Already have an account?</Text>
          <Text style={[styles.Text4, {color: '#B88383'}]}> Sign in</Text>
        </View>
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
    backgroundColor: '#12C039',
  },
  Text1: {
    fontFamily: 'Poppins-Bold',
    fontSize: 25,
    color: 'black',
    textAlign: 'center',
  },
  Text2: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
  },
  Gambar: {
    width: 160,
    height: 230,
    marginLeft: 100,
    marginTop: 20,
  },
  Input: {
    width: 320,
    height: 50,
    marginTop: 150,
    alignSelf: 'center',
    backgroundColor: '#F1DBDB',
    borderRadius: 50,
    fontFamily: 'Poppins-Bold',
    paddingLeft: 20,
    paddingBottom: 8,
  },
  Input1: {
    width: 320,
    height: 50,
    marginTop: 5,
    alignSelf: 'center',
    backgroundColor: '#F1DBDB',
    borderRadius: 50,
    fontFamily: 'Poppins-Bold',
    paddingLeft: 20,
    paddingBottom: 8,
  },
  Tombol: {
    width: 341,
    height: 55,
    backgroundColor: '#12C039',
    marginTop: 25,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  Text3: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  Text4: {
    fontFamily: 'Poppins-Bold',
    fontSize: 15,
    color: 'black',
    textAlign: 'center',
  },
  Tombol1: {
    width: 341,
    height: 30,
    backgroundColor: 'white',
    marginTop: 5,
    alignSelf: 'center',
    justifyContent: 'center',
  },
});
