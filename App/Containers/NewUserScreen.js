import React, { Component } from 'react'
import { ScrollView, View } from 'react-native'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import NewUser from '../Components/NewUser'

import UserActions from '../Redux/UserRedux'

// Styles
import styles from './Styles/LoginScreenStyles'

class NewUserScreen extends Component {
  static PropTypes = {
    newUser: PropTypes.func.isRequired,
    error: PropTypes.string
  }

  newUserHandler (name, division, username, password, admin) {
    const {newUser} = this.props
    newUser(name, username, password, division, admin)
    //newUser: ['userToken', 'name', 'username', 'password', 'division', 'admin']
  }

  render () {
    const {error, loggingIn} = this.props

    return (
      <View style={styles.mainContainer} keyboardShouldPersistTaps='handled'>
        <ScrollView style={styles.container} keyboardShouldPersistTaps='handled'>
          <ScrollView style={styles.section} keyboardShouldPersistTaps='handled' >
            <NewUser
              newUserHandler={this.newUserHandler.bind(this)}
              error={error}
              disabled={!!loggingIn}
            />
          </ScrollView>
        </ScrollView>
      </View>
    )
  }
}

const mapDispatchToProps = {
  newUser: UserActions.newUser
}

const mapStateToProps = (state) => ({
  //error: state.auth.error,
  //loggingIn: state.auth.loggingIn
})

export default connect(mapStateToProps, mapDispatchToProps)(NewUserScreen)
