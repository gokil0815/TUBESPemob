import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Card} from 'react-native-shadow-cards';

export default function Hotel() {
  return (
    <View style={styles.Container}>
      <Card style={styles.Shadow}></Card>
      <Card style={styles.Shadow}></Card>
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
  Shadow: {
    width: '95%',
    height: '15%',
    backgroundColor: 'white',
    shadowColor: 'black',
    marginTop: 5,
    alignSelf: 'center',
    shadowOffset: {height: 4, width: 0},
    shadowOpacity: 1,
    elevation: 15,
  },
});
