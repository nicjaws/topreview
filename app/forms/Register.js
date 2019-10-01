import React from 'react'

import t from "tcomb-form-native";
import formValidation from "../utils/Validation";

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
           placeholder: "Write name and surname",
           error: "Invalid name"
       },
       email: {
           label: "Email (*)",
           placeholder: "Write your email",
           error: "Invalid email"
       },
       password: {
           label: "Password (*)",
           placeholder: "Write your password",
           error: "Invalid password",
           password: true,
           secureTextEntry: true
       },
       passwordConfirmation: {
           label: "Repeat password",
           placeholder: "Repeat your password",
           error: "Invalid password",
           password: true,
           secureTextEntry: true
       }
   } 
}