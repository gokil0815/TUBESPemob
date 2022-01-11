import React, {useState} from 'react';
import {
  Alert,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export default function Register({navigation}) {
  const [Username, OnChangeUsername] = useState('Username');
  const [Email, OnChangeEmail] = useState('Email');
  const [Password, OnchangePassword] = useState('Password');
  const [ConfirmPassword, OnchangeConfirmPassword] =
    useState('Confirm Password');

  const SignUp = () => {
    if (Password.trim() === ConfirmPassword.trim()) {
      auth()
        .createUserWithEmailAndPassword(Email, Password.trim())
        .then(response => {
          console.log('User terdaftar!');
          const uid = response.user.uid;
          firestore()
            .collection('users')
            .doc(uid)
            .set({
              Username,
            })
            .then(() => {
              console.log('Username ditambahkan ke firestore!');
            })
            .catch(console.error);
        })
        .catch(err => {
          if (err.code === 'auth/email-already-in-use') {
            Alert.alert('Error Sign Up', 'Email sudah terdaftar sebelumnya');
          } else if (err.code === 'auth/invalid-email') {
            Alert.alert('Error Sign Up', 'Email tidak valid');
          } else if (err.code === 'auth/weak-password') {
            Alert.alert('Error Sign Up', 'Password belum kuat.');
          }
        });
    } else {
      Alert.alert('Error Sign Up', 'Password tidak sama.');
    }
  };

  return (
    <View style={styles.Container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={'transparent'}
        translucent={true}
      />
      <View style={styles.Circle} />
      <Text style={styles.Text1}>Create account</Text>
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
      <TouchableHighlight style={styles.Tombol} onPress={SignUp}>
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
    backgroundColor: '#159622',
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
    marginTop: 100,
    alignSelf: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#12C039',
    borderRadius: 50,
    fontFamily: 'Poppins-Bold',
    fontSize: 15,
    paddingLeft: 20,
    paddingBottom: 2,
  },
  Input1: {
    width: 320,
    height: 50,
    marginTop: 15,
    alignSelf: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#12C039',
    borderRadius: 50,
    fontFamily: 'Poppins-Bold',
    fontSize: 15,
    paddingLeft: 20,
    paddingBottom: 2,
  },
  Tombol: {
    width: 341,
    height: 55,
    backgroundColor: '#12C039',
    marginTop: 100,
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
