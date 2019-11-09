import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default class Login extends React.Component {
   render() {
       return(
           <View style={styles.viewBody}>
                <Text>Login screen...</Text>
           </View>
       )
   } 
}

const styles = StyleSheet.create({
    viewBody: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 40,
        marginRight: 40
    }
})