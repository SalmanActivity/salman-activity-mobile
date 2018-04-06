import React from 'react'
import {View, ScrollView} from 'react-native'
import {reduxForm, Field} from 'redux-form'
import {Button} from 'react-native-elements'

import TextInput from './TextInputWrapper'

import styles from './Styles/FormStyles'

const NewDivisionForm = (props) => (
  <ScrollView keyboardShouldPersistTaps='always'>
    <Field
      name='name'
      component={TextInput}
      autoFocus
      placeholder='Nama Bidang'
    />

    <Button
      title='Tambah Bidang'
      buttonStyle={styles.primaryButton}
      onPress={props.handleSubmit}
      loading={!!props.disabled}
      disabled={!!props.disabled}
    />
    <Button
      title='Kembali'
      buttonStyle={styles.backButton}
      onPress={props.backHandler}
      disabled={!!props.disabled}
    />
  </ScrollView>
)

export default reduxForm({form: 'newDivision'})(NewDivisionForm)
