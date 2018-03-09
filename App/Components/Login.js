import React, {Component} from 'react'
import {ScrollView} from 'react-native'
import LoginForm from '../Forms/LoginForm'

export default class Login extends Component {
  onSubmit (form) {

  }

  render () {
    return (
      <ScrollView keyboardShouldPersistTaps='always'>
        <LoginForm onSubmit={this.onSubmit.bind(this)} />
      </ScrollView>
    )
  }
}
