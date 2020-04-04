import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default class TurkeyIcon extends Component {
  render() {
    const {backgroundColor}=this.props;
    return (
    <View style={[styles.container,{backgroundColor:backgroundColor}]}>
        <Image source={require('../assets/turkey.png')} style={styles.icon} resizeMode='contain' />
    </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        borderRadius:13
    },
    icon:{
        width:24,
        height:24
    }
});