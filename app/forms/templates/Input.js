import React from 'react'
import { StyleSheet, View } from 'react-native';
import { Input, Icon } from 'react-native-elements';

export default (inputTemplate = locals => {
    return (
        <View>
            <Input placeholder="Test..." />
        </View>
    )

})

const styles = StyleSheet.create({})