import React, { Component } from 'react'
import { View, ActivityIndicator } from 'react-native'
import {connect} from 'react-redux'

import styles from './Styles/LoadingScreenStyles'

import AuthActions from '../Redux/AuthRedux'

class LogoutScreen extends Component {
  componentDidMount () {
    const {logout} = this.props
    logout()
  }

  render () {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size='large' />
      </View>
    )
  }
}

const mapDispatchToProps = {
  logout: AuthActions.logout
}

export default connect(null, mapDispatchToProps)(LogoutScreen)
