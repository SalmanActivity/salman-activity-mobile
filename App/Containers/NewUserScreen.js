import React, { Component } from 'react'
import { ScrollView, View, ActivityIndicator } from 'react-native'
import {connect} from 'react-redux'

import NewUser from '../Components/NewUser'

import UserActions from '../Redux/UserRedux'
import DivisionActions from '../Redux/DivisionRedux'

// Styles
import styles from './Styles/LoginScreenStyles'

class NewUserScreen extends Component {
  componentDidMount () {
    const {token, getDivisions} = this.props
    getDivisions(token)
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
    const {error, postingUser, divisions: initialDivisions,
      fetchingDivisions} = this.props

    const divisions = [{label: 'Divisi', value: null},
      ...initialDivisions.map(division =>
        ({label: division.name, value: division.id}))
    ]

    return (
      <View style={styles.mainContainer} keyboardShouldPersistTaps='handled'>
        <ScrollView style={styles.container} keyboardShouldPersistTaps='handled'>
          <ScrollView style={styles.section} keyboardShouldPersistTaps='handled'>
            {fetchingDivisions
              ? <ActivityIndicator />
              : (
                <NewUser
                  newUserHandler={::this.newUserHandler}
                  error={error}
                  disabled={!!postingUser}
                  onError={::this.onError}
                  divisions={divisions}
                />
              )
            }
          </ScrollView>
        </ScrollView>
      </View>
    )
  }
}

const mapDispatchToProps = {
  newUser: UserActions.newUser,
  newUserFailure: UserActions.newUserFailure,
  getDivisions: DivisionActions.getDivisions,
  back: () => ({ type: 'Navigation/BACK' })
}

const mapStateToProps = (state) => ({
  error: state.user.postingUserError,
  postingUser: state.user.postingUser,
  token: state.auth.token,
  divisions: state.division.divisions,
  fetchingDivisions: state.division.fetchingDivisions
})

export default connect(mapStateToProps, mapDispatchToProps)(NewUserScreen)
