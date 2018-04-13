import React from 'react'
import {ScrollView} from 'react-native'
import {Field, reduxForm} from 'redux-form/immutable'
import {Switch} from 'react-native-clean-form/redux-form-immutable'

import {Button} from 'react-native-elements'
import TextInput from './TextInputWrapper'

import styles from './Styles/FormStyles'

const renderCheckbox = props => (
  <Switch
    value={props.value}
    onValueChange={props.onChange} />
)

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
    <Switch label='Admin' border={false} name='admin' />
    <Button
      title='Tambah Pengguna'
      buttonStyle={styles.primaryButton}
      onPress={props.handleSubmit}
      loading={!!props.disabled}
      disabled={!!props.disabled}
    />
  </ScrollView>
)

export default reduxForm({form: 'newUser'})(NewUserForm)
