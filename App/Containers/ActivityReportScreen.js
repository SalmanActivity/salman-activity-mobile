import React, { Component } from 'react'
import { ScrollView, View } from 'react-native'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import ActivityReport from '../Components/ActivityReport'

import AuthActions from '../Redux/AuthRedux'

// Styles
import styles from './Styles/ActivityReportScreenStyles'

class ActivityReportScreen extends Component {
  static PropTypes = {
    error: PropTypes.string
  }

  render () {
    const {error, loggingIn} = this.props

    return (
      <View style={styles.mainContainer} keyboardShouldPersistTaps='handled'>
        <ScrollView style={styles.container} keyboardShouldPersistTaps='handled'>
          <ScrollView style={styles.section} keyboardShouldPersistTaps='handled' >
            <ActivityReport
              loginHandler={this.loginHandler.bind(this)}
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
  login: AuthActions.login
}

const mapStateToProps = (state) => ({
  error: state.auth.error,
  loggingIn: state.auth.loggingIn
})

export default connect(mapStateToProps, mapDispatchToProps)(ActivityReportScreen)
