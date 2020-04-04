import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, ActivityIndicator, TextInput } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

import { API_COUNTRIES } from '../constants/ConstantCountries';

//  refresh button
import Refresh from '../components/Refresh';

//  axios
import axios from 'axios';

export default class SearchScreen extends Component {
  state={
    countries:[],
    allCountries:[],
    text:'',
    loading:false,
    refreshing:false
  }
  componentDidMount(){
    this.getItems();
  }

  async getItems(){
    if(!(this.state.refreshing)){
      this.setState({
        loading:true
      })
    }
    try{
      const {data:{result}}=await axios.get(`${API_COUNTRIES}`,{
          headers:{
              authorization: 'apikey 0Q3J6uQUE9T9m3bS01EZMO:2XjGPcSDXXOKerv2ouoRgO',
              'Content-Type': 'application/json'
          }
      })
      console.log(result);
      this.setState({
        countries:result,
        allCountries:[],
        loading:false,
        refreshing:false
      })
    } catch(error){
      this.setState({
        loading:false,
        refreshing:false
      })
      alert('Bir şeyler hatalı.');
    }
  }

  renderItem=({item,index})=>{
    return(
      <View>
        <Text>{item.country}</Text>
      </View>
    )
  }

  renderItem=({item,index})=>{
    return(
      <View style={styles.countryContainer}>
        <Text style={styles.country}>{item.country}</Text>
        <View style={styles.data}>
          <Text style={styles.count}>{item.totalDeaths}</Text>
        </View>
        <View style={styles.data}>
          <Text style={styles.count}>{item.totalCases}</Text>
        </View>
        <View style={styles.data}>
          <Text style={styles.count}>{item.totalRecovered}</Text>
        </View>
      </View>
    )
  }

  renderFooter=()=>{
    if(!this.state.loading) return null;
      return(
        <View style={styles.loading}>
            <ActivityIndicator size={'large'} />
        </View>
      )
  }

  onRefresh=()=>{
    this.setState({
      refreshing:true,
      countries:[]
    },()=>{
        this.getItems();
    })
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.icons}>
          <Text style={styles.text}>ÜLKE</Text>
          <View style={styles.iconContainer}>
            <Icon name='user-times' style={styles.icon} />
            <Text style={styles.text}>TOPLAM ÖLÜ</Text>
          </View>
          <View style={styles.iconContainer}>
            <Icon name='user-injured' style={styles.icon} />
            <Text style={styles.text}>VAKA</Text>
          </View>
          <View style={styles.iconContainer}>
            <Icon name='user-check' style={styles.icon} />
            <Text style={styles.text}>İYİLEŞEN</Text>
          </View>
        </View>
          <View style={styles.countriesContainer}> 
            <FlatList data={this.state.countries} renderItem={this.renderItem} keyExtractor={(item)=>item.country} ListHeaderComponent={this.renderHeader} ListFooterComponent={this.renderFooter}  refreshing={this.state.refreshing} onRefresh={this.onRefresh} />
          </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  icons:{
    padding:10,
    flexDirection:'row',
    justifyContent:'space-around'
  },
  iconContainer:{
    flexDirection:'row',
  },
  loading:{
    marginTop:40
  },
  icon:{
    fontSize:16,
    marginRight:10
  },
  count:{
    textAlign:'center'
  },
  text:{
    fontWeight:'bold'
  },
  countriesContainer:{
    marginVertical:10
  },
  countryContainer:{
    padding:15,
    margin:5,
    borderRadius:15,
    elevation:2 ,
    flexDirection:'row',
    justifyContent:'space-between',
    flex:1,
  },
  data:{
    flexDirection:'row',
    flex:1
  },
  country:{
    fontWeight:'bold',
    flex:1
  }
}); 