import React from 'react'
import {ScrollView} from 'react-native'
import {reduxForm, Field} from 'redux-form'
import {Button} from 'react-native-elements'

import TextInput from './TextInputWrapper'

import styles from './Styles/LoginFormStyles'

const NewLocationForm = (props) => (
  <ScrollView keyboardShouldPersistTaps='always'>
    <Field
      name='name'
      component={TextInput}
      autoFocus
      placeholder='Nama Lokasi'
    />
    <Button
      title='Tambah Lokasi'
      buttonStyle={styles.button}
      onPress={props.handleSubmit}
      loading={!!props.disabled}
      disabled={!!props.disabled}
    />
  </ScrollView>
)

export default reduxForm({form: 'newLocation'})(NewLocationForm)
