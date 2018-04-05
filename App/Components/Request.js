import React, {Component} from 'react'
import {View} from 'react-native'
import {Card, Text} from 'react-native-elements'
import PropTypes from 'prop-types'

import styles from './Styles/RequestStyle'

export default class Login extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired
  }

  renderRow (item) {
    return (
      <ListItem
        title={item.title}
        subtitle={item.subtitle} />
    )
  }

  render () {
    const {data} = this.props

    if (data.length === 0) {
      return (
        <View style={styles.noDataView}>
          <Text>Tidak ada data</Text>
        </View>
      )
    }
    'userToken', 'name', 'description', 'division', 'location',
    'startTime', 'endTime', 'participantNumber', 'participantDescription',
    'speaker', 'issuedTime'
    return (
      <ScrollView>
        <Text>Nama Acara: {this.props.name}</Text>
        <Text>Disubmit pada: {this.props.issuedTime}</Text>
        <Text>Deskripsi: {this.props.description}</Text>
        <Text>Bidang: {this.props.division}</Text>
        <Text>Lokasi: {this.props.location}</Text>
        <Text>Waktu mulai: {this.props.startTime}</Text>
        <Text>Waktu selesai: {this.props.endTime}</Text>
        <Text>Jumlah peserta: {this.props.participantNumber}</Text>
        <Text>Pembicara: {this.props.speaker}</Text>
        
        <Text>Peringatan!</Text>
        <Text>Sudah ada acara lain yang disetujui pada waktu tersebut</Text>
        <Text>Ada acara lain yang mengajukan pada waktu tersebut</Text>
        <Text>((Nama acara))</Text>
        <Text>Disubmit pada: </Text>
      </ScrollView>
    )
  }
}
