import React, {Component} from 'react'
import {ScrollView} from 'react-native'
import PropTypes from 'prop-types'

import LoginForm from '../Forms/LoginForm'

export default class Login extends Component {
  static propTypes = {
    loginHandler: PropTypes.func.isRequired
  }

  onSubmit (form) {
    const {loginHandler} = this.props
    const {username, password} = form

    loginHandler(username, password)
  }

  render () {
    return (
      <ScrollView keyboardShouldPersistTaps='always'>
        <LoginForm onSubmit={this.onSubmit.bind(this)} />
      </ScrollView>
    )
  }
}
