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
    const {newLocation} = this.props
    newLocation(name)
  }

  render () {
    const {error, loggingIn} = this.props

    return (
      <View style={styles.mainContainer} keyboardShouldPersistTaps='handled'>
        <ScrollView style={styles.container} keyboardShouldPersistTaps='handled'>
          <ScrollView style={styles.section} keyboardShouldPersistTaps='handled' >
            <NewLocation
              newLocationHandler={this.newLocationHandler.bind(this)}
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
  newLocation: LocationActions.newLocation
}

const mapStateToProps = (state) => ({
  //error: state.auth.error,
  //loggingIn: state.auth.loggingIn
})

export default connect(mapStateToProps, mapDispatchToProps)(NewLocationScreen)
