import React from 'react'
import {ScrollView} from 'react-native'
import {Field, reduxForm} from 'redux-form/immutable'
import {Button} from 'react-native-elements'
import DatePicker from './DatePickerWrapper'
import moment from 'moment'
import TextInput from './TextInputWrapper'
import Picker from './PickerWrapper'

import styles from './Styles/FormStyles'

const hoursFrom = [{label: 'Jam Mulai', value: -1},
  ...Array.from({length: 24}, (x, i) => ({label: `${i}:00`, value: i}))]

const hoursTo = [{label: 'Jam Selesai', value: -1},
  ...Array.from({length: 24}, (x, i) => ({label: `${i + 1}:00`, value: i + 1}))]

const NewRequestForm = (props) => (
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
        data={props.divisions}
        value={props.division}
      />
    )}
    <Field
      name='location'
      component={Picker}
      data={props.locations}
      value={props.location}
    />
    <Field
      name='date'
      component={DatePicker}
      placeholder='Tanggal Kegiatan'
      minDate={moment().toDate()}
    />
    <Field
      name='startHour'
      component={Picker}
      data={hoursFrom}
      value={props.startHour}
    />
    <Field
      name='endHour'
      component={Picker}
      data={hoursTo}
      value={props.endHour}
    />
    <Field
      name='participantNumber'
      component={TextInput}
      placeholder='Perkiraan Jumlah Peserta'
      keyboardType='numeric'
    />
    <Field
      name='participantDescription'
      component={TextInput}
      placeholder='Deskripsi Peserta'
    />
    <Field
      name='speaker'
      component={TextInput}
      placeholder='Narasumber'
    />
    <Field
      name='personInCharge'
      component={TextInput}
      placeholder='Penanggung Jawab Kegiatan'
    />
    <Field
      name='phoneNumber'
      component={TextInput}
      placeholder='Nomor Telepon Penanggung Jawab'
      keyboardType='numeric'
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

export default reduxForm({form: 'requestForm'})(NewRequestForm)
