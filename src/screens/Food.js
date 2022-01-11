import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {Card} from 'react-native-shadow-cards';

export default function Food() {
  return (
    <View style={styles.Container}>
      <Card style={styles.Shadow1}>
        <View style={styles.Filter}>
          <TouchableHighlight style={styles.FilterDalam}>
            <Text style={styles.Text1}>All Food</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.FilterDalam}>
            <Text style={styles.Text1}>Best Seller</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.FilterDalam}>
            <Text style={styles.Text1}>Restaurant</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={[styles.FilterDalam, {borderRightWidth: 0}]}>
            <Text style={styles.Text1}>Near Me</Text>
          </TouchableHighlight>
        </View>
      </Card>
      <View style={styles.Persegi}>
        <Card style={styles.Shadow2}></Card>
        <Card style={styles.Shadow2}></Card>
      </View>
      <View style={styles.Persegi}>
        <Card style={styles.Shadow2}></Card>
        <Card style={styles.Shadow2}></Card>
      </View>
      <Card style={styles.Shadow}></Card>
      <Card style={styles.Shadow}></Card>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'white',
  },
  Filter: {
    width: 411,
    height: 35,
    backgroundColor: '#12C039',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  FilterDalam: {
    width: 103,
    height: 35,
    backgroundColor: '#12C039',
    borderRightWidth: 2,
  },
  Shadow: {
    width: '95%',
    height: '15%',
    backgroundColor: 'white',
    shadowColor: 'black',
    marginTop: 10,
    alignSelf: 'center',
    shadowOffset: {height: 4, width: 0},
    shadowOpacity: 1,
    elevation: 15,
  },
  Shadow1: {
    width: '100%',
    height: '5%',
    backgroundColor: '#12C039',
    shadowColor: 'black',
    marginTop: 3,
    alignSelf: 'center',
    shadowOffset: {height: 10, width: 0},
    shadowOpacity: 1,
    elevation: 15,
  },
  Shadow2: {
    width: '35%',
    height: '95%',
    backgroundColor: 'white',
    shadowColor: 'black',
    marginTop: 3,
    shadowOffset: {height: 4, width: 0},
    shadowOpacity: 1,
    elevation: 15,
  },
  Persegi: {
    width: 400,
    height: 170,
    backgroundColor: 'white',
    marginTop: 10,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  Text1: {
    fontFamily: 'Poppins-Medium',
    color: 'white',
    fontSize: 14,
    alignSelf: 'center',
    marginTop: 7,
  },
});
