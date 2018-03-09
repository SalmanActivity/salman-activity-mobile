import React, { Component } from 'react'
import { ScrollView, Image, View, Text } from 'react-native'

import Login from '../Components/Login'

import { Images } from '../Themes'

// Styles
import styles from './Styles/LoginScreenStyles'

export default class LoginScreen extends Component {
  render () {
    return (
      <View style={styles.mainContainer} keyboardShouldPersistTaps='handled'>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container} keyboardShouldPersistTaps='handled'>
          <ScrollView style={styles.section} keyboardShouldPersistTaps='handled' >
            <Text style={styles.titleText}>Login</Text>
            <Login />
          </ScrollView>
        </ScrollView>
      </View>
    )
  }
}
