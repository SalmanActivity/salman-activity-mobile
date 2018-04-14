import React from 'react'
import {ScrollView} from 'react-native'
import {Field, reduxForm} from 'redux-form/immutable'
import {Button} from 'react-native-elements'
import TextInput from './TextInputWrapper'
import Picker from './PickerWrapper'

import styles from './Styles/FormStyles'

const RequestForm = (props) => (
  <ScrollView keyboardShouldPersistTaps='always'>
    <Field
      name='name'
      component={TextInput}
      autoFocus
      placeholder='Nama Kegiatan'
    />
    <Field
      name='description'
      component={TextInput}
      placeholder='Deskripsi Kegiatan'
    />
    {props.admin && (
      <Field
        name='division'
        component={Picker}
        placeholder='Bidang'
        data={props.divisions}
        value={props.division}
      />
    )}
    <Field
      name='location'
      component={Picker}
      placeholder='Lokasi'
      data={props.locations}
      value={props.location}
    />
    <Field
      name='startTime'
      component={TextInput}
      placeholder='Waktu Mulai'
    />
    <Field
      name='endTime'
      component={TextInput}
      placeholder='Waktu Selesai'
    />
    <Field
      name='participantNumber'
      component={TextInput}
      placeholder='Jumlah Perkiraan Peserta'
    />
    <Field
      name='participantDescription'
      component={TextInput}
      placeholder='Deskripsi Peserta'
    />
    <Field
      name='speaker'
      component={TextInput}
      placeholder='Pembicara'
    />
    <Button
      title='Ajukan Permohonan'
      buttonStyle={styles.primaryButton}
      onPress={props.handleSubmit}
      loading={!!props.disabled}
      disabled={!!props.disabled}
    />
  </ScrollView>
)

export default reduxForm({form: 'requestForm'})(RequestForm)
