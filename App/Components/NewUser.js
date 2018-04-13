import React, {Component} from 'react'
import {View} from 'react-native'
import {Card, Text} from 'react-native-elements'
import PropTypes from 'prop-types'

import NewUserForm from '../Forms/NewUserForm'

import styles from './Styles/LoginStyles'

export default class NewUser extends Component {
  static propTypes = {
    newUserHandler: PropTypes.func.isRequired,
    onError: PropTypes.func,
    disabled: PropTypes.bool,
    error: PropTypes.string
  }

  onSubmit (form) {
    const {newUserHandler, onError} = this.props
    const {name, division, username, password, admin, repassword} = form

    if (password !== repassword) {
      if (onError) onError('Password tidak sama')
    } else {
      newUserHandler(name, division, username, password, !!admin)
    }
  }

  render () {
    const {error, disabled} = this.props

    return (
      <Card title='Pengguna Baru'>
        <NewUserForm
          onSubmit={this.onSubmit.bind(this)}
          disabled={disabled} />
        {error ? <Text style={styles.errorText}>{error}</Text> : <View />}
      </Card>
    )
  }
}
