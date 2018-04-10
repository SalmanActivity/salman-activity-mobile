import React from 'react'
import {ScrollView} from 'react-native'
import {reduxForm, Field} from 'redux-form'
import {Button} from 'react-native-elements'

import TextInput from './TextInputWrapper'

import styles from './Styles/LoginFormStyles'

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

    <Button
      title='Login'
      buttonStyle={styles.button}
      onPress={props.handleSubmit}
      loading={!!props.disabled}
      disabled={!!props.disabled}
    />
  </ScrollView>
)

export default reduxForm({form: 'login'})(LoginForm)
