import React, {Component} from "react"; 
import {StyleSheet, View, Text} from "react-native";
import  { Button } from 'react-native-elements';

export default class MyAccount extends Component {

    goToScreen = nameScreen => {
        this.props.navigation.navigate(nameScreen); 
    }

    render() {
        return (
            <View style={styles.viewBody}>
                <Text>MyAccount Screen...</Text>
                <Button title="Register" onPress={()=> this.goToScreen("Register")}></Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    viewBody: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: "#fff", 
    }
})
