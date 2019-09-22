import React, { Component } from 'react';
import { createSwitchNavigator,createAppContainer} from 'react-navigation';
import {View}from 'react-native'
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

const authNavigator=createStackNavigator(
    {
        Login:{
            getScreen:()=>require('./LoginScreen').default
        }
    }, {
        navigationOptions: {
          header: null,
        },
      },
)
const TabNavigator=createBottomTabNavigator({
    Home:{
        getScreen:()=>require('./HomeScreen').default
    }
})

const MainNavigator=createStackNavigator({
Tab:TabNavigator
})
const AppNavigator=createSwitchNavigator({
    Splash:{ 
        getScreen:()=>require('./SplashScreen').default
    },
    Auth:authNavigator,
    Main:MainNavigator
    
},{
    initialRouteName:'Splash'
})
export default createAppContainer(AppNavigator)