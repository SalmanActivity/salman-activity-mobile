import React, {Component} from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native'
import transformDate from '../Transforms/TransformDate'
import requestStatus from '../Transforms/RequestStatus'
import Lightbox from 'react-native-lightbox'

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

  renderPicture (title, photo) {
    if (!photo) return null

    console.tron.debug(photo)
    return (
      <View>
        <Text style={styles.text}>{title}</Text>
        <Lightbox
          underlayColor='white'
          backgroundColor='white'
          renderHeader={(close) => (
            <TouchableOpacity onPress={close}>
              <Text style={styles.closeButton}>×</Text>
            </TouchableOpacity>)}
          >
          <Image
            style={styles.picture}
            source={{uri: photo}}
            resizeMode='contain'
            resizeMethod='resize'
          />
        </Lightbox>
      </View>
    )
  }

  render () {
    const {name, description, issuer, issuedTime, division, location,
      startTime, endTime, participantNumber, participantDescription,
      speaker, status, reportContent, reportPhoto} = this.props

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
        {this.renderUnit('Laporan', reportContent)}
        {this.renderPicture('', reportPhoto)}
      </View>
    )
  }
}
