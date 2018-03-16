import React, { Component } from 'react'
import { ScrollView, Text, View } from 'react-native'
import {connect} from 'react-redux'
import {Button} from 'react-native-elements'
import AuthActions, {AuthSelectors} from '../Redux/AuthRedux'

// Styles
import styles from './Styles/HomeScreenStyles'

class HomeScreen extends Component {
  render () {
    const {isLoggedIn, auth, logout} = this.props

    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          <View style={styles.section} >
            <Text style={styles.sectionText}>
              {isLoggedIn ? auth.token : 'Not logged in'}
            </Text>

            {isLoggedIn && (
              <Button title='Logout' onPress={logout} />
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
