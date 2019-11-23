import React from 'react'
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native'
import { Image } from 'react-native-elements'

export default class Login extends React.Component {
   render() {
       return(
           <View style={styles.viewBody}>
                <Image
                    source={require('../../../assets/product.png')}
                    style={{ width: 200, height: 200 }}
                    PlaceholderContent={<ActivityIndicator />}
                    resizeMode="contain"
/>
           </View>
       )
   } 
}

const styles = StyleSheet.create({
    viewBody: {
        flex: 1,
        marginLeft: 40,
        marginRight: 40,
        marginTop: 40,
        alignItems: "center",
    }, 
    logo: {
        width: 300,
        height: 150
    }
})