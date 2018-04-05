import React, {Component} from 'react'
import {View} from 'react-native'
import {Card, Text} from 'react-native-elements'
import PropTypes from 'prop-types'

import NewDivisionForm from '../Forms/NewDivisionForm'

import styles from './Styles/LoginStyles'

export default class NewDivision extends Component {
  static propTypes = {
    newDivisionHandler: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    error: PropTypes.string
  }

  onSubmit (form) {
    const {newDivisionHandler} = this.props
    const {name} = form

    newDivisionHandler(name)
  }

  render () {
    const {error, disabled} = this.props

    return (
      <Card title='Divisi Baru'>
        <NewDivisionForm onSubmit={this.onSubmit.bind(this)} disabled={disabled} />
        {error ? <Text style={styles.errorText}>{error}</Text> : <View />}
      </Card>
    )
  }
}
