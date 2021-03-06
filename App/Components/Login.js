import React, {Component} from 'react'
import {View} from 'react-native'
import {Card, Text} from 'react-native-elements'
import PropTypes from 'prop-types'

import LoginForm from '../Forms/LoginForm'

import styles from './Styles/LoginStyles'

export default class Login extends Component {
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
      <Card title='Login'>
        <LoginForm onSubmit={this.onSubmit.bind(this)} disabled={disabled} />
        {error ? <Text style={styles.errorText}>{error}</Text> : <View />}
      </Card>
    )
  }
}
