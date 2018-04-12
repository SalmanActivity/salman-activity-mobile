import React from 'react'
import {ScrollView} from 'react-native'
import {reduxForm, Field} from 'redux-form'
import {Button} from 'react-native-elements'

import TextInput from './TextInputWrapper'

import styles from './Styles/ActivityReportFormStyles'

const ActivityReportForm = (props) => (
  <ScrollView keyboardShouldPersistTaps='always'>
    <Field
      name='Kegiatan'
      component={TextInput}
      autoFocus
      placeholder='Deskripsi Kegiatan'
    />

    <Button
      title='Unggah Foto'
      buttonStyle={styles.buttonUpload}
      onPress={props.handleSubmit}
      loading={!!props.disabled}
      disabled={!!props.disabled}
    />

    <Button
      title='Lapor!'
      buttonStyle={styles.buttonPost}
      onPress={props.handleSubmit}
      loading={!!props.disabled}
      disabled={!!props.disabled}
    />
  </ScrollView>
)

export default reduxForm({form: 'activityReport'})(ActivityReportForm)
