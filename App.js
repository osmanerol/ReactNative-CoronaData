import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

//  Router
import Router from './src/Router';

//  Store
import Store from './src/store/Index';

import { Provider } from 'mobx-react';

export default class App extends Component {
  render() {
    return (
      <Provider {...Store}>
        <Router />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
});