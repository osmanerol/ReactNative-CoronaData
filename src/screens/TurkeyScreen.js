import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ActivityIndicator } from 'react-native';

import { observer, inject } from 'mobx-react';
import Icon from 'react-native-vector-icons/FontAwesome5';

//  refresh button
import Refresh from '../components/Refresh';

@inject('TurkeyData')
@observer
export default class TurkeyScreen extends Component {
    static navigationOptions = ({ navigation }) => {
      return {
          title: 'TÜRKİYE',
          headerRight:()=> <Refresh page='Turkey'/> 
      };
    };

    componentDidMount(){
        this.props.TurkeyData.getData();
    }
  
    render() {
    const { TurkeyData }=this.props
    return (
        <SafeAreaView style={styles.container}>
        { 
            TurkeyData.loading ? <ActivityIndicator size='large' style={styles.loading} /> : 
            <View>
                <View style={styles.itemContainer}>
                    <Text style={styles.title}>TOPLAM ÖLÜ</Text>
                    <View style={styles.numberontainer}>
                        <Icon name='user-times' style={styles.icon} />
                        <Text style={styles.text}>{ TurkeyData.totalDeaths }</Text>
                    </View>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.title}>VAKA</Text>
                    <View style={styles.numberontainer}>
                        <Icon name='user-injured' style={styles.icon} />
                        <Text style={styles.text}>{ TurkeyData.totalCases }</Text>
                    </View>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.title}>İYİLEŞEN</Text>
                    <View style={styles.numberontainer}>
                        <Icon name='user-check' style={styles.icon} />
                        <Text style={styles.text}>{ TurkeyData.totalRecovered }</Text>
                    </View>
                </View>
            </View>
        }
        </SafeAreaView>
    );
    }
}
    
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    itemContainer:{
        marginHorizontal:40,
        marginVertical:20,
        borderRadius:10,
        padding:30,
        elevation:10
    },
    numberontainer:{
        flexDirection:'row',
        justifyContent:'space-around'
    },
    text:{
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold'
    },
    icon:{
        fontSize:24
    },
    title:{
        textAlign:'center',
        fontSize:24,
        marginBottom:10,
        fontWeight:'bold'
    },
    loading:{
        marginTop:40
    }
});