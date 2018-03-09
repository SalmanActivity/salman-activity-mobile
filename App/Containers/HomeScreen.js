import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import {connect} from 'react-redux'

import RoundedButton from '../Components/RoundedButton'

import AuthActions, {AuthSelectors} from '../Redux/AuthRedux'

import { Images } from '../Themes'

// Styles
import styles from './Styles/HomeScreenStyles'

class HomeScreen extends Component {
  render () {
    const {isLoggedIn, auth, logout} = this.props

    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.section} >
            <Text style={styles.sectionText}>
              {isLoggedIn ? auth.token : 'Not logged in'}
            </Text>

            {isLoggedIn && (
              <RoundedButton text='Logout' onPress={logout} />
            )}
          </View>

        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  isLoggedIn: AuthSelectors.isLoggedIn(state),
  auth: state.auth
})

const mapDispatchToProps = {
  logout: AuthActions.logout
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
