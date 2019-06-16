import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TextInput, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator, createAppContainer, Navigation } from 'react-navigation';
import EnvironmentalFeed from './pages/EnvironmentalFeed';
import Category from './pages/Category';
import { Icon } from 'react-native-elements'

export default class HomeComponent extends Component {

    
    static navigationOptions = {
        header: null,
    };


    render() {
        return (
            <Stack />
        );
    }
}

const TabNavigator = createBottomTabNavigator({
    EnvironmentalFeed: 
    {   
        screen: EnvironmentalFeed,
        navigationOptions: () => ({
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name="Bookmark"
                    color={tintColor}
                    size={25}
                />
            )
        })
    },
    Category: {
        screen: Category,
        navigationOptions: () => ({
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name="Bookmark"
                    color={tintColor}
                    size={25}
                />
            )
        })
    },
   
}, {
        tabBarPosition: 'bottom',
        swipeEnabled: true,
        tabBarOptions: {
            showLabel: true, 
            activeTintColor: 'white',
            activeBackgroundColor: 'blue',
           
        }
    }
);

const Stack = createAppContainer(TabNavigator);
