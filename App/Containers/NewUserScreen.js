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

  newUserHandler (name, division, username, email, password, admin) {
    const {token, newUser} = this.props
    newUser(token, name, username, email, password, division, admin)
  }

  onError (error) {
    const {newUserFailure} = this.props
    newUserFailure(error)
  }

  render () {
    const {error, postingUser} = this.props

    return (
      <View style={styles.mainContainer} keyboardShouldPersistTaps='handled'>
        <ScrollView style={styles.container} keyboardShouldPersistTaps='handled'>
          <ScrollView style={styles.section} keyboardShouldPersistTaps='handled'>
            <NewUser
              newUserHandler={::this.newUserHandler}
              error={error}
              disabled={!!postingUser}
              onError={::this.onError}
            />
          </ScrollView>
        </ScrollView>
      </View>
    )
  }
}

const mapDispatchToProps = {
  newUser: UserActions.newUser,
  newUserFailure: UserActions.newUserFailure,
  back: () => ({ type: 'Navigation/BACK' })
}

const mapStateToProps = (state) => ({
  error: state.user.postingUserError,
  postingUser: state.user.postingUser,
  token: state.auth.token
})

export default connect(mapStateToProps, mapDispatchToProps)(NewUserScreen)
