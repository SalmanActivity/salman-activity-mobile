import React, {Component} from 'react'
import {View} from 'react-native'
import {Card, Text} from 'react-native-elements'
import PropTypes from 'prop-types'

import NewLocationForm from '../Forms/NewLocationForm'

import styles from './Styles/NewLocationStyles'

export default class NewLocation extends Component {
  static propTypes = {
    newLocationHandler: PropTypes.func.isRequired,
    backHandler: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    error: PropTypes.string
  }

  onSubmit (form) {
    const {newLocationHandler} = this.props
    const {name} = form

    newLocationHandler(name)
  }

  render () {
    const {error, disabled} = this.props

    return (
      <Card title='Tempat / Ruangan Baru'>
        <NewLocationForm
          onSubmit={this.onSubmit.bind(this)}
          disabled={disabled} />
        {error ? <Text style={styles.errorText}>{error}</Text> : <View />}
      </Card>
    )
  }
}
