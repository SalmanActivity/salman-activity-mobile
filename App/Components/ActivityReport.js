import React, {Component} from 'react'
import {View} from 'react-native'
import {Card, Text} from 'react-native-elements'
import PropTypes from 'prop-types'

import ActivityReportForm from '../Forms/ActivityReportForm'

import styles from './Styles/LoginStyles'

export default class ActivityReport extends Component {
  static propTypes = {
    loginHandler: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    error: PropTypes.string
  }

  onSubmit (form) {
    const {loginHandler} = this.props
    const {username, password} = form

    loginHandler(username, password)
  }

  render () {
    const {error, disabled} = this.props

    return (
      <Card title='Laporan Aktivitas'>
        <ActivityReportForm onSubmit={this.onSubmit.bind(this)} disabled={disabled} />
        {error ? <Text style={styles.errorText}>{error}</Text> : <View />}
      </Card>
    )
  }
}
