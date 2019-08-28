import React, { Component } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AppRegistry} from "react-native";
import App from "./App";
import {name as appName} from './app.json';

import UserNavigation from "./app/navigations/User";
import {Appregistry} from 'react-native';

export default class App extends Component {
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
