import React, {Component} from "react"; 
import {StyleSheet, View} from "react-native";
import { Button, Text } from 'react-native-elements';
import Toast, { DURATION } from 'react-native-easy-toast';

import t from "tcomb-form-native"; 
const Form = t.form.Form; 

import { RegisterStruct, RegisterOptions } from "../../forms/Register";

import * as firebase from 'firebase';


export default class Register extends Component {
    constructor() {
        super();

        this.state = {
            registerStruct: RegisterStruct,
            registerOptions: RegisterOptions,
            formData: {
                user: "",
                email: "",
                passwordConfirmation: ""
            },
            formErrorMessage: ""
        }
    }

    register = () => {
        this.refs.toast.show('Email is already in use', 2500, () => {
            
        });
        const {password, passwordConfirmation } = this.state.formData;

        if(password === passwordConfirmation) {
            const validate = this.refs.registerForm.getValue();

            if(validate){
                this.setState({ formErrorMessage: "" });
                firebase.auth().createUserWithEmailAndPassword(validate.email, validate.password).then(resolve => {
                    console.log('Register succesfull')
                }).catch(err => {
                    console.log('Email already in use')
                })
            } else {
                this.setState({
                    formErrorMessage: 'Incorrect formular' 
                });
            }
        } else {
            this.setState({
                formErrorMessage: 'Passwords are not the same' 
            });
        }

    }

    onChangeFormRegister = (formValue) => {
        this.setState({
            formData: formValue
        })
    } 

    render() {

        const { registerStruct, registerOptions, formErrorMessage } = this.state

        return (
            <View style={styles.viewBody}>

                <Form
                    ref="registerForm"
                    type={registerStruct}
                    options={registerOptions}
                    value={this.state.formData}
                    onChange={(formValue) => this.onChangeFormRegister(formValue)}
                />
                <Button buttonStyle={styles.buttonRegisterContainer} title="Join us" onPress={() => this.register()}
                />
                <Text style={styles.formErrorMessage}>
                {formErrorMessage}
                </Text> 
                <Toast
                    ref="toast"
                    position='bottom'
                    positionValue={250}
                    fadeInDuration={750}
                    fadeOutDuration={1000}
                    opacity={0.8}
                    textStyle={{color:'#fff'}}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    viewBody: {
        flex: 1,
        justifyContent: "center",
        marginLeft: 40,
        marginRight: 40    
    },
    buttonRegisterContainer: {
        backgroundColor: "#00a680",
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10       
    },
    formErrorMessage: {
        color: "#f00",
        textAlign: "center",
        marginTop: 30, 
    }
})
