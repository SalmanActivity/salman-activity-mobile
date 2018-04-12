import React, {Component} from 'react'
import {View, Text} from 'react-native'
import transformDate from '../Transforms/TransformDate'
import requestStatus from '../Transforms/RequestStatus'

import styles from './Styles/RequestDetailStyles'

export default class RequestDetail extends Component {
  renderUnit (title, content) {
    if (!content) return null

    return (
      <View>
        <Text style={styles.text}>{title}</Text>
        <Text style={styles.innerText}>{content}</Text>
      </View>
    )
  }

  render () {
    const {name, description, issuer, issuedTime, division, location,
      startTime, endTime, participantNumber, participantDescription,
      speaker, status} = this.props

    return (
      <View>
        {this.renderUnit('Nama Acara', name)}
        {this.renderUnit('Deskripsi Acara', description)}
        {this.renderUnit('Diajukan Pada', transformDate(issuedTime))}
        {this.renderUnit('Diajukan Oleh', issuer ? issuer.name : null)}
        {this.renderUnit('Bidang', division ? division.name : null)}
        {this.renderUnit('Lokasi', location ? location.name : null)}
        {this.renderUnit('Waktu Mulai', transformDate(startTime))}
        {this.renderUnit('Waktu Selesai', transformDate(endTime))}
        {this.renderUnit('Peserta', participantNumber
          ? `${participantNumber} orang, ${participantDescription}` : null)}
        {this.renderUnit('Pembicara', speaker)}
        {this.renderUnit('Status Pengajuan', requestStatus(status))}
      </View>
    )
  }
}
