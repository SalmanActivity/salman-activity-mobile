import React from 'react'
import {ScrollView} from 'react-native'
import {Field, reduxForm} from 'redux-form/immutable'
import {Switch} from 'react-native-clean-form/redux-form-immutable'

import {Button} from 'react-native-elements'
import TextInput from './TextInputWrapper'
import Picker from './PickerWrapper'

import styles from './Styles/FormStyles'

const NewUserForm = (props) => (
  <ScrollView keyboardShouldPersistTaps='always'>
    <Field
      name='name'
      component={TextInput}
      autoFocus
      placeholder='Nama'
    />
    <Field
      name='username'
      component={TextInput}
      placeholder='Username'
    />
    <Field
      name='email'
      component={TextInput}
      placeholder='Email'
      keyboardType='email-address'
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
    <Field
      name='division'
      component={Picker}
      placeholder='Bidang'
      data={props.divisions}
      value={props.division}
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
