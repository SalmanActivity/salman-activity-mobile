import React from 'react'
import {ScrollView} from 'react-native'
import {reduxForm, Field} from 'redux-form'

import FullButton from '../Components/FullButton'
import TextInput from './TextInputWrapper'

const LoginForm = (props) => (
  <ScrollView keyboardShouldPersistTaps='always'>
    <Field
      name='username'
      component={TextInput}
      autoFocus
      placeholder='Username'
    />
    <Field
      name='password'
      component={TextInput}
      placeholder='Password'
      secureTextEntry
    />

    <FullButton onPress={props.handleSubmit} text='Login' />
  </ScrollView>
)

export default reduxForm({form: 'login'})(LoginForm)
