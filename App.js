import React, { Component } from 'react';
import {StyleSheet, Text, View} from 'react-native';

import UserNavigation from "./app/navigations/User";


export default class App extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <Text>Hola Mundo!</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
