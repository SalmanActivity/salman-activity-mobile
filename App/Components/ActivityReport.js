import React, {Component} from 'react'
import {View} from 'react-native'
import {Card, Text} from 'react-native-elements'
import PropTypes from 'prop-types'

import ActivityReportForm from '../Forms/ActivityReportForm'

import styles from './Styles/ActivityReportStyles'

export default class ActivityReport extends Component {
  static propTypes = {
    newReport: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    error: PropTypes.string
  }

  onSubmit (form) {
    const {newReport} = this.props
    const {content, photo} = form

    newReport(content, photo)
  }

  render () {
    const {error, disabled} = this.props

    return (
      <Card title='Laporan Aktivitas'>
        <ActivityReportForm onSubmit={::this.onSubmit} disabled={disabled} />
        {error ? <Text style={styles.errorText}>{error}</Text> : <View />}
      </Card>
    )
  }
}
