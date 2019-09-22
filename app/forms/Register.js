import React from 'react'

import t from 'tcomb-form-native';
import formValidation from '../utils/Validation';

export const RegisterStruct = t.struc({
    name: t.String,
    email: formValidation.email,
    password: formValidation.password,
    passwordConfirmation: formValidation.password 
});

export const registerOptions = {
   fields: {
       name: {
           label:"Name (*)"
       }
   } 
}