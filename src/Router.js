import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

//  screens
import WorldScreen from './screens/WorldScreen';
import TurkeyScreen from './screens/TurkeyScreen';
import SearchScreen from './screens/SearchScreen';

//  icons
import Icon from 'react-native-vector-icons/Fontisto';
import Iconx from 'react-native-vector-icons/EvilIcons';
//  import Icony from 'react-native-vector-icons/FontAwesome5';
import TurkeyIcon from './components/TurkeyIcon';

const HomeStack=createStackNavigator({
    Home:{
        screen:WorldScreen,
        navigationOptions:{
            title:'DÜNYA',
            headerTitleAlign:'center',
            headerTintColor:'#fff',
            headerStyle:{
                backgroundColor:'#131418',
            }
        }
    }
})

const TurkeyStack=createStackNavigator({
    Turkey:{
        screen:TurkeyScreen,
        navigationOptions:{
            title:'TÜRKİYE',
            headerTitleAlign:'center',
            headerTintColor:'#fff',
            headerStyle:{
                backgroundColor:'#131418',
            }
        }
    }
})

const SearchStack=createStackNavigator({
    Search:{
        screen:SearchScreen,
        navigationOptions:{
            title:'ÜLKELER',
            headerTitleAlign:'center',
            headerTintColor:'#fff',
            headerStyle:{
                backgroundColor:'#131418',
            }
        }
    }
})


const TabNavigator=createBottomTabNavigator({
    Home:{
        screen:HomeStack,
        navigationOptions:{
            tabBarLabel:'DÜNYA',
            tabBarIcon:({tintColor})=> <Icon name='earth' style={{color:tintColor}} size={20} />
        },
    },
    Turkey:{
        screen:TurkeyStack,
        navigationOptions:{
            tabBarLabel:'TÜRKİYE',
            tabBarIcon:({tintColor})=> <TurkeyIcon backgroundColor={tintColor} />
        },
    },
    Search:{
        screen:SearchStack,
        navigationOptions:{
            tabBarLabel:'ÜLKELER',
            tabBarIcon:({tintColor})=> <Iconx name='location' style={{color:tintColor}} size={20}  />
        },
    }
},{
    initialRouteName:'Home',
    tabBarOptions:{
        activeTintColor:'#fff',
        inactiveTintColor:'#7b7b7b',
        style:{
            backgroundColor:'#131418'
        },
        labelStyle:{
            fontWeight:'bold'
        }
    }
})

export default createAppContainer(TabNavigator);