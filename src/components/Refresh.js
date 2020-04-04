import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { inject } from 'mobx-react';

@inject('AllData','TurkeyData')
export default class Refresh extends Component {
  async refreshPage(page){
    if(page=='Turkey'){
      try{
        await this.props.TurkeyData.getData();
      }catch(error){
        console.log('Bir şeyler hatalı.')
      }
    }
    if(page=='World'){
      try{
        await this.props.AllData.getData();
      }catch(error){
        console.log('Bir şeyler hatalı.')
      }
    }
    else{
      return false;
    }
  }

  componentDidMount(){
  }

  render() {
    const { page }=this.props;
    return (
      <TouchableOpacity style={styles.itemContainer} onPress={()=>this.refreshPage(page)}>
        <Icon name='refresh' style={styles.icon} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    itemContainer:{
        padding:10,
        backgroundColor:'#fff',
        borderRadius:20,
        marginRight:15
    },
    icon:{
        fontSize:20
    }
});
