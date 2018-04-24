import React, { Component } from 'react'
import { View, ActivityIndicator } from 'react-native'

import styles from './Styles/LoadingScreenStyles'

export default class LoadingScreen extends Component {
  render () {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size='large' />
      </View>
    )
  }
}
