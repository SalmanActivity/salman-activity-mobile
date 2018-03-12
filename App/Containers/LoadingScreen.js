import React, { Component } from 'react'
import { ScrollView, ActivityIndicator } from 'react-native'

export default class LoadingScreen extends Component {
  render () {
    return (
      <ScrollView>
        <ActivityIndicator />
      </ScrollView>
    )
  }
}
