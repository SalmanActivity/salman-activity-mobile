import React, {Component} from 'react'
import {View} from 'react-native'
import {Card, Text} from 'react-native-elements'
import PropTypes from 'prop-types'

import NewRequestForm from '../Forms/NewRequestForm'

import styles from './Styles/NewRequestStyles'

export default class NewRequest extends Component {
  static propTypes = {
    newRequestForm: PropTypes.func.isRequired,
    divisions: PropTypes.array.isRequired,
    locations: PropTypes.array.isRequired,
    admin: PropTypes.bool,
    onError: PropTypes.func,
    disabled: PropTypes.bool,
    error: PropTypes.string
  }

  onSubmit (form) {
    console.tron.debug(form)
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
