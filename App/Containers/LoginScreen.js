import React, { Component } from 'react'
import { ScrollView, Image, View, Text } from 'react-native'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import Login from '../Components/Login'

import AuthActions from '../Redux/AuthRedux'

import { Images } from '../Themes'

// Styles
import styles from './Styles/LoginScreenStyles'

class LoginScreen extends Component {
  static PropTypes = {
    login: PropTypes.func.isRequired
  }

  loginHandler (username, password) {
    const {login} = this.props
    login(username, password)
  }

  render () {
    return (
      <View style={styles.mainContainer} keyboardShouldPersistTaps='handled'>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container} keyboardShouldPersistTaps='handled'>
          <ScrollView style={styles.section} keyboardShouldPersistTaps='handled' >
            <Text style={styles.titleText}>Login</Text>
            <Login
              loginHandler={this.loginHandler.bind(this)}
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

export default connect(null, mapDispatchToProps)(LoginScreen)
