import React, { Component } from 'react'
import { ScrollView, View } from 'react-native'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import Login from '../Components/Login'

import AuthActions from '../Redux/AuthRedux'

// Styles
import styles from './Styles/LoginScreenStyles'

class LoginScreen extends Component {
  static PropTypes = {
    login: PropTypes.func.isRequired,
    error: PropTypes.string
  }

  loginHandler (username, password) {
    const {login} = this.props
    login(username, password)
  }

  render () {
    const {error} = this.props

    return (
      <View style={styles.mainContainer} keyboardShouldPersistTaps='handled'>
        <ScrollView style={styles.container} keyboardShouldPersistTaps='handled'>
          <ScrollView style={styles.section} keyboardShouldPersistTaps='handled' >
            <Login
              loginHandler={this.loginHandler.bind(this)}
              error={error}
            />
          </ScrollView>
        </ScrollView>
      </View>
    )
  }
}

const mapDispatchToProps = {
  login: AuthActions.login
}

const mapStateToProps = (state) => ({
  error: state.auth.error
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
