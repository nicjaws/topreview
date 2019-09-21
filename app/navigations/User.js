import React from 'react';
import { Icon } from 'react-native-elements';
import {
    createAppContainer
} from "react-navigation";

import {createStackNavigator} from 'react-navigation-stack';

import {createBottomTabNavigator} from 'react-navigation-tabs';

// Screens
import HomeScreen from "../screens/Home";
import TopFiveScreen from "../screens/TopFive";
import SearchScreen from "../screens/Search";
import MyAccountScreen from "../screens/MyAccount";


const homeScreenStack = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: ({ navigation }) => ({
            title: "Home"
        })
    }
});
const topFiveScreenStack = createStackNavigator({
    TopFive: {
        screen: TopFiveScreen,
        navigationOptions: ({ navigation }) => ({
            title: "Top 5 products"
        })
    }
});
const searchScreenStack = createStackNavigator({
    Search: {
        screen: SearchScreen,
        navigationOptions: ({ navigation }) => ({
            title: "Search"
        })
    }
});

const myAccountScreenStack = createStackNavigator({
    MyAccount: {
        screen: MyAccountScreen,
        navigationOptions: ({ navigation }) => ({
            title: "MyAccount"
        })
    }
});

const RootStack = createBottomTabNavigator({
    Home: {
        screen: homeScreenStack,
        navigationOptions: ({navigation}) => ({
            tabBarLabel: "Home",
            tabBarIcon: ({tintColor}) => (
                <Icon
                name='compass-outline'
                type="material-community"
                size={22}
                color={tintColor}
                 />

            )
        })
    },
    TopFive: {
        screen: topFiveScreenStack,
        navigationOptions: ({navigation}) => ({
            tabBarLabel: "Top 5",
            tabBarIcon: ({tintColor}) => (
                <Icon
                name='star-outline'
                type="material-community"
                size={22}
                color={tintColor}
                 />
            )
        })
    },
    Search: {
        screen: searchScreenStack,
        navigationOptions: ({navigation}) => ({
            tabBarLabel: "Search",
            tabBarIcon: ({tintColor}) => (
                <Icon 
                name='magnify'
                type="material-community"
                size={22}
                color={tintColor}  
                />
            )
        })
    }
}, 
{
    tabBarOptions: {
       inactiveTintColor: "#646464",
       activeTintColor: "#00a680"

    }
}
);

export default createAppContainer(RootStack);
