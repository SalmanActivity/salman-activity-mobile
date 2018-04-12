import React, { Component } from 'react'
import { ScrollView, View } from 'react-native'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import NewLocation from '../Components/NewLocation'

import LocationActions from '../Redux/LocationRedux'

// Styles
import styles from './Styles/LoginScreenStyles'

class NewLocationScreen extends Component {
  static PropTypes = {
    newLocation: PropTypes.func.isRequired,
    error: PropTypes.string
  }

  newLocationHandler (name) {
    const {newLocation, token} = this.props
    newLocation(token, name)
  }

  render () {
    const {error, loggingIn} = this.props

    return (
      <View style={styles.mainContainer} keyboardShouldPersistTaps='handled'>
        <ScrollView style={styles.container} keyboardShouldPersistTaps='handled'>
          <ScrollView style={styles.section} keyboardShouldPersistTaps='handled' >
            <NewLocation
              newLocationHandler={this.newLocationHandler.bind(this)}
              backHandler={back}
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
  newLocation: LocationActions.newLocation,
  back: () => ({ type: 'Navigation/BACK' })
}

const mapStateToProps = (state) => ({
  error: state.location.postingLocationError,
  postingLocation: state.location.postingLocation,
  token: state.auth.token
})

export default connect(mapStateToProps, mapDispatchToProps)(NewLocationScreen)
