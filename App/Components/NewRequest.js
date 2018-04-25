import React, {Component} from 'react'
import {View} from 'react-native'
import {Card, Text} from 'react-native-elements'
import PropTypes from 'prop-types'
import moment from 'moment'

import NewRequestForm from '../Forms/NewRequestForm'

import styles from './Styles/NewRequestStyles'

export default class NewRequest extends Component {
  static propTypes = {
    newRequestHandler: PropTypes.func.isRequired,
    divisions: PropTypes.array.isRequired,
    locations: PropTypes.array.isRequired,
    admin: PropTypes.bool,
    onError: PropTypes.func,
    disabled: PropTypes.bool,
    error: PropTypes.string
  }

  onSubmit (form) {
    const {onError, newRequestHandler} = this.props
    const {name, description, division, location, date, startHour, endHour,
      participantNumber, participantDescription, speaker, personInCharge,
      phoneNumber} = form

    if (!date) return onError('Masukkan tanggal.')
    if (startHour === null || startHour === -1) {
      return onError('Masukkan jam mulai.')
    }
    if (endHour === null || startHour === -1) {
      return onError('Masukkan jam selesai.')
    }

    const startTime = moment(date, 'DD-MM-YYYY').hour(startHour).unix() * 1000
    const endTime = moment(date, 'DD-MM-YYYY')
      .hour(endHour - 1)
      .minute(59).second(59)
      .unix() * 1000

    if (startTime > endTime) {
      return onError('Jam mulai harus lebih awal dari jam selesai.')
    }

    newRequestHandler(name, description, division, location, startTime,
      endTime, participantNumber, participantDescription, speaker,
      personInCharge, phoneNumber)
  }

  render () {
    const {error, disabled, divisions, admin, locations} = this.props

    return (
      <Card title='Permohonan Izin Kegiatan'>
        <NewRequestForm
          onSubmit={this.onSubmit.bind(this)}
          disabled={disabled}
          divisions={divisions}
          locations={locations}
          admin={admin}
        />
        {error ? <Text style={styles.errorText}>{error}</Text> : <View />}
      </Card>
    )
  }
}
