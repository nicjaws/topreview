import React from 'react';
import {
    createStackNavigator,
    createAppContainer, 
    createBottomTabNavigator
} from "react-navigation";

// Screens
import HomeScreen from "../screens/Home";
import TopFiveScreen from "../screens/TopFive";
import SearchScreen from "../screens/Search";
import MyAccountScreen from "../screens/MyAccount";


const homeScreenStack = createStackNavigator({
    HomeScreen: {
        screen: Home,
        navigationOptions: ({ navigation }) => ({
            title: "Home"
        })
    }
});

const searchScreenStack = createStackNavigator({
    HomeScreen: {
        screen: Search,
        navigationOptions: ({ navigation }) => ({
            title: "Search"
        })
    }
});

const topFiveScreenStack = createStackNavigator({
    HomeScreen: {
        screen: TopFive,
        navigationOptions: ({ navigation }) => ({
            title: "Top 5 products"
        })
    }
});

const myAccountScreenStack = createStackNavigator({
    HomeScreen: {
        screen: MyAccount,
        navigationOptions: ({ navigation }) => ({
            title: "MyAccount"
        })
    }
});

const RootStack = createBottomTabNavigator({
    HomeScreen: {
        screen: homeScreenStack
    }
});

export default createAppContainer(RootStack);
