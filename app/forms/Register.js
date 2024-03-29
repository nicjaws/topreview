import React from 'react'

import t from "tcomb-form-native";
import formValidation from "../utils/Validation";
import inputTemplate from './templates/Input'; 

export const RegisterStruct = t.struct({
    name: t.String,
    email: formValidation.email,
    password: formValidation.password,
    passwordConfirmation: formValidation.password 
});

export const RegisterOptions = {
   fields: {
       name: {
           label:"Name (*)",
           template: inputTemplate,
           config: {
            placeholder: "Write firstname and lastname",
            iconType: "material-community",
            iconName: "account-outline"
           }
       },
       email: {
        template: inputTemplate,
        config: {
         placeholder: "Write your email",
         iconType: "material-community",
         iconName: "at"
        }
       },
       password: {
        template: inputTemplate,
        config: {
         placeholder: "Write your password",
         iconType: "material-community",
         iconName: "lock-outline",
         password: true,
         secureTextEntry: true
        }  
       },
       passwordConfirmation: {
        template: inputTemplate,
        config: {
         placeholder: "Repeat your password",
         iconType: "material-community",
         iconName: "lock-reset",
         password: true,
         secureTextEntry: true
        }  
       }
   } 
}