import React from 'react'
import {ScrollView} from 'react-native'
import {reduxForm, Field} from 'redux-form'
import {Button} from 'react-native-elements'

import TextInput from './TextInputWrapper'

import styles from './Styles/LoginFormStyles'

const NewUserForm = (props) => (
  <ScrollView keyboardShouldPersistTaps='always'>
    <Field
      name='name'
      component={TextInput}
      autoFocus
      placeholder='Nama'
    />
    <Field
      name='division'
      component={TextInput}
      placeholder='Bidang'
    />
    <Field
      name='username'
      component={TextInput}
      placeholder='Username'
    />
    <Field
      name='password'
      component={TextInput}
      placeholder='Password'
      secureTextEntry
    />
    <Field
      name='repassword'
      component={TextInput}
      placeholder='Ketik ulang password'
      secureTextEntry
    />

    <Button
      title='Tambah Pengguna'
      buttonStyle={styles.button}
      onPress={props.handleSubmit}
      loading={!!props.disabled}
      disabled={!!props.disabled}
    />
  </ScrollView>
)

export default reduxForm({form: 'newUser'})(NewUserForm)
