import React from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import {Card} from 'react-native-shadow-cards';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Home({navigation}) {
  return (
    <View style={styles.Container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={'transparent'}
        translucent={true}
      />
      <View style={styles.persegi} />
      <Text style={styles.Text1}>BaliTrip</Text>
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
                style={[
                  styles.Circle,
                  {marginLeft: 5, marginTop: 5, backgroundColor: '#4C7FBC'},
                ]}
                onPress={() => navigation.navigate('Hotel')}>
                <FontAwesome5 name={'hotel'} size={30} color="white" />
              </TouchableHighlight>
              <Text style={styles.Text}>Hotels</Text>
            </View>
            <View style={[styles.kotak, {width: 70}]}>
              <TouchableHighlight
                style={[
                  styles.Circle,
                  {marginLeft: 10, marginTop: 5, backgroundColor: '#F35959'},
                ]}
                onPress={() => navigation.navigate('Hospital')}>
                <FontAwesome5 name={'hospital'} size={30} color="white" />
              </TouchableHighlight>
              <Text style={styles.Text}>Hospital</Text>
            </View>
            <View style={styles.kotak}>
              <TouchableHighlight
                style={[
                  styles.Circle,
                  {marginLeft: 5, marginTop: 5, backgroundColor: '#59AFFF'},
                ]}
                onPress={() => navigation.navigate('Beach')}>
                <Image source={require('../Image/beach.png')} />
              </TouchableHighlight>
              <Text style={styles.Text}>Beach</Text>
            </View>
            <View style={styles.kotak}>
              <TouchableHighlight
                style={[
                  styles.Circle,
                  {marginLeft: 5, marginTop: 5, backgroundColor: '#F27249'},
                ]}>
                <Image source={require('../Image/Vector.png')} />
              </TouchableHighlight>
              <Text style={styles.Text}>Food</Text>
            </View>
          </View>
          <View style={[styles.menubardalam, {justifyContent: 'flex-start'}]}>
            <View style={[styles.kotak, {width: 70, marginLeft: 23}]}>
              <TouchableHighlight
                style={[
                  styles.Circle,
                  {
                    marginLeft: 10,
                    marginTop: 5,
                    paddingTop: 10,
                    backgroundColor: '#FFCA0C',
                  },
                ]}>
                <Image source={require('../Image/suvernir.png')} />
              </TouchableHighlight>
              <Text style={styles.Text}>Souvenir</Text>
            </View>
            <View style={[styles.kotak, {width: 79, marginLeft: 14}]}>
              <TouchableHighlight
                style={[
                  styles.Circle,
                  {marginLeft: 15, marginTop: 5, backgroundColor: '#FF1192'},
                ]}
                onPress={() => navigation.navigate('Travellog')}>
                <FontAwesome5 name={'book'} size={30} color="white" />
              </TouchableHighlight>
              <Text style={styles.Text}>Travel Log</Text>
            </View>
          </View>
        </View>
      </Card>
      <View style={styles.Bottombar}>
        <TouchableHighlight
          style={[styles.kotak, {marginTop: 20, backgroundColor: '#2C9637'}]}
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
          style={[styles.kotak, {marginTop: 20, backgroundColor: '#2C9637'}]}
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
    marginTop: -30,
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
  Text1: {
    fontFamily: 'Poppins-LightItalic',
    fontSize: 40,
    color: 'white',
    position: 'absolute',
    marginTop: 25,
    marginLeft: 20,
  },
});
